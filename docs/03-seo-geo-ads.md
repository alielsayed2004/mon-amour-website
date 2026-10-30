# 03 · SEO, GEO & Ads — "Easy to find"

**Core idea:** one clean product record (English name, Arabic descriptor, material 316L, price, real photos + video, 4 FAQ, occasion) feeds three places at once: Google (SEO), AI answers (GEO: ChatGPT, Gemini, Google AI Overviews), and Meta ads (catalog + landing pages).

## 1. Keyword map (proposed from audience language — verify volumes in Google Keyword Planner before building pages)
| Cluster | Example searches | Page |
|---|---|---|
| Material / trust | سلسلة ستانلس مش بتغير لون · اكسسوارات ستانلس فرز أول · stainless steel necklace egypt | `/collections/stainless` |
| Gift / buying intent | هدية لصاحبتي · هدية عيد ميلاد بنت · هدية خطوبة بسيطة | `/collections/gifts-for-her` |
| Product / trend | سلسلة الوردة اللي بتلف · سلسلة حب بالعربي · حلق هجيز ستانلس | product pages |
| Price / comparison | هدية بنات أقل من 300 · اكسسوارات مضمونة · الدفع عند الاستلام | guide + collections |

## 2. Product page template (SEO)
- `<title>`: `[Arabic descriptor with keyword] ستانلس 316L | MON AMOUR`
- Meta description: material · doesn't tarnish · price · COD · envelope with her name (≤ 155 chars).
- H1: English name; Arabic descriptor right under it.
- First two lines answer: material · tarnish? · price · shipping.
- URL handle: short English (`spinning-flower-necklace`), never encoded Arabic.
- Image alt: Arabic description of the real piece.
- JSON-LD `Product` with `offers` (EGP, availability). `aggregateRating` only from real reviews.
- `hreflang`/locale ar-EG; canonical URLs; Shopify sitemap submitted in Google Search Console.

## 3. GEO — show up inside AI answers
- **One fixed brand sentence**, identical on the About page, homepage schema, and all social bios:
  «MON AMOUR براند اكسسوارات ستانلس 316L في مصر، من 199 جنيه، والدفع عند الاستلام. كل أوردر بيوصل في ظرف مختوم وجواه جواب باسمها.»
- **Question → direct answer:** every FAQ answer gives the answer in its first sentence.
- **Small guides** that answer and sell: «إزاي تعرفي الستانلس الأصلي» · «هدية لصاحبتك بأقل من 300».
- **About page = facts only:** material, shipping, exchange policy, packaging. No founder face/name.
- **Organization + Product (+ FAQ) schema** — machines understand who the brand is. (FAQ schema helps understanding; Google shows FAQ rich results only for some sites, so don't count on that.)
- **Mentions outside the site:** TikTok creators, bloggers, real reviews using the same words → AI tools trust and cite the brand.

## 4. Ads-ready (Meta)
**Every ad angle has its own landing page, and the page's first line repeats the ad hook.**
| Ad angle | Landing page | First line on page |
|---|---|---|
| Hard sales · 299 | `/products/spinning-flower-necklace` | محدش هيصدق إنها بـ 299 |
| Gift for your friend | `/collections/gifts-for-her` | اكتبي اسمها، وإحنا نقفله في ظرف |
| Doesn't tarnish | `/collections/stainless` | ستانلس 316L، جربيه مع المية |
| Gift Box | `/products/gift-box` | هدية جاهزة، من غير ما تفكري |

- **Pixel + Conversions API** via Shopify's Facebook & Instagram channel; check events: ViewContent, AddToCart, InitiateCheckout, Purchase.
- **UTM** on every ad: `utm_source=meta&utm_medium=paid&utm_campaign=<angle>&utm_content=<creative>`.
- **Catalog** synced from the same product titles/descriptions/images → catalog & Advantage+ ads without extra work.
- WhatsApp-message ads remain first (per plan); the site supports them with the WhatsApp button and the same offer wording.
- **Speed = cheaper ads:** WebP images, lazy video, hero renders before any motion. Target a fast LCP on mobile.

## 5. Launch checklist
- [ ] Domain bought and connected; HTTPS on
- [ ] Search Console + sitemap submitted
- [ ] Meta Pixel + CAPI verified with test events
- [ ] All `[placeholders]` replaced with real info
- [ ] Brand sentence identical everywhere
- [ ] Lighthouse mobile pass; real-phone test on 4G
