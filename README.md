# Talery

The prelaunch company website for **Talery Private Limited**, which is developing a social travel planning app.

## Public website

The deployment includes the homepage, Privacy Policy, and Terms and Conditions. Company disclosures and working contact links appear in the shared footer. All other page source files are retained for future use and excluded from the public build output.

The public policies describe website visits and prelaunch enquiries. Before the app accepts users, complete the separate app-release review and update its policies against actual release behavior.

- [Organization enrollment website handoff](APPLE_ACCOUNT_APPLICATION.md)
- [App Store release review](APP_STORE_READINESS.md)
- [Internal app-policy drafts](docs/APP_POLICY_DRAFTS.md)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Primitives:** Radix UI
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Static export (Cloudflare hosting configured by the owner)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Serve production build locally
npx serve dist
```

## Project Structure

```
my-app/
├── app/
│   ├── sections/          # Homepage sections
│   ├── about/
│   ├── blog/
│   ├── careers/
│   ├── contact/
│   ├── creator-program/
│   ├── features/
│   ├── pricing/
│   ├── ai-travel-planner/
│   ├── roadmap/
│   ├── changelog/
│   ├── legal/             # Legal pages
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                # Reusable UI primitives
│   └── shared/            # Layout + shared components
├── lib/
│   └── utils.ts
├── public/
│   ├── sitemap.xml
│   ├── robots.txt
│   └── og-image.svg
├── BRAND_GUIDELINES.md
├── DESIGN_SYSTEM.md
├── IMAGE_PROMPTS.md
└── SEO_METADATA.md
```

## Deployment

The project is configured for static export (`output: "export"`). Run `npm run build` to produce the deployment artifact in `dist/`. Its automatic `postbuild` step removes dropped routes from the generated export while preserving their source code. The public pages are `/`, `/legal/privacy/`, and `/legal/terms/`; assets and the error page are retained. The sitemap lists only those three public pages.

Deploy only the resulting `dist/` folder. Do not use `next build` directly, skip npm lifecycle scripts, or publish a development server: those bypass the publication filter. Retained routes remain accessible during `npm run dev`. Configure the static host to serve missing routes as 404s, without a catch-all rewrite to the homepage.

Cloudflare hosting is already configured by the owner. This work does not change hosting settings or publish a deployment.

## Design System

See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for tokens, components, and animation guidelines.

## Brand Guidelines

See [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md) for colors, typography, voice, and imagery.

## License

© 2026 Talery Private Limited. All rights reserved.
