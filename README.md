# Dubai Elite Properties – Next.js Template

## Run
```bash
npm i
npm run dev
# open http://localhost:3000
```

## Deploy (Vercel)
1. Push this folder to a GitHub repo.
2. Vercel → New Project → import the repo → Deploy.
3. Optional: set env vars for Perplexity, CMS, and maps.

## Env
```
PPLX_API_KEY=
CMS_PROVIDER=sanity            # or notion
SANITY_PROJECT_ID=
SANITY_DATASET=production
SANITY_API_VERSION=2025-01-01
SANITY_USE_CDN=true
NOTION_TOKEN=
NOTION_DB_ID_LISTINGS=
NOTION_DB_ID_PROJECTS=
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
```

## Edit content quickly
- Listings/Projects (no CMS): `data/properties.ts`
- Header/Footer/About text: components folder
- Map provider: `MapSection` (defaults to Mapbox)
