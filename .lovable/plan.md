# Notisce Digital — Premium Agency Website

A multi-page TanStack Start site with a light, minimal, Apple-like aesthetic. Conversion-focused with interactive project previews.

## Design System (src/styles.css)

Update tokens to the brand palette (oklch equivalents):
- `--background`: Off-White #F4F3F0
- `--foreground`: Charcoal #111214
- `--secondary`: Graphite #2A2D31
- `--accent` / `--muted-foreground`: Dust Blue #5F6D7A, Slate #66707A
- `--primary` / highlight: Deep Sand #A79C8E
- Fonts: Montserrat (headings, light/medium) + Inter (body) loaded via Google Fonts in `__root.tsx`
- Generous whitespace, thin borders, soft shadows, rounded corners
- Reusable utility classes: `.section`, `.container-narrow`, fade/slide-up animation keyframes

## Routes (src/routes/)

- `index.tsx` — Home
- `what-we-do.tsx` — Services detail
- `work.tsx` — Project grid
- `pricing.tsx` — Detailed pricing + retainers
- `contact.tsx` — Contact form

Each route gets unique `head()` metadata (title, description, og:title, og:description).

## Shared Components (src/components/)

- `Navbar.tsx` — Sticky, translucent on scroll, links + "Free Audit" CTA, mobile sheet menu
- `Footer.tsx` — 3-column layout (logo+tagline / nav / contact+socials), Deep Sand dividers, social icons (Instagram, TikTok, X, LinkedIn → notisce.digital), bottom bar with copyright
- `Logo.tsx` — Inline SVG recreation of the H mark + "notisce digital" wordmark
- `SiteLayout.tsx` — Wraps Navbar + Outlet + Footer (rendered in `__root.tsx`)
- `ProjectPreviewModal.tsx` — Full-screen modal showing a static "fake website" design with sticky "← Back to Projects" button, fade/slide animation
- `ProjectCard.tsx` — Image preview card with hover lift
- `FakeSitePreview/` — Self-contained static homepage layouts (non-functional) for each showcase project:
  - `BarberSite.tsx`
  - `RestaurantSite.tsx`
  - `DentistSite.tsx`
  - `FitnessSite.tsx`
  - `BoutiqueSite.tsx`
- `PricingCard.tsx` — Tier card with strike-through old price, "Most Popular" badge variant
- `StatBlock.tsx`, `ServiceCard.tsx`, `SectionHeading.tsx`

## Home Page Sections

1. Hero — slim Montserrat headline, sub-copy, two CTAs (Free Audit / View Pricing)
2. Interactive Showcase — 5 project cards, click opens `ProjectPreviewModal`
3. What We Do preview — 3 cards linking to `/what-we-do`
4. Results — 3 stat blocks (+120% Leads, 2x Faster Sites, Top 3 Rankings)
5. Pricing preview — "Limited Time Offer" banner + 3 tiers (Growth highlighted)
6. Closing CTA — "Get Your Free Website Audit"

## What We Do Page

Three long-form sections (Website Design / SEO / Optimisation) with results-focused copy and supporting visuals.

## Work Page

Responsive grid of all projects. Click → modal. Optional Before/After toggle on cards using a simple state switch with two static images.

## Pricing Page

Full tier comparison with feature lists, plus a "Monthly Retainers" subsection (Basic £30–£80, SEO £200–£800, Growth £500–£1,500).

## Contact Page

Form (Name, Email, Business Name, Message) using shadcn `form` + zod validation. On submit: toast "Thanks — we'll be in touch" (no backend wired; client-only). CTA button "Request Free Audit".

## Animations

- `tw-animate-css` (already installed) for fade/slide-up
- `IntersectionObserver` hook (`useInView`) to trigger on-scroll reveals
- Hover lift on cards (translate-y + shadow)
- Modal: scale + fade transition

## Assets

Generate 5 light, minimal homepage-mockup preview images (one per fake project) for cards via imagegen, stored in `src/assets/`. The full-screen preview itself is rendered as real JSX (not an image) so it looks like a live site.

## Out of Scope

- No backend / Lovable Cloud (form is client-only with toast)
- No real CMS for projects (hardcoded data array in `src/data/projects.ts`)
- Preview sites are visual only — no internal links work
