# The Selvage

A self-sufficient editorial fashion magazine covering menswear and
womenswear — vintage-leaning, craft-conscious, built to feel like a print
magazine on the web. See the PRD in this repo's history for the full brief.

## Stack

- **Next.js 16** (App Router, Turbopack) + React 19 + TypeScript
- **Tailwind CSS v4** for styling
- **Sanity Studio** (embedded at `/studio`) as the headless CMS, schema
  defined in `sanity/schemaTypes/`
- Fonts: **Playfair Display** (headlines/masthead) and **EB Garamond**
  (body copy — closest web-licensable equivalent to Apple Garamond),
  self-hosted via `next/font/google`

## Content today: placeholder data

No live Sanity project is wired up yet. All article, category, and author
content currently comes from `lib/data/` (`articles.ts`, `categories.ts`,
`author.ts`) — sample copy that fills out every MVP template so nothing
launches with an empty state. Swap this for real content by either:

1. Editing the sample data directly, or
2. Wiring up a real Sanity project (see [ENV_VARS.md](./ENV_VARS.md)) and
   replacing the `lib/data/` reads in the page files with GROQ queries
   against `lib/sanity/client.ts`.

## Pages built (v1 / MVP scope)

- Homepage (hero + latest grid + per-category sections + newsletter)
- Category pages: Menswear, Womenswear, Style Guides, Trends & Commentary
  (`app/[category]/page.tsx`)
- Article template with share buttons, tags, related articles, inline
  newsletter (`app/articles/[slug]/page.tsx`)
- About / masthead (`app/about/page.tsx`)
- Search (`app/search/page.tsx`) — matches title/body/tags/category
- Terms of Use and Privacy Policy (placeholder legal copy — **replace
  before public launch or any email collection**)
- Footer with nav, socials, newsletter, legal links

Deferred per PRD Section 5: comments, accounts/login, e-commerce,
multi-author roles, Brand Spotlights / Culture & Industry verticals.

## Development

```bash
npm run dev      # start dev server
npm run build    # production build
npm run lint      # eslint
```

## Newsletter

The signup form in `components/NewsletterSignup.tsx` is a placeholder.
Replace its `<form>` with a real Substack embed
(`https://<publication>.substack.com/embed`) once the Substack is live.

## Before public launch

- Replace placeholder author bio (`lib/data/author.ts`) and about-page copy
- Replace Terms of Use / Privacy Policy placeholder text with reviewed
  legal copy
- Set `NEXT_PUBLIC_SITE_URL` to the real domain (used for canonical URLs)
- Swap `ArticleImage` placeholder graphics for real photography
- Confirm web licensing for Playfair Display / EB Garamond if self-hosting
  outside of Google Fonts' free tier terms
