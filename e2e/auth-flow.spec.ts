import { test, expect } from '@playwright/test';

test('Club Creation Flow', async ({ page }) => {
  // 1. Visit Dashboard
  await page.goto('http://localhost:5173/login');
  
  // 2. Login
  await page.fill('input[type="email"]', 'admin@manwanderers.com');
  await page.fill('input[type="password"]', 'password123'); // Assuming seeded
  await page.click('button[type="submit"]');

  // 3. Verify Home
  await expect(page.locator('h1')).toContainText('Welcome back!');

  // 4. Create Club
  await page.click('text="Claim a new club"');
  await page.fill('input[name="name"]', 'Automated Test Club');
  await page.selectOption('select[name="sport"]', 'football');
  await page.click('button[type="submit"]');

  // 5. Verify Club Dashboard
  await expect(page.locator('h1')).toContainText('Automated Test Club');
});

test('Stripe Onboarding Redirect', async ({ page }) => {
  // Assuming logged in and on a club page
  await page.goto('http://localhost:5173/clubs/automated-test-club/payments');
  
  // Check that the stripe button exists
  const connectBtn = page.locator('text="Set up Bank Account"');
  await expect(connectBtn).toBeVisible();
});
