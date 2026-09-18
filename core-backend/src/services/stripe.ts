// @ts-nocheck
import Stripe from 'stripe';
// @ts-nocheck
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || 'sk_test_mock';
// If we don't have a real key, we mock the stripe instance for local development
const isMock = STRIPE_SECRET_KEY === 'sk_test_mock';
export const stripe = isMock
  ? ({
      accounts: {
        create: async () => ({ id: `acct_mock_${Date.now()}` }),
      },
      accountLinks: {
        create: async (params: { account: string }) => ({
          url: `https://connect.stripe.com/setup/mock?account=${params.account}`,
        }),
      paymentIntents: {
        create: async () => ({
          client_secret: 'pi_mock_secret',
          status: 'requires_payment_method',
    } as unknown as Stripe)
  : new Stripe(STRIPE_SECRET_KEY, { apiVersion: '2024-06-20' });
export async function createStripeConnectAccount(clubId: string) {
  const club = await prisma.club.findUnique({ where: { id: clubId } });
  if (!club) throw new Error('Club not found');
  if (club.stripeAccountId) {
    return club.stripeAccountId;
  }
  const account = await stripe.accounts.create({
    type: 'express',
    country: club.country,
    email: 'admin@' + (club.domain || `${club.slug}.clubmast.com`),
    capabilities: {
      card_payments: { requested: true },
      transfers: { requested: true },
    },
    business_type: 'non_profit',
  });
  await prisma.club.update({
    where: { id: clubId },
    data: { stripeAccountId: account.id },
  return account.id;
}
export async function getStripeOnboardingLink(accountId: string) {
  const accountLink = await stripe.accountLinks.create({
    account: accountId,
    refresh_url: `http://localhost:5173/clubs/payments?refresh=true`,
    return_url: `http://localhost:5173/clubs/payments?success=true`,
    type: 'account_onboarding',
  return accountLink.url;
