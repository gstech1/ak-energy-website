# Public website deployment

This is the existing public website and website CMS login. Keep its current Coolify application and the `/management` route in place.

## Coolify application settings

- Source repository: `gstech1/ak-energy-website`
- Branch: `main`
- Build strategy: Nixpacks / Node.js
- Base directory: `/`
- Build command: `npm run build`
- Start command: `npm start`
- Exposed port: `3000`
- Public domain: `https://suntreemyanmar.com`
- Build-time environment variable: `NEXT_PUBLIC_API_URL=https://api.suntreemyanmar.com`

The site reads its editable products, projects, ads, and uploaded images from the existing SWMS API. Keep the production API and database unchanged when deploying this frontend. The production build refuses to run without a public API URL or if the URL points to localhost.
