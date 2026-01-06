# Adults-Only Soccer Practices (GitHub Pages)

A simple static website for adults-only soccer practices (16+).  
Includes schedule, pricing, locations, FAQ, and a mailto-based reservation/contact flow.

## Quick start
Just open `index.html` in your browser.

## Deploy on GitHub Pages
1. Push these files to a GitHub repo (e.g., `adult-soccer-practice`).
2. Go to **Settings → Pages**
3. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
4. Click Save — your site will publish at a `github.io` URL.

## Customize
- Update schedule rows in `index.html` (search for `data-day="mon"` etc.)
- Update contact email in `script.js`:
  - `const CONTACT_EMAIL = "youremail@example.com";`
- Update locations (addresses) in `index.html`

## Optional upgrades
- Replace mailto with Google Form or Calendly
- Add Stripe payment links
- Add a real map embed
