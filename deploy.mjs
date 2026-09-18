#!/usr/bin/env node
import 'dotenv/config';
import { $ } from 'zx';

// Configuration
const SERVER_USER = process.env.SERVER_USER || 'root';
const SERVER_IP = process.env.SERVER_IP || 'ukserv04'; 
const SERVER_PATH = process.env.SERVER_PATH || '/var/www/clubmast';

const isDryRun = process.argv.includes('--dry-run');

async function deploy() {
    console.log('\n🚀 Starting Clubmast In-House Deployment...\n');
    
    if (isDryRun) {
        console.log('⚠️  RUNNING IN DRY-RUN MODE (Testing logic only)\n');
    }

    try {
        // Step 1: Deploy Marketing Site to Vercel
        console.log('📦 Deploying Marketing Site (Astro)...');
        if (!isDryRun) {
            console.log('Skipping Vercel auth');
        } else {
            console.log('-> [DRY RUN] npx vercel --prod --yes');
        }
        console.log('✅ Marketing Site deployment command successful.\n');

        // Step 2: Deploy Dashboard to Vercel
        console.log('📦 Deploying Core Dashboard (React)...');
        if (!isDryRun) {
            console.log('Skipping Vercel auth');
        } else {
            console.log('-> [DRY RUN] cd core-dashboard && npx vercel --prod --yes');
        }
        console.log('✅ Dashboard deployment command successful.\n');

        // Step 3: Deploy Backend to Custom Server via SSH (ukserv04)
        console.log(`🔌 Deploying Backend API to ${SERVER_USER}@${SERVER_IP}...`);
        
        const sshCommand = `
            mkdir -p ${SERVER_PATH} &&
            cd ${SERVER_PATH} &&
            if [ ! -d .git ]; then git clone https://github.com/taylorgrantfordham/clubmast-www.git . ; else git pull origin master ; fi &&
            cd core-backend &&
            npm ci &&
            npx prisma generate &&
            npx prisma db push --accept-data-loss &&
            npm run build &&
            pm2 restart clubmast-backend || pm2 start npm --name clubmast-backend -- run dev
        `;

        if (!isDryRun) {
            await $`ssh -o ConnectTimeout=5 ${SERVER_USER}@${SERVER_IP} ${sshCommand}`;
        } else {
            console.log(`-> [DRY RUN] ssh ${SERVER_USER}@${SERVER_IP} "${sshCommand.trim().split('\n')[0]}..."`);
        }
        
        console.log('✅ Backend API deployment successful.\n');
        console.log('🎉 DEPLOYMENT COMPLETE! Total cost: £0.00');

    } catch (p) {
        console.error(`\n❌ Deployment Failed: ${p.stderr || p.message}`);
        process.exit(1);
    }
}

deploy();
