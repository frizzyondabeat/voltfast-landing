@AGENTS.md

# Voltfast — Project Guide for AI Agents

## What This Project Is

This is the **marketing and documentation website** for **Voltfast CLI** (`@frizzyondabeat/volt-fast`), a zero-config CLI tool that scaffolds Next.js and React projects by auto-configuring Tailwind CSS, ESLint, Prettier, Shadcn UI, and TypeScript.

- **Live site**: `https://voltfast.vercel.app` (set via `NEXT_PUBLIC_APP_URL` in Vercel)
- **npm package**: `https://www.npmjs.com/package/@frizzyondabeat/volt-fast`
- **CLI GitHub repo**: `https://github.com/frizzyondabeat/volt-fast`

---

## Stack

| Tool | Version |
|---|---|
| Next.js (App Router) | 16.2.0 — see AGENTS.md for breaking-change warning |
| React | 19.2.4 |
| Tailwind CSS | v4 (`@tailwindcss/postcss`) |
| Animations | Framer Motion + Lenis |
| UI Primitives | Radix UI + Shadcn |
| Icons | `@phosphor-icons/react` |
| Analytics | `@vercel/analytics` (already wired in layout) |
| Package manager | pnpm |
| Hosting | Vercel |

---

## Directory Map

```
app/
  layout.tsx              ← Root metadata, JSON-LD (SoftwareApplication + WebSite), fonts
  page.tsx                ← Homepage — also holds FAQPage JSON-LD <script> tag
  sitemap.ts              ← XML sitemap — lists every indexable URL with stable dates
  robots.ts               ← robots.txt — allow all, points to sitemap
  api/og/route.tsx        ← Edge function: generates OG image (1200×630)
  docs/
    layout.tsx            ← Docs shell: left nav sidebar + right TOC sidebar
    page.tsx              ← /docs — Introduction only
    quick-start/page.tsx  ← /docs/quick-start — with HowTo JSON-LD
    features/page.tsx     ← /docs/features
    supported-stacks/page.tsx
    contributing/page.tsx

components/
  landing/
    hero.tsx              ← h1 MUST contain sr-only "Voltfast CLI" keyword span
    features.tsx
    cta.tsx
    terminal-demo.tsx     ← No console.log (already removed)
    ...
  docs/
    scroll-spy.tsx        ← DocsSidebar — uses usePathname() for active state (NOT IntersectionObserver for main nav)
    docs-toc.tsx          ← Right TOC sidebar — static registry keyed by pathname
  layout/
    section.tsx
    main-layout.tsx

lib/
  utils.ts                ← cn(), getLatestVersion() — fetches npm version with 1h Next.js revalidate

hooks/
  use-active-section.ts   ← IntersectionObserver scroll tracker (used only by docs-toc right sidebar)
```

---

## SEO Rules — Enforce on Every Change

### metadataBase
- **Always** use `process.env.NEXT_PUBLIC_APP_URL || 'https://voltfast.vercel.app'`
- **Never** include `process.env.VERCEL_URL` in the fallback chain — it resolves to unstable preview hostnames that get indexed

### Titles & Descriptions
- Root default title: `'Voltfast CLI — Zero-Config Next.js & React Setup'` (≤60 chars)
- Template: `'%s | Voltfast'`
- Every page exports its own `metadata` with `title` and `description`
- Descriptions must be ≤155 chars and contain target keywords (not marketing taglines)

### Canonical URLs
- Every `metadata` export **must** include `alternates: { canonical: '/path' }`
- Root layout sets `alternates.canonical: '/'`
- Each page overrides with its own canonical

### JSON-LD
- `SoftwareApplication` + `WebSite` schemas: inline `<script type="application/ld+json">` tags in `app/layout.tsx` `<head>` block
- `FAQPage`: inline `<script>` in `app/page.tsx` (before children)
- `HowTo`: inline `<script>` in `/docs/quick-start/page.tsx`
- `Article`: inline `<script>` in each blog post page (when blog is built)
- Use `APP_URL` constant (`process.env.NEXT_PUBLIC_APP_URL || 'https://voltfast.vercel.app'`) in all JSON-LD `url` fields — never hardcode

### Sitemap
- File: `app/sitemap.ts`
- `lastModified` must be **stable ISO date strings** (e.g., `'2025-04-01'`) — **never `new Date()`**
- Must include every indexable page: homepage, all 5 docs pages, all blog/compare pages when created
- Priority: homepage=1.0, docs=0.8, features/stacks=0.7–0.8, contributing=0.6

### OG Image
- File: `app/api/og/route.tsx` — Edge runtime
- Background: `#131313` (literal hex) — **never CSS variables** (`var(--x)`) — there is no stylesheet in the Edge runtime
- Must render: product name, tagline text, and install command as visible text

---

## Docs Architecture

Docs are **split into individual routes** — NOT a single-page SPA with hash anchors.

```
/docs                    → Introduction
/docs/quick-start        → Quick Start (HowTo JSON-LD)
/docs/features           → Key Features
/docs/supported-stacks   → Supported Stacks
/docs/contributing       → Contributing
```

**Why**: Hash routes (`/docs#quick-start`) are not indexed as separate pages. Each sub-route gets its own title, description, canonical, and can rank independently in Google.

### Docs Navigation Rules
- Left sidebar (`DocsSidebar`, `isToc=false`): active state via `usePathname()` — navigation items use full path hrefs (`/docs/quick-start`), **no `#` hash anchors**
- Right sidebar (`DocsToc`, `isToc=true`): uses `usePathname()` to look up a static per-page heading registry, then tracks scroll with `IntersectionObserver`
- **Never** add new doc content back to `app/docs/page.tsx` as hash sections — always create a new route

---

## Design Tokens

| Token | Value |
|---|---|
| Brand green | `#b8f600` / `#bfff00` |
| Dark background | `#131313` |
| Card background | `#1c1b1b` |
| Terminal background | `#0e0e0e` |
| Body text | `#e5e2e1` |
| Subtle text | `#c3caac` |
| Muted text | `#737373` |
| Muted 2 | `#9ca3af` |

Font variables: `--font-inter`, `--font-space-grotesk`, `--font-mono`

---

## Key Conventions

- `cn(...inputs)` in `lib/utils.ts` — always use for conditional classNames
- `getLatestVersion()` in `lib/utils.ts` — async, fetches live npm version. Keep `next: { revalidate: 3600 }` option intact
- `Section` + `SectionContainer` from `components/layout/section.tsx` — use for consistent max-width (1440px) and border styling
- Server components have no directive; Client components are marked `'use client'` at top
- Import aliases: `@/` and bare `components/`, `lib/`, `hooks/` all resolve from project root
- Animations via Framer Motion — never use CSS animations on layout-affecting properties (causes CLS)
- `ScrollReveal` wraps sections on the homepage for scroll-triggered fade-in

---

## Performance Notes

- `HeroEvervaultBg` canvas animation is the primary LCP risk — lazy-load it if LCP > 2.5s
- `@react-three/fiber` + `three` (~600KB) must only be loaded on pages that use 3D — not in root layout
- Logo SVG in Navbar already has `priority` + `fetchPriority="high"` — do not remove these
