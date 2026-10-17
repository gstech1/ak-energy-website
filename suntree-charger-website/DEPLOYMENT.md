# Separate deployment

This is a standalone website inside the repository. Keep the existing Arkar Min Thuka site deployment pointed at the repository root. Create a second Coolify application for this folder.

## Coolify settings

- Repository: the same `ak-energy-website` repository
- Branch: `main`
- Base Directory: `/suntree-charger-website`
- Build command: `npm run build`
- Start command: `npm run start`
- Port: `3000`
- Domain: `suntreechargermyanmar.com` (also add `www.suntreechargermyanmar.com` if desired)

Point the new domain's DNS records to the Coolify server before enabling HTTPS. Do not change the Base Directory or domain settings of the existing Arkar Min Thuka application.
