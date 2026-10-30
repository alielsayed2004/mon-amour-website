# MON AMOUR · Website — read this first

You are building the online store for **MON AMOUR** (girls' stainless-steel jewelry, Egypt). This folder is the approved design direction turned into working static code. Your job: turn it into a live store — most likely a **Shopify** theme — without losing the look, the motion, or the selling logic.

## Read in this order
1. `docs/01-direction.md` — brand, art direction review, the "Sealed Salon" concept, 4 rules, page order, conversion rules.
2. `docs/02-shopify-plan.md` — how each piece maps to Shopify (sections, variants, line item properties, apps, COD), plus the platform check to run first.
3. `docs/03-seo-geo-ads.md` — SEO, GEO (AI answers) and Meta ads setup.
4. Then open `index.html` and `product.html` in a browser — they are the visual source of truth.

## What's in the folder
```
CLAUDE.md                 ← you are here
index.html                home page (desktop + mobile, RTL)
product.html              product page (packaging ladder, her name, COD)
css/tokens.css            colours, fonts, type scale, motion easing — single source of truth
css/base.css              components (header, hero, cards, letter, pills, FAQ, footer, PDP, mobile)
css/motion.css            the 6 signature motions + reduced-motion rules
js/app.js                 name preview, occasion pills, packaging total, scroll reveal (vanilla)
assets/logo/rosette.svg   simplified rosette for favicon/dev — replace with the official logo files
assets/images/            put real photos here (see assets/images/README.md for the shot list)
docs/                     the direction + build plans
links.md                  links to the design canvas and brand docs
theme/                    the Shopify OS 2.0 theme built from all of the above. Setup in theme/README.md
```

## Non-negotiable rules
- **RTL first.** `<html lang="ar" dir="rtl">`. All selling/service copy is Egyptian Arabic. Tagline and signature lines stay English ("For every darling").
- **Fonts:** Cormorant Garamond (Latin headings, prices, logo) · IBM Plex Sans Arabic (all Arabic) · Pinyon Script (her name only, Latin only). No other fonts.
- **Colours only from `css/tokens.css`.** Bordeaux = stage (hero, gift section, footer, primary buttons). Cream = shelf (product cards, checkout). Never a page that is dark everywhere.
- **Price is always visible and big** (Cormorant), one price only, "الدفع عند الاستلام" next to it. No red/yellow SALE stickers, no strike-through clutter.
- **Product cards use real product photos + a 5-second in-hand video.** AI model shots (Malak / Farida) are for hero and editorial mood only.
- **No founder face/name anywhere** (Behind-the-brand = hands, desk, shelves only).
- **Reviews and UGC: real only.** Never invent testimonials, ratings or stats. Placeholders in `[brackets]` must be filled with real info from Ali before launch.
- **Motion:** CSS only, ease `cubic-bezier(.22,1,.36,1)`, 600–900ms, one moving thing per screen, respect `prefers-reduced-motion`. Motion must never delay the hero text or LCP.
- **Performance:** hero LCP fast on a mid-range Android on 4G. WebP/AVIF images with width/height, lazy below the fold, video `muted loop playsinline preload="none"`, fonts with `display=swap`.
- **Accessibility:** real `<button>`/`<a>`/`<label>`, 44px touch targets, text contrast ≥ 4.5:1 (use `--muted` #6B4A52 for grey text on cream, not lighter).

## Placeholders to ask Ali about before launch
`[الحد]` free-shipping threshold · `[عدد]` delivery days · `[سياسة الاستبدال والمرتجع]` · WhatsApp number (`wa.me/20XXXXXXXXXX`) · final product list and prices · real photos/videos · domain (monamourjewels.com not bought yet as of 28 Oct 2026).

## How to work
- Start by running the platform check in `docs/02-shopify-plan.md` §0 and confirm the choice with Ali.
- Build section by section in the order of `docs/01-direction.md` §5. Show Ali the hero + product page first — they sell.
- Keep `tokens.css` as the only place colours/fonts are defined; map them to theme settings.
- When unsure about a brand decision, ask Ali rather than inventing.
