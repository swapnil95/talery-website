# Talery Design System

## Architecture

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Primitives:** Radix UI (accordion, dialog, dropdown, slot)
- **Utilities:** clsx + tailwind-merge (`cn`)

## CSS Variables

Custom properties defined in `app/globals.css`:

```css
--background
--foreground
--card
--card-foreground
--popover
--popover-foreground
--primary        /* #0EA5E9 */
--secondary      /* #14B8A6 */
--accent         /* #F97316 */
--muted
--muted-foreground
--border
--input
--ring
--radius
```

## Tailwind Utilities

### Colors
- `bg-primary`, `text-primary`, `bg-secondary`, `text-accent`
- Full sky/teal/orange/slate scales

### Custom Utilities
- `.glass` — translucent blur background
- `.glass-card` — stronger translucent card
- `.glass-strong` — high-contrast translucent surface
- `.gradient-text` — sky-to-teal-to-orange text gradient
- `.gradient-primary` — animated brand gradient
- `.gradient-radial` — soft radial mesh background
- `.mesh-gradient` — multi-stop mesh gradient
- `.hover-lift` — hover translate + shadow
- `.section-padding` — vertical section spacing
- `.container-padding` — horizontal responsive padding

## Components

### UI Components (`components/ui/`)
- `Button` — Variants: default, secondary, accent, outline, ghost, glass, gradient
- `Card` — Header, Title, Description, Content, Footer
- `Badge` — default, secondary, accent, outline
- `Input` — Form input with focus ring
- `Accordion` — Radix-based collapsible FAQ
- `Sonner` — Lightweight toast notifications

### Shared Components (`components/shared/`)
- `Container` — Max-width wrapper with responsive padding
- `Navbar` — Sticky glass navbar with mobile menu and theme toggle
- `Footer` — Multi-column footer with social links
- `PageHeader` — Page hero header with badge
- `ScrollReveal` / `StaggerContainer` / `StaggerItem` — Framer Motion reveal utilities
- `ThemeProvider` — Manual dark/light/system theme context

## Animation System

### Easing
- Default: `[0.22, 1, 0.36, 1]` (ease-out-expo feel)

### Common Animations
- `float` — 6s vertical float loop
- `pulse-slow` — subtle opacity pulse
- `gradient` — animated background position
- `accordion-down/up` — Radix height animation

### Scroll Reveals
- Use `ScrollReveal` for single elements
- Use `StaggerContainer` + `StaggerItem` for grids

## Responsive Breakpoints

Tailwind v4 default breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Dark Mode

Manual class-based dark mode via `ThemeProvider`:
- Toggle stores preference in `localStorage`
- Applies `.dark` class to `html`
- All colors flip via CSS variables

## File Organization

```
my-app/
├── app/
│   ├── sections/        # Homepage sections
│   ├── (pages)/         # Marketing pages
│   ├── legal/           # Legal pages
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/              # Reusable UI primitives
│   └── shared/          # Layout + shared components
├── lib/
│   └── utils.ts
├── public/
│   ├── sitemap.xml
│   └── robots.txt
├── BRAND_GUIDELINES.md
├── DESIGN_SYSTEM.md
└── IMAGE_PROMPTS.md
```

## Performance Targets

- Lighthouse Performance: 90+
- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- WCAG 2.2 AA compliant
