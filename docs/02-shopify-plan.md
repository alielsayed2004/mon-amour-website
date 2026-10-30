# 02 · Build plan — Shopify (preferred)

## 0. Platform check (do this first, then confirm with Ali)
Ali's decision (28 Oct 2026) is a full Shopify store with cart + cash on delivery, like competitors Nefertiti and Pink Blonde. Before building, verify with current info:
- Shopify plan cost in Egypt and transaction fees with manual payment methods (COD).
- Egyptian shipping/courier integrations available as Shopify apps (e.g. Bosta, others) and COD collection.
- Whether Arabic RTL works cleanly in the chosen theme (it must).
- Compare briefly with 1–2 alternatives only if something above is a blocker. Default = Shopify.

## 1. Theme
- Start from Shopify's free reference theme (**Dawn** or its current successor) — fast, Online Store 2.0, sections everywhere.
- Add `css/tokens.css`, `css/base.css`, `css/motion.css` as theme assets; map tokens to `settings_schema.json` colour/font settings where useful.
- Fonts: load the 3 Google Fonts (or self-host as theme assets for speed). Keep `display=swap`.
- Set store language to Arabic, `dir="rtl"` in `theme.liquid`.

## 2. Sections to build (one Liquid section per home block)
| Static file block | Shopify section | Notes |
|---|---|---|
| Announcement | `announcement-bar` | text setting |
| Header | `header` | logo image setting, menu from navigation |
| 01 Hero | `hero-sealed` | settings: kicker, heading, lead, "from" price, 2 buttons, photo; envelope/letter SVG inline |
| 02 Trust | `trust-strip` | 4 blocks |
| 03 Best sellers | `featured-collection` (custom card snippet) | collection setting, 4 products, card = `snippets/card-product.liquid` |
| 04 Write her name | `write-her-name` | occasion blocks (label + letter line); CTA link |
| 05 Ritual | `ritual-steps` | 4 blocks |
| 06 By meaning | `collection-tiles` | 4 blocks: collection, English word, Arabic line, style (cream/stage/night) |
| 07 Editorial | `editorial-chessboard` | blocks: image OR word tile |
| 08 UGC | `ugc-grid` | blocks with video/image; hide until real content exists |
| 09 FAQ | `faq` | blocks question/answer (or a metaobject `faq_item`) |
| 10 Footer | `footer` | sign-off text + menus + socials |
| WhatsApp float + mobile buy bar | `snippets/whatsapp-float.liquid`, `snippets/buybar.liquid` | number in theme settings |

## 3. Product setup
- **Packaging ladder = variants.** Option name "التغليف / Packaging": `The Envelope` / `The Box` / `Gift Box`, each with its own price (suggested 299 / 449 / 699 for the hero piece — confirm). The radio list in `product.html` becomes variant radios (`name="id"` with variant ids).
- **Her name + occasion = line item properties** inside the product form:
  - `<input name="properties[Her name]">` (Latin letters, max 16)
  - `<select name="properties[Occasion]">`
  These appear on the order and the packing slip → the letter is written from them.
- Metafields per product: `custom.material` ("Stainless steel 316L, PVD"), `custom.arabic_name`, `custom.video_in_hand` (file), `custom.faq` (list of metaobjects).
- Collections: `hearts`, `words`, `spin`, `gifts-for-her`, `stainless`, `all`. English handles, Arabic titles.

## 4. Cart & checkout
- **Cash on Delivery:** Settings → Payments → manual payment method "Cash on Delivery (COD)". Make it the default/clear option.
- Free-shipping progress bar in cart drawer (threshold from theme setting `[الحد]`).
- Gift Box upsell in cart: "حوّليها Gift Box بـ +[فرق]" (switches variant).
- Keep checkout cream/bordeaux via checkout branding settings available on the plan.

## 5. Apps (keep it light — every app costs speed)
- Meta: **Facebook & Instagram** sales channel → Pixel + Conversions API + catalog sync.
- Shipping/courier app for Egypt with COD (choose in §0).
- Reviews app that supports photo/video reviews and Product schema — enable only when real reviews arrive.
- Optional later: WhatsApp order notifications.

## 6. The QR letter page
- Each order's letter has a QR → `/pages/for-you?o=<order-token>` (or a simple per-order page/metaobject). MVP: one beautiful static "for you" page + the name passed as a parameter; phase 2: per-order page via a small app/Flow.
- Page ends with: "صوّري ريأكشنك وابعتيه لنا" → feeds UGC.

## 7. Build order
1. Theme base + tokens + fonts + RTL.
2. Product page (variants, name, COD) — test a real order end to end.
3. Hero + best sellers + write-her-name.
4. Remaining sections, footer, WhatsApp, buy bar.
5. SEO/GEO/ads setup (`03-seo-geo-ads.md`).
6. Speed pass (Lighthouse mobile), accessibility pass, test on a real Android phone.
