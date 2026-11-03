# Glofarmx — Landing Page

A premium, single-page marketing site for Glofarmx, an Indian agricultural produce
export business targeting international B2B buyers (initial focus: Dubai/UAE).

Frontend-only. No custom backend or database — the enquiry form emails you
directly via [Web3Forms](https://web3forms.com) (a free form-to-email
service), with WhatsApp deep links and `mailto:` as fallbacks using contact
details you configure yourself.

## Tech stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Framer Motion (section reveal + small hover/tap transitions, respects `prefers-reduced-motion`)
- Lucide React (icons)

## Project structure

```
src/
  assets/
  components/      Header, Footer, Button, SectionHeading, ProductCard,
                    WhatsAppButton, ResponsiveImage
  sections/         HeroSection, HighlightsSection, ProductsSection,
                    WhyGlofarmxSection, ExportProcessSection, BuyerCtaSection,
                    ContactSection
  data/
    products.ts     Product catalogue — edit here to add/remove products
  config/
    site.ts         Brand name, nav links, contact email, WhatsApp number
  App.tsx
  main.tsx
  index.css         Tailwind import + design tokens (brand colors/fonts)
```

## Getting started

```bash
npm install
npm run dev       # starts the dev server (prints the local URL)
```

## Before going live — configuration you must provide

Everything below is intentionally left blank/placeholder in the code. The site
is built so that related UI (email link, WhatsApp button) **hides itself**
rather than showing a fake or broken contact method when a value is missing.

### Get enquiries emailed to you (recommended)

1. Go to [web3forms.com](https://web3forms.com) and enter the inbox you want
   enquiries delivered to. You'll get a free Access Key by email instantly —
   no account signup required.
2. Copy `.env.example` to `.env.local` and paste the key:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your-key-here
   ```
3. Restart `npm run dev` (or rebuild). The "Submit Enquiry" form now POSTs
   straight to Web3Forms and the customer never needs to open their own email
   app — you just receive the enquiry by email.

If `VITE_WEB3FORMS_ACCESS_KEY` is not set, the form falls back to the
`mailto:` behavior described below (requires `contactEmail` to be set), or
shows a "this is a demo form" notice if neither is configured.

Edit **`src/config/site.ts`**:

| Field | What it does |
|---|---|
| `web3formsAccessKey` | Read from `VITE_WEB3FORMS_ACCESS_KEY` (see above). When set, the contact form sends real emails directly — no visitor email client involved. |
| `contactEmail` | Real business inbox. Fallback used only when `web3formsAccessKey` is not set — opens the visitor's email client via `mailto:` for the "Submit Enquiry" form and per-product "Enquire About This Product" links. |
| `whatsappNumber` | Real WhatsApp Business number, digits only, international format (e.g. `971501234567` for a UAE number). Powers the WhatsApp button. Leave empty and the button is hidden from public visitors (a dev-only placeholder shows locally instead). |
| `privacyPolicyUrl` | Only set this once an actual privacy policy page exists. Leave empty to hide the footer link. |

No street address, phone number, or social profile is shown anywhere, since
none was provided — add them in `Footer.tsx` / `site.ts` only once they're real.

## Product images

All product and hero photography is sourced from Unsplash (free license,
no attribution required) and hotlinked from `images.unsplash.com` with
responsive `srcset`/`sizes` and automatic AVIF/WebP negotiation
(`?auto=format`). To swap any image, edit the `src` field in
`src/data/products.ts` (products) or `HeroSection.tsx` (hero banner) —
use a real, working image URL, at least ~2560px wide for the hero.

Two images use a custom `position` field to crop toward the right subject
when the source photo includes other produce in frame (see the `carrot`
entry in `products.ts` for an example).

## Available checks

```bash
npm run build   # tsc -b && vite build — type-check + production build
npx tsc -b      # type-check only
npm run lint    # oxlint
npm run preview # serve the production build locally
```

All three currently pass clean (one harmless oxlint warning about computing
`new Date().getFullYear()` at render time in the footer — intentional, so the
copyright year stays current).

## Deployment (Vercel)

This is a static Vite build — no environment variables or secrets are needed.

1. Push this repository to GitHub/GitLab/Bitbucket.
2. In Vercel: **New Project → Import** this repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

Or from the CLI:

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

No deployment has been performed as part of building this project — the
steps above are what's needed when you're ready to publish it.
