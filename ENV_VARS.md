# Environment variables

Create a `.env.local` file (not committed) with:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SITE_URL=https://theselvage.example.com
```

Run `npx sanity@latest init` to create a real Sanity project, then paste
its project ID and dataset above. Until `NEXT_PUBLIC_SANITY_PROJECT_ID`
is set, the site runs entirely on the placeholder content in `lib/data/`
and the `/studio` route will load but can't reach a real dataset.
