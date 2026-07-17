# Astute Guide — How to use the app

An interactive, **end-user guide** for the AstuteApp platform (the `astute-fe` web app),
built as a standalone React + Vite site with the same dark theme as the product.

This is written for the people who *use* Astute — fund-seekers, investors, lenders and firms —
not for engineers. It explains, in plain language and with visual flow diagrams, how to sign
up, get verified, raise your readiness score, get matched, and close deals. A single **Dev docs**
page at the end orients engineers; there is no API reference.

## Run it

```bash
npm install
npm run dev      # http://localhost:5175
npm run build    # type-check + production build to dist/
npm run preview  # serve the built site
```

Press <kbd>⌘K</kbd> anywhere to search.

## Sections

| Section | Pages |
|---|---|
| **Welcome** | What is Astute? · How it works · Trust levels & badges · Your readiness score |
| **Guides by role** | Fund-seeker · Investor · Investment firm · Lender · Broker (coming soon) |
| **Using Astute** | Getting verified · Astute Assistant (AI chatbot) · Matches & interest · Deal rooms · Your documents · Alerts & settings · Plans & billing |
| **Developer** | Dev docs — a light technical orientation |

## Interactive & visual elements

- **Role journey flow diagrams** — a real, colour-coded flowchart of each role's path from
  sign-up to closing a deal, with the trust badge unlocked at each stage.
- **Readiness score simulator** — tick tasks and watch the 0–100 score and tier climb.
- **Trust ladder** — click through BASIC → VERIFIED → TRUSTED → INSTITUTIONAL.
- **Astute Assistant page** — a static preview of the in-app AI chatbot (live-typed answers,
  action buttons, an AI-credits meter) with guidance on what to ask and who can use it.
- **Branded logo loader** — the Astute logo (`src/assets/logo.svg`) is the app icon, the topbar
  mark, a boot splash, and a route-change spinner (a rotating gradient ring around the logo).
- **⌘K command palette** search, numbered step-throughs, "what you can do vs. what's still
  locked" panels, scroll-spy contents, and a light/dark toggle.

## Design tokens

Pulled directly from `astute-fe/src/theme/colors.ts` — primary `#01B7AB`, canvas `#03030D`,
surfaces `#0B0B16` / `#111120`. Body font **Karla**; headings use **Space Grotesk** as a stand-in
for the product's licensed **Dunbar**.

## Stack

React 19 · TypeScript · Vite 6 · React Router 7 · hand-rolled CSS (no UI framework).
