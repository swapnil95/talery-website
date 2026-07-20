# Talery — Agent Instructions

## Project Context

This is the marketing website for Talery, an AI-powered social travel platform. The codebase is a Next.js 16 App Router project with TypeScript and Tailwind CSS v4.

## Important Conventions

- Use Tailwind CSS v4 syntax (`@import "tailwindcss"` and `@theme inline`)
- Use the custom color tokens: `primary` (#0EA5E9), `secondary` (#14B8A6), `accent` (#F97316)
- Prefer `cn()` from `@/lib/utils` for conditional classes
- Use shared components from `@/components/shared/*`
- Use UI primitives from `@/components/ui/*`
- Use Lucide icons only; verify icon names exist before importing
- Keep pages as Server Components when possible; isolate client interactivity in small components
- Export `metadata` from every page
- Use `ScrollReveal`, `StaggerContainer`, and `StaggerItem` for animations
- Maintain dark mode compatibility
- Run `npm run build` after making changes

## Build

```bash
npm run build
```

The build outputs to `dist/` for static deployment.

## Design Files

- `BRAND_GUIDELINES.md` — Brand identity
- `DESIGN_SYSTEM.md` — Tokens and components
- `IMAGE_PROMPTS.md` — AI image generation prompts
- `SEO_METADATA.md` — SEO and schema documentation
