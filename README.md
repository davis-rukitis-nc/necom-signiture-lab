# NECom Email Signature Lab

A one-page static web app for building NECom and event-branded Gmail-ready email signatures.

## What is included

```text
public/
  index.html
  styles.css
  app.js
  favicon.svg
wrangler.toml
package.json
README.md
```

## Features

- NECom + event brand presets
- Custom logo URL
- Adjustable logo size
- Adjustable signature width
- Full and short signature modes
- English / Latvian language switch
- Gmail-style preview with shuffled example emails
- Copy rendered signature for Gmail
- Copy raw generated HTML
- Inline editing inside the preview signature
- Local autosave in the browser

## Run locally

Because this is static HTML/CSS/JS, you can open `public/index.html` directly.

Recommended local server:

```bash
python3 -m http.server 8788 --directory public
```

Open:

```text
http://localhost:8788
```

## Deploy to Cloudflare Pages

Use Cloudflare Pages with GitHub.

Recommended settings:

```text
Framework preset: None
Build command: leave empty
Build output directory: public
Root directory: /
```

## Deploy to Cloudflare Workers Static Assets

Install dependencies:

```bash
npm install
```

Run locally with Wrangler:

```bash
npm run dev
```

Deploy:

```bash
npm run deploy
```

## Notes

The copied signature HTML intentionally uses email-safe table markup and inline CSS. The app UI uses modern CSS, but the generated signature does not rely on external CSS or JavaScript.
