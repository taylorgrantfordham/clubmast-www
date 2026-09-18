import { PrismaClient } from '@prisma/client';
import { exec } from 'child_process';
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';

const execAsync = promisify(exec);
const prisma = new PrismaClient();

export async function generateAstroSite(clubId: string) {
  console.log(`[SiteFactory] Initiating Zero-JS build for club: ${clubId}`);

  try {
    // 1. Fetch the complete club profile
    const club = await prisma.club.findUnique({
      where: { id: clubId },
      include: {
        teams: true,
        fixtures: {
          orderBy: { date: 'asc' },
        },
      },
    });

    if (!club) {
      throw new Error(`Club ${clubId} not found`);
    }

    // 2. Inject Data into the Astro Template
    // We write the active club data to a JSON file that the Astro
    // static site generator will read during build time.
    const astroDataPath = resolve(__dirname, '../../../src/data/active-club.json');
    writeFileSync(astroDataPath, JSON.stringify(club, null, 2));

    console.log(`[SiteFactory] Wrote club data to ${astroDataPath}`);

    // 3. Trigger the Astro Build Process
    // In a production environment, this would hit the Vercel API or
    // spin up a Docker container. Here, we run it locally against the template.
    console.log(`[SiteFactory] Starting Astro static generation...`);

    const astroProjectDir = resolve(__dirname, '../../../');
    const { stdout, stderr } = await execAsync('npm run build', {
      cwd: astroProjectDir,
    });

    console.log(`[SiteFactory] Build completed successfully.`);
    console.log(stdout);

    if (stderr) {
      console.warn(`[SiteFactory] Build Warnings:`, stderr);
    }

    // 4. (Future) Push to Edge CDN
    // const deployRes = await fetch('https://api.vercel.com/v13/deployments', { ... });

    return { success: true, message: 'Static site generated successfully', clubSlug: club.slug };
  } catch (error) {
    console.error(`[SiteFactory] Build failed:`, error);
    throw error;
  }
}
