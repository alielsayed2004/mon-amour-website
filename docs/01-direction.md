# 01 · Website Direction — "The Sealed Salon"

## 1. Brand in one minute
- **MON AMOUR · Jewels** — curated trend jewelry for girls 16–24 in Egypt (Cairo & Alexandria first), plus people buying them a gift.
- **Promise:** pieces that don't tarnish (stainless 316L, PVD), delivered like a gift: cream envelope, bordeaux wax seal, a letter with her name, a QR to her own page.
- **Tagline:** For every darling · لكل حبيبة.
- **Price ladder:** Mini 199–299 · The Box 449 · Gift Box 699–799 EGP.
- **Voice:** warm, honest, light, confident. Simple Egyptian Arabic. Max one French word per sentence.
- **Audience words to use:** «مش بتغير لون» · «ستانلس فرز أول» · «هدية» · «دلعي نفسك» · «تريند».

## 2. Review of the art direction (for the web)
**Keep**
- Bordeaux / cream / champagne palette — far from the pink every competitor uses; makes the store look more expensive than its prices.
- The letter with her name — the real differentiator. On the site it becomes a step in the order, not just packaging.
- Consistent AI models (Malak, Farida) — same faces across hero and editorial.

**Fix**
- Dark everywhere hides the product → **Stage & Shelf**: bordeaux for the stage, cream for the shelf.
- Mood before price → the visitor comes from an ad; price + COD must be on the first screen.
- AI-only imagery → product cards need the real piece photographed + a 5s in-hand video.

## 3. Concept
**The Sealed Salon** — the site feels like walking into a private evening jewelry salon, and the piece leaves it in an envelope sealed with her name. Luxury in the look, very clear in the selling.

## 4. Four rules
1. **Stage & Shelf** — bordeaux for hero/gift/footer, cream for products and buying.
2. **One piece per frame** — one piece per image, lots of empty space. Space is the luxury.
3. **Elegant price** — big Cormorant number, one price, no SALE stickers.
4. **Ritual sells** — every page says how it arrives: envelope, seal, her name.

## 5. Home page order (each section has one selling job)
| # | Section | Job |
|---|---|---|
| 01 | Hero | Offer + "تبدأ من 199" + COD + buy CTA + WhatsApp. Animated letter rises from the envelope, seal presses, name writes itself. |
| 02 | Trust strip | 316L · doesn't tarnish · COD · envelope with her name |
| 03 | Best sellers | 4 pieces only, with prices (Spinning Flower 299 · Petite Heart 199 · «حب» 249 · Pearl Huggies 249 — confirm final list/prices with Ali) |
| 04 | Write her name | Type the name + pick the occasion → live letter preview. Strongest selling moment. |
| 05 | The Ritual | piece → envelope → seal → her name |
| 06 | Shop by meaning | Hearts · Words · Spin · Gift Box (from 699) |
| 07 | Editorial chessboard | photo / big English word alternating (Darling · Sealed · Forever) — the social content direction |
| 08 | Her reaction | real UGC + reviews after the first orders |
| 09 | FAQ | tarnish? shipping? where do I write the name? exchanges? |
| 10 | Sign-off | "For every darling" + WhatsApp |

## 6. Product page
- Gallery: real photos + 5s in-hand video first.
- Title (English) + Arabic descriptor, big price, "الدفع عند الاستلام".
- **Packaging ladder** (radio): The Envelope 299 · The Box 449 · Gift Box 699 — total updates live. (Suggested mapping of the price ladder; confirm with Ali.)
- **Her name** field (Latin letters) + occasion → saved on the order; preview writes "Dear [name]," in Pinyon.
- Buy button says COD; mobile sticky buy bar + WhatsApp.
- Specs: material, water/perfume, shipping. Short FAQ.

## 7. Conversion system
- Her name as an order property (see Shopify plan).
- Free-shipping progress bar in cart: "فاضلك [مبلغ] وتاخدي الشحن مجاناً".
- WhatsApp button: cream on bordeaux, never WhatsApp green.
- COD written next to every price and on the buy button.
- QR letter page after delivery → she films a reaction → UGC → new ads.

## 8. Motion (see css/motion.css)
"Slow as silk" — ease `cubic-bezier(.22,1,.36,1)`, 600–900ms, one moving thing per screen.
| Motion | Where | Timing |
|---|---|---|
| Seal Press | loader, after add-to-bag, order confirmation | 900ms, once |
| Letter Rise | hero, letter preview | 1.6s, once |
| Gold Sweep | prices/headings | 1.6s, hover only |
| Name Write | her name in Pinyon | 1.8s, on load + on each name change |
| Petal Spin | spinning-flower fallback illustration | 9s loop (real product = video) |
| Quiet Reveal | sections on scroll | 700ms, 180ms stagger |

## 9. Visual identity reference
- Colours: Seal Bordeaux #4A1424 · Letter Cream #F6EFE6 · Sand Linen #EDE2D4 · Champagne #E3C8A8 · Dried Rose #9E3B4F · Ink #2B1B1F (ratio ≈ 45/25/15/8/5/2).
- Logo: four-heart rosette, English-only wordmark (Cormorant Garamond 600). Use the official logo files from the Brand Book; `assets/logo/rosette.svg` is a simplified dev stand-in.
- Icons: thin line, 1.5 stroke, round caps, bordeaux.
- Imagery: moody editorial (bordeaux, cream, chocolate, dewy real skin, gold). AI shots follow the shoot recipes (R1 hard sales · R2 brand mood · R7 night gifting · R8 jewelry on skin).
