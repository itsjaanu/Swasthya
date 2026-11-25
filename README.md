# Swasthya Connect AI

**One Platform. Connected Healthcare. Every Indian.**

A responsive, vanilla HTML/CSS/JavaScript healthcare platform demo designed for direct GitHub Pages deployment.

## Start here
Open `index.html` in a modern browser. The first screen is always **Sign In / Sign Up** unless a demo session is active in that browser tab.

### Demo sign-in
- Patient: `patient@demo.in` / `demo123`
- Doctor: `doctor@demo.in` / `demo123`

You can also create separate local demo accounts for any of the ten roles. Each account receives its own account ID and profile. Sign out to return to the authentication screen.

## GitHub Pages deployment
1. Create a GitHub repository.
2. Upload the contents of this project into the repository root (not an extra nested folder).
3. Commit the changes.
4. Open repository **Settings**.
5. Select **Pages**.
6. Choose **Deploy from a branch**.
7. Select the `main` branch and `/ (root)` folder.
8. Save and open the generated GitHub Pages website.

No Node.js, npm, build tools, terminal commands or server are required.

## Included
- Sign In and Sign Up as the entry point
- Ten account roles with role-specific navigation
- Separate demo profiles and account IDs
- Profile editing, role-aware dashboard, notifications and language selector
- Healthcare discovery, appointments and health-record demo screens
- Medical camp creation, camp history and village coverage filters
- Responsive desktop and mobile layouts
- India-wide state/UT selector
- English, Hindi, Telugu and Tamil language scaffolding
- Demo labels and clear warnings where live integrations are not configured

## Important security and deployment notes
This is a **frontend demonstration**, not a production healthcare system. Demo accounts and profiles are stored in browser local storage; the sample password handling is intentionally simple for demonstration and is **not secure authentication**. Do not enter real patient information, passwords in use elsewhere, or sensitive medical data.

For real multi-user accounts and protected healthcare information:
- Configure Supabase Auth or another trusted identity provider.
- Store profile and application data in a secured database.
- Enforce role-based access and row-level security on the server/database, not only in the browser.
- Use verified provider integrations, consent workflows, audit logs, secure file storage and appropriate Indian privacy/security compliance review.
- Never rely on local storage or frontend role checks to protect medical records.

The map, AI assistant, provider directory, ambulance operations and healthcare availability are demo interfaces. They do not represent live verified services, medical advice, bookings or dispatches.
