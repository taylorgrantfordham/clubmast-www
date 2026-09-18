# Clubmast: 90-Day Execution Plan

We have built a flawless marketing foundation and laid the structural backend for the platform. To turn this into a revenue-generating business, the next 3 months (90 days) must be ruthlessly focused on completing the Minimum Viable Product (MVP) and launching a closed beta.

Here is the tactical sprint plan for the next 90 days across Engineering, Marketing, and Operations.

---

## Month 1: Closing the SaaS Loop
**Objective:** A club owner can sign up, create their club, and manage their teams in a secure dashboard.

### Engineering
*   **Authentication & Security:** Implement a robust identity provider (e.g., Clerk, Auth0, or custom JWTs) into `core-backend` and wire it into the `core-dashboard`.
*   **Dashboard Wiring:** Connect the React `core-dashboard` to our Express API. Build out the critical UI views:
    *   **Club Overview:** Dashboard showing upcoming fixtures and recent results.
    *   **Squad Manager:** UI to add/edit players, parents, and coaches.
    *   **Fixture Generator:** A calendar view to schedule matches against opponents.
*   **CI/CD Pipeline:** Set up GitHub Actions to automatically lint, test, and deploy the `core-backend` and `core-dashboard` to a staging environment (e.g., Heroku/Render + Vercel).

### Marketing & Ops
*   **Lead Generation:** Deploy the `clubmast-www` marketing site to production. Add a prominent "Join the Waitlist" or "Start Beta" CTA that connects to a CRM (HubSpot/Mailchimp).
*   **SEO Activation:** Submit the generated `sitemap-index.xml` to Google Search Console to begin indexing the 12 European locales immediately.

---

## Month 2: The "Zero-JS Factory" & The Money
**Objective:** Clubs automatically get their lightning-fast public website, and we can legally process their payments.

### Engineering
*   **The Website Orchestrator:** Build the microservice that listens for a new club creation in the database, injects their specific data (colors, crest, fixtures) into our Astro template, and triggers an automated deployment via the Vercel or Cloudflare API.
*   **Custom Domain Routing:** Configure wildcard DNS and SSL provisioning so a club can point `myfootballclub.com` to our Astro generator seamlessly.
*   **Stripe Connect Integration:** Implement the complex payment routing. 
    *   Allow clubs to KYC and attach their bank accounts.
    *   Build the engine to process a £10 match fee, sending £9.50 to the club and keeping a £0.50 platform fee.

### Marketing & Ops
*   **Content Marketing:** Publish 4 high-value SEO articles on the marketing site targeting club secretaries (e.g., "How to collect subs automatically", "Best website builders for amateur sports").
*   **Legal:** Draft and finalize Terms of Service, Privacy Policy, and GDPR-compliant data processing agreements (critical for handling minors' data in the safeguarding engine).

---

## Month 3: Mobile Matchday & Closed Beta
**Objective:** Coaches can manage the weekend from their phones, and 10 real clubs test the platform in the wild.

### Engineering
*   **The Coach's App (MVP):** Spin up a React Native (Expo) mobile app focused on one job: the Matchday Engine. 
    *   Push notifications for player availability ("Are you playing Saturday?").
    *   Side-of-pitch UI to record goals, cards, and attendance (offline-first capability).
*   **E2E Testing:** Write Playwright integration tests for the critical paths: User Sign Up, Payment Processing, and Match Creation. 

### Marketing & Ops
*   **Closed Beta Launch:** Onboard 5 to 10 "friendly" clubs (clubs you have a personal relationship with). White-glove onboard them, generate their websites, and run their weekend matchday through the system.
*   **Feedback Loop:** Set up a tight Slack/Discord channel with the beta testers. Fix bugs in real-time.
*   **The Case Study:** Document the success of the beta clubs (e.g., "How Manchester Wanderers saved 10 hours a week and increased fee collection by 40%"). Use this to fuel Month 4's public launch.
