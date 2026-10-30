# MON AMOUR · Shopify theme ("Sealed Salon")

Online Store 2.0 theme built from `index.html` / `product.html` and `docs/02-shopify-plan.md`.
Arabic RTL, COD-first, no apps required. Passes Shopify Theme Check with 0 offenses.

## 1. Install
**Option A: Shopify CLI (recommended)**
```bash
npm i -g @shopify/cli
cd theme
shopify theme dev --store <your-store>.myshopify.com      # live preview
shopify theme push --unpublished --store <your-store>.myshopify.com
```
**Option B: zip upload:** zip the *contents* of `theme/` (so `layout/` sits at the zip root), then go to Online Store → Themes → Add theme → Upload zip file.
```bash
cd theme && zip -r ../mon-amour-theme.zip . -x README.md
```

## 2. Store setup (admin)
1. **Language:** Settings → Languages → make Arabic the default (the theme ships `ar.default.json` + `en.json`).
2. **Currency:** EGP. **Payments:** Settings → Payments → Manual payment method → *Cash on Delivery (COD)*.
3. **Shipping:** add a free-shipping rate above the same threshold you enter in Theme settings → Shop info.
4. **Metafield definitions** (Settings → Custom data → Products), all namespace `custom`:
   | Key | Type | Used for |
   |---|---|---|
   | `arabic_name` | Single line text | Arabic descriptor under the English title, card subtitle, image alt |
   | `material` | Single line text | Specs row + Product schema (default "ستانلس 316L، مطلي PVD") |
   | `video_in_hand` | File (video) | 5-second in-hand video: first in gallery, plays on the card |
   | `card_tag` | Single line text | Small label on the card (e.g. «الأكتر طلباً») |
   | `ad_hook` | Single line text | First line on the product page = the Meta ad's hook |

   Variants (optional): `custom.packaging_note` (Single line text) for the line under each packaging option.
5. **Products:** one option named `Packaging` with values `The Envelope` / `The Box` / `Gift Box`, each with its own price (suggested 299 / 449 / 699, confirm with Ali). These exact names get the built-in Arabic notes, and the cart's "حوّليها Gift Box" upgrade looks for a variant whose title contains `Gift Box`. Handles: short English (`spinning-flower-necklace`).
6. **Collections:** `best-sellers` (home grid, 4 pieces), `hearts`, `words`, `spin`, `gift-box`, `gifts-for-her`, `stainless`. The "Shop by meaning" tiles link to `/collections/<english word>` unless you set a link.
7. **Menus:** `main-menu` (header), `footer` (تسوقي), `help` (مساعدة).
8. **Pages:**
   - `for-you` with template **page.for-you**: the QR letter page. QR on each letter → `https://<domain>/pages/for-you?n=<HerName>`.
   - `about` with template **page.about**: facts only (material, shipping, exchange, packaging). Paste the brand sentence word for word.
9. **Theme settings** (Customize → Theme settings): WhatsApp number, free-shipping threshold `[الحد]`, delivery days `[عدد]`, exchange policy `[سياسة الاستبدال والمرتجع]`. These fill every bracket placeholder on the site. Any still empty stays visible in brackets on purpose.
10. **Facebook & Instagram** sales channel for Pixel + CAPI + catalog (see `docs/03-seo-geo-ads.md`).

## 3. How the order carries her name
The product form sends `properties[Her name]` (Latin letters, max 16) and `properties[Occasion]`.
They show on the order, the packing slip and the cart, so the letter is written from them.
Typing a name in the home "Write her name" section carries it to the product page (`?name=…&occ=…`).

## 4. What's where
| File | What |
|---|---|
| `assets/tokens.css` | Colours, type, motion: **single source of truth** (same file as `/css/tokens.css`) |
| `assets/base.css`, `motion.css` | Components + the 6 motions (same as `/css/`) |
| `assets/theme.css` | Store-only parts: cart, menu drawer, collection, pages, seal overlay |
| `assets/fonts.css` + `*.woff2` | Self-hosted Cormorant Garamond, IBM Plex Sans Arabic, Pinyon Script (latin + arabic subsets, SIL OFL) |
| `assets/theme.js` | Name preview, occasions, packaging total, add-to-bag + Seal Press, card video, cart upgrade, reveal |
| `sections/hero-sealed` … `faq` | Home sections 01–09 in the order of `docs/01-direction.md` §5 |
| `sections/main-product` | Packaging ladder, her name, COD buy button, WhatsApp, specs, FAQ, Product + FAQ schema |
| `sections/main-cart` | Free-shipping bar, her name per piece, Gift Box upgrade, COD checkout |
| `sections/ugc-grid` | Real customer content only; renders nothing until a block has media |
| `sections/rich-text` | Use at the top of ad landing pages so the first line repeats the ad hook |

## 5. Before launch
- Replace the bundled placeholder images (hero, editorial, product cards) with real photos/videos. Real product photos for every product card.
- Upload the official logo (Header → Logo) and favicon.
- Keep `css/*.css` at the repo root and `theme/assets/*.css` in sync if you edit tokens/base/motion.
- Lighthouse mobile + a real Android phone on 4G; place a real COD test order end to end.
