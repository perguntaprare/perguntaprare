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

## Deploy (Cloudflare)

The site is a **static export** (`output: "export"` in `next.config.ts`): `npm run build`
writes plain files to `out/`, and Cloudflare serves them as **Workers static assets**
(`wrangler.jsonc`). There's no server code. Static asset requests are free and unlimited,
and commercial use is allowed. Vercel Hobby is non-commercial only, which is why the
site moved (decision p10, Oct 2026).

```sh
npm run build          # → out/
npx wrangler deploy    # uploads out/ to the "perguntaprare" Worker
```

- Needs `wrangler login` on the Cloudflare account that owns the `perguntaprare.com.br`
  zone (DNS already lives there).
- `public/_headers` sets the security headers and the `image/png` type of `/opengraph-image`
  (Next exports it without an extension).
- `/privacidade` and `/termos` keep their exact URLs: Google's OAuth consent screen and the
  developer apps link to them, so don't turn on `trailingSlash`.
- Custom domains (`perguntaprare.com.br`, `www.`) are attached to the Worker in the
  Cloudflare dashboard → Workers & Pages → perguntaprare → Settings → Domains & Routes.
- Static export means no request-time features: no `cookies()`/`headers()`, no Route Handlers
  that read the request, no default `next/image` optimisation. The internal tool
  (`app.perguntaprare.com.br`, repo `perguntaprare/app`) is where anything dynamic goes.

Don't forget: Wrangler run without `wrangler.jsonc` tries to auto-configure the project for
OpenNext (it rewrites `package.json` and `next.config.ts`). Keep the config file.
