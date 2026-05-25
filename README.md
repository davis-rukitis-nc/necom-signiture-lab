# NECom Email Signature Lab

A one-page static web app for creating NECom and event-branded Gmail-ready email signatures.

## Structure

```text
public/
  index.html
  styles.css
  app.js
  favicon.svg
  _headers
wrangler.toml
package.json
README.md
```

## Features

- Clean NECom header with the light NECom logo
- Remote PNG favicon from NECOM-fav.png
- English default with Latvian language switch
- NECom and event brand presets
- Custom brand option with a simple plus preset
- Logo variants: black, minimal, white, orange where available
- Custom logo URL
- Adjustable logo size
- Adjustable signature width
- Modular signature rows:
  - Logo
  - Contact
  - Address
  - Website
  - Info text
  - Banner
- Full / Compact / Minimal row presets
- Classic / Modern signature design switch
- Optional full-width banner image
- Banner position and spacer controls
- Gmail-style preview with shuffled example emails
- Copy rendered signature for Gmail
- Copy raw generated HTML
- Inline editing inside the signature preview
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

## Email signature safety notes

The generated signature HTML intentionally uses:

- table-based layout
- inline CSS
- no external CSS
- no JavaScript
- controlled image widths
- `height:auto` on images
- fixed signature width with `max-width:100%`

The app UI can use modern CSS, but the copied signature avoids depending on modern layout features.

## Logo note

Most supplied event logos are PNGs, which are safer for email clients than SVG. Baltic Wine & Drinks Awards currently keeps the original SVG logo because no updated PNG was supplied.
