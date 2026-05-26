# NECom Email Signature Lab

A static one-page app for building NECom and event-branded Gmail-ready email signatures.

## Deploy on Cloudflare Pages

Use these settings:

```text
Framework preset: None
Build command: leave empty
Build output directory: public
```

## Deploy as Cloudflare Workers Static Assets

The included `wrangler.toml` points Workers to the static output:

```toml
assets = { directory = "./public" }
```

## Files

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

- Clean NECom header using the light logo and remote PNG favicon.
- English default with Latvian language switch.
- Logo/color brand picker for NECom and event presets.
- Custom brand option.
- Custom dropdowns for design, logo version, info length, and banner placement.
- Controlled brand-color palettes for accent, text, and link colors, plus an in-app RGB/HEX custom color picker.
- Editable person, contact, website, logo, info text, and banner fields.
- Modular signature rows.
- Full / Compact / Minimal row presets.
- Optional full-width banner image with position and spacer controls.
- Centered responsive editor and Gmail preview columns.
- Desktop/mobile preview switch on the right.
- Gmail-style email preview with random EN/LV placeholder emails.
- Copy rendered signature for Gmail.
- Copy raw HTML.
- Left border, Top border, and Modern signature designs.
- Table-based inline signature HTML for better Gmail/email-client safety.

## Notes

The generated signature avoids external CSS and JavaScript. It uses table layout, inline CSS, controlled image widths, and a fluid max-width container to keep the logo aligned to the right side in both desktop and mobile previews.

## v4 notes

- Header title uses a white serif italic treatment.
- Gmail preview now shows sender avatar, sender name, and a more obvious shuffle button.
- BWDA now includes transparent PNG logo variants and uses a darker default link color for better contrast.
- Signature logo cells use explicit table widths plus middle vertical alignment to improve Gmail mobile rendering.
