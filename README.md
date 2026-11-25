# Lucky's Espresso & Matcha Bar — website

Standalone static site (plain HTML/CSS/JS, no build step) replacing the WordPress site at luckysemb.com.

## Pages
- `index.html` — home
- `menu/index.html` — full menu
- `about/index.html` — story

Shared: `css/styles.css`, `js/main.js`, `assets/img/`. The header and footer are repeated in each of the three HTML files, so a change to either needs making in all three.

## Preview
```bash
python3 -m http.server 4173
```
Then open http://localhost:4173

## Open with the client
- **Weekend hours.** The old site showed both "Sat–Sun 9am–2pm" and "closed". The site uses 9am–2pm; search for `HOURS:` in the HTML (and the `openingHoursSpecification` block in `index.html`) to change it.
- **Reviews.** There's no reviews section because there were no real reviews to show.
- **Cut-outs.** The hero cup (`assets/img/latte-cutout.webp`) is cut from the client's three-drinks photo and the floating beans (`bean-1..3.webp`) from their coffee-beans photo, both from the full-size originals on their site. The cup is cropped where a chess piece overlapped it, so it must sit flush with the bottom of the hero. The "what makes Lucky's special" photo still sits in an arch frame.

## Deploy
Pushing to `main` runs `.github/workflows/pages.yml`, which publishes the site to GitHub Pages. One-time setup in the repo: Settings → Pages → Source: **GitHub Actions**.

All links are relative, so the site works both at `https://lwilliams002.github.io/luckys/` and on a custom domain.

## Not done
- luckysemb.com still serves the WordPress site; no custom domain or DNS is set up for the Pages site.
- All order buttons link out to Clover (`luckys-north-miami-beach.cloveronline.com`); there's no on-site cart.
