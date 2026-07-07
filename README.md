# Reign Media Concept — Portfolio Site

A single-page portfolio for Reign Media Concept, a creative media & branding studio.
Built with React + Vite + TypeScript + Tailwind CSS v4 + Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Structure

- `src/components/` — one component per section (Hero, About, Services, Portfolio, Contact, Footer, Navbar) plus two shared pieces:
  - `Crest.tsx` — the gold "R" seal, the site's recurring signature mark
  - `SectionHeading.tsx` — the eyebrow + title + self-drawing gold rule used on every section
- `src/data/content.ts` — all editable copy: nav links, services, portfolio items, stats. Edit this file first for most content changes.
- `src/index.css` — color tokens (gold/black palette) and fonts, defined via Tailwind v4's `@theme`.

## Customizing

- **Colors**: edit the `--color-*` variables in `src/index.css`.
- **Copy**: edit `src/data/content.ts` and the paragraph text directly inside `About.tsx` / `Contact.tsx`.
- **Portfolio images**: the work grid currently uses gold/black gradient placeholders (no stock photos were used). Swap the `tone` gradients in `content.ts` for real project photography by replacing the `<div className={gradient...} />` in `Portfolio.tsx` with an `<img>`.
- **Contact form**: currently shows a local "message received" confirmation only. Connect it to an email service (e.g. Formspree, Resend, or your own API) inside `Contact.tsx`'s `handleSubmit`.
- **Social links**: update the `href="#"` placeholders in `Footer.tsx`.
