import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // 1. Create a Club Owner
  const owner = await prisma.user.upsert({
    where: { email: 'admin@manwanderers.com' },
    update: {},
    create: {
      email: 'admin@manwanderers.com',
      firstName: 'Alex',
      lastName: 'Ferguson',
    },
  });

  // 2. Create the Club
  const club = await prisma.club.upsert({
    where: { slug: 'manchester-wanderers' },
    update: {},
    create: {
      name: 'Manchester Wanderers',
      slug: 'manchester-wanderers',
      sport: 'football',
      country: 'GB',
      currency: 'GBP',
    },
  });

  // 3. Link Owner to Club
  await prisma.membership.upsert({
    where: {
      userId_clubId: {
        userId: owner.id,
        clubId: club.id,
      },
    },
    update: {},
    create: {
      userId: owner.id,
      clubId: club.id,
      role: 'OWNER',
    },
  });

  // 4. Create Teams
  const firstTeam = await prisma.team.create({
    data: {
      clubId: club.id,
      name: 'First Team',
      gender: 'MALE',
      ageGroup: 'SENIOR',
    },
  });

  const reserves = await prisma.team.create({
    data: {
      clubId: club.id,
      name: 'Reserves',
      gender: 'MALE',
      ageGroup: 'SENIOR',
    },
  });

  // 5. Create some upcoming and past Fixtures
  const today = new Date();

  await prisma.fixture.createMany({
    data: [
      {
        clubId: club.id,
        teamId: firstTeam.id,
        date: new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000), // Last week
        type: 'LEAGUE',
        isHome: true,
        opponent: 'Salford City FC',
        venue: 'Wanderers Stadium',
        homeScore: 2,
        awayScore: 1,
        status: 'COMPLETED',
      },
      {
        clubId: club.id,
        teamId: firstTeam.id,
        date: new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000), // In 2 days
        type: 'CUP',
        isHome: false,
        opponent: 'Bury AFC',
        venue: 'Gigg Lane',
        status: 'SCHEDULED',
      },
      {
        clubId: club.id,
        teamId: reserves.id,
        date: new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000), // In 3 days
        type: 'LEAGUE',
        isHome: true,
        opponent: 'Altrincham Reserves',
        venue: 'Wanderers Training Ground',
        status: 'SCHEDULED',
      },
    ],
  });

  console.log('✅ Seed complete! Created Manchester Wanderers, 2 teams, and 3 fixtures.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
