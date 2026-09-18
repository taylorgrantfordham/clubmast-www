import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { requireAuth } from './middleware/auth';
import { Request, Response } from 'express';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// ---------------------------------------------------------
// API Routes: Core & Clubs
// ---------------------------------------------------------

// ---------------------------------------------------------
// API Routes: Authentication
// ---------------------------------------------------------

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-clubmast-key';

app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return res.status(400).json({ error: 'Email already in use' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { email, password: hashedPassword, firstName, lastName },
    });

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    res.status(201).json({ token, user: { id: user.id, email: user.email, firstName, lastName } });
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !user.password) return res.status(401).json({ error: 'Invalid credentials' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    res.status(200).json({
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

import { createStripeConnectAccount, getStripeOnboardingLink, stripe } from './services/stripe';

// ---------------------------------------------------------
// API Routes: Payments (Stripe Connect)
// ---------------------------------------------------------

app.post('/api/clubs/:clubId/stripe/onboard', requireAuth, async (req: Request, res: Response) => {
  try {
    const accountId = await createStripeConnectAccount(req.params.clubId);
    const url = await getStripeOnboardingLink(accountId);
    res.json({ url });
  } catch {
    res.status(500).json({ error: 'Failed to create Stripe onboarding link' });
  }
});

app.post('/api/fixtures/:fixtureId/pay', requireAuth, async (req: Request, res: Response) => {
  try {
    const { amount } = req.body; // e.g. 1000 for �10.00
    const fixture = await prisma.fixture.findUnique({
      where: { id: req.params.fixtureId },
      include: { club: true },
    });
    if (!fixture || !fixture.club.stripeAccountId) {
      return res.status(400).json({ error: 'Club not connected to Stripe' });
    }

    // Create a PaymentIntent, routing funds to the Club's connected account,
    // taking a �0.50 application fee.
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: fixture.club.currency.toLowerCase(),
      application_fee_amount: 50, // 50 pence / cents
      transfer_data: {
        destination: fixture.club.stripeAccountId,
      },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch {
    res.status(500).json({ error: 'Payment failed' });
  }
});

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'clubmast-core' });
});

app.get('/api/clubs', requireAuth, async (req: Request, res: Response) => {
  try {
    const clubs = await prisma.club.findMany();
    res.json(clubs);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

import { generateAstroSite } from './services/site-generator';

app.post('/api/clubs', requireAuth, async (req: Request, res: Response) => {
  try {
    const { name, slug, sport, country } = req.body;
    const club = await prisma.club.create({
      data: { name, slug, sport, country },
    });
    res.status(201).json(club);

    // Fire off the background site generation process
    generateAstroSite(club.id).catch(console.error);
  } catch {
    res.status(400).json({ error: 'Failed to create club' });
  }
});

app.get('/api/clubs/:slug', async (req, res) => {
  try {
    const club = await prisma.club.findUnique({
      where: { slug: req.params.slug },
      include: {
        teams: true,
        fixtures: { orderBy: { date: 'asc' }, take: 5 },
      },
    });
    if (!club) return res.status(404).json({ error: 'Club not found' });
    res.json(club);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

// ---------------------------------------------------------
// API Routes: Teams & Memberships
// ---------------------------------------------------------

app.get('/api/clubs/:clubId/teams', async (req, res) => {
  try {
    const teams = await prisma.team.findMany({
      where: { clubId: req.params.clubId },
      include: { members: true },
    });
    res.json(teams);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/clubs/:clubId/members/invite', requireAuth, async (req: Request, res: Response) => {
  try {
    const { email, role } = req.body;
    const clubId = req.params.clubId;
    // In real life, send email via SendGrid here
    // For MVP, if user doesn't exist, we create a placeholder user
    let user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      user = await prisma.user.create({ data: { email, firstName: 'Invited', lastName: 'User' } });
    }
    const membership = await prisma.membership.upsert({
      where: { userId_clubId: { userId: user.id, clubId } },
      update: { role },
      create: { userId: user.id, clubId, role, status: 'PENDING' },
    });
    res.status(201).json(membership);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/clubs/:clubId/members', async (req, res) => {
  try {
    const members = await prisma.membership.findMany({
      where: { clubId: req.params.clubId },
      include: { user: true },
    });
    res.json(members);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

// ---------------------------------------------------------
// API Routes: Fixtures & Matchday
// ---------------------------------------------------------

app.get('/api/clubs/:clubId/fixtures', async (req, res) => {
  try {
    const fixtures = await prisma.fixture.findMany({
      where: { clubId: req.params.clubId },
      orderBy: { date: 'desc' },
      include: { team: true, selections: true },
    });
    res.json(fixtures);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/teams/:teamId/fixtures', async (req, res) => {
  try {
    const { date, type, isHome, opponent, venue } = req.body;
    const team = await prisma.team.findUnique({ where: { id: req.params.teamId } });
    if (!team) return res.status(404).json({ error: 'Team not found' });

    const fixture = await prisma.fixture.create({
      data: {
        clubId: team.clubId,
        teamId: team.id,
        date: new Date(date),
        type,
        isHome,
        opponent,
        venue,
      },
    });
    res.status(201).json(fixture);
  } catch {
    res.status(400).json({ error: 'Failed to create fixture' });
  }
});

app.listen(port, () => {
  console.log('Clubmast Core API running on http://localhost:' + port);
});
