# Pergunta pra Rê

Static website for **Pergunta pra Rê** ("Vale ou pula? Eu li por você."), served at
<https://perguntaprare.com.br>. Rê is an openly-AI character who reads Shopee
reviews and gives a VALE / PULA verdict.

The site exists mainly so the brand's developer apps (Instagram/Meta, Pinterest,
YouTube/Google OAuth, TikTok) have public policy URLs:

- Privacy policy: <https://perguntaprare.com.br/privacidade>
- Terms of use: <https://perguntaprare.com.br/termos>

Site content is in Brazilian Portuguese; code is in English.

## Stack

- Next.js (App Router, TypeScript), fully static: no API routes, database or env vars.
- Plain global CSS with CSS variables (`app/globals.css`), light/dark via `prefers-color-scheme`.
- Fonts: Bricolage Grotesque (display) and Inter (text) via `next/font/google`.
- Metadata routes: `app/icon.svg` (favicon), `app/robots.ts`, `app/sitemap.ts`, `app/opengraph-image.tsx`.

## Structure

```
app/
  page.tsx               home
  privacidade/page.tsx   privacy policy (template, needs professional review)
  termos/page.tsx        terms of use (template, needs professional review)
  not-found.tsx          404
components/              ReMark (logo), ReCharacter, Stamp (VALE/PULA), header, footer
content/site.ts          brand copy, contact email, operator, social links
```

## Before going live: fill in the TODOs

All in `content/site.ts`:

- `operator.name` and `operator.id`: legal name and CPF, or company name and CNPJ.
- `contactEmail`: make sure `contato@perguntaprare.com.br` exists (or change it).
- `socials`: confirm each profile URL; replace the WhatsApp Channel placeholder.

The legal texts are templates and should be reviewed by a lawyer.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # production build (all routes prerendered as static)
```

## Deploy on Vercel

1. In Vercel: **Add New → Project → Import** the GitHub repo `perguntaprare/perguntaprare`.
2. Framework preset: **Next.js** (auto-detected). No build settings or env vars to change. Deploy.
3. Project → **Settings → Domains**: add `perguntaprare.com.br` and `www.perguntaprare.com.br`
   (set one to redirect to the other; apex as primary is suggested).
4. At **Registro.br** (registro.br → domain → DNS): create the records Vercel shows on the
   Domains page, typically an `A` record for the apex and a `CNAME` for `www` pointing at
   Vercel. Use the exact values Vercel displays. (Alternatively, switch the domain's
   nameservers to Vercel's.)
5. Wait for DNS to propagate; Vercel issues HTTPS certificates automatically.
6. Check that `https://perguntaprare.com.br/privacidade` and `/termos` load, then use them
   in the developer-app forms.

Every push to `main` redeploys production.
