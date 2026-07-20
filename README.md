# Talery

A premium, world-class marketing website for **Talery** — an AI-powered social travel platform where creators, influencers, local experts, and travelers discover, create, share, and monetize travel itineraries.

## Overview

This is a production-ready Next.js website featuring:

- Premium homepage with 14 immersive sections
- 18+ internal marketing pages
- 15 legal/policy pages
- Dark mode support
- Responsive mobile-first design
- Smooth Framer Motion animations
- Glassmorphism and modern gradients
- SEO metadata, sitemap, and robots.txt
- WCAG 2.2 accessibility considerations

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Primitives:** Radix UI
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Static export (Vercel-ready)

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

The project is configured for static export (`output: "export"`). The `dist/` folder contains the static site and can be deployed to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any static host.

### Deploy to Vercel

```bash
npx vercel --prod
```

## Design System

See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for tokens, components, and animation guidelines.

## Brand Guidelines

See [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md) for colors, typography, voice, and imagery.

## License

© 2026 Talery Inc. All rights reserved.
