# Wedding Invitation Template Guide

## COLOR PALETTE
**Backgrounds:** `#FDFBF7` / `#FFFEF9` (light cream)
**Primary Text:** `#5C4F47` (dark brown) - names, headings, venue
**Secondary Text:** `#807060` (lighter brown) - date labels, time, year
**Lines:** `#B0A090` (light brown) - decorative lines

**Florals:**
- Roses: `#E0C0C0`, `#D0A0A0` (pale pink) + `#5C4F47` stroke
- Daisies: `#F0E0C0`, `#E8D8B8` (cream) + `#F0E0C0` centers + `#5C4F47` stroke
- Leaves: `#A0B090`, `#809070` (soft green) + `#5C4F47` stroke
- Accents: `#C0B0A0`, `#A09080` (beige) + `#5C4F47` stroke
All strokes: 0.5-0.8px dark brown

## TYPOGRAPHY
**Body:** Sans-serif (Lato/Montserrat), 400 weight, 11-13px
**Names:** Script (Dancing Script/Great Vibes), 600-700 weight, 48-52px, `#5C4F47`
**Ampersand:** Script, 400 weight, 28-32px
**Date Number:** Sans-serif, 700 weight, 64-68px, `#5C4F47`
**Date Labels:** Sans-serif, 400 weight, 9-12px, `#807060`, uppercase
**Venue:** Sans-serif, 700/400 weight, 16-17px/12-13px, `#5C4F47`

## LAYOUT
**Container:** 600px max-width, centered, padding 80-100px (top/bottom), 60-80px (sides), `#FDFBF7` bg
**Spacing:** 40-50px between sections
**Shadow:** `0 5px 20px rgba(0,0,0,0.08)`

## DECORATIONS
**Top Corners:** 90-110px, delicate clusters (roses, daisies, leaves, beige accents), extend inward, `position: absolute`, dark brown outlines
**Central Frame:** Hexagonal/octagonal wreath around names, 18-20px border width, padding 60-70px (vertical), 50-60px (horizontal), same floral palette
**Bottom Corners:** 140-180px, larger bouquets, same style as top but denser
**Sides (optional):** 60-80px × 180-200px, vertical arrangements, centered vertically

## FLORAL STYLE
**Roses:** Multi-petaled, layered, 12-18px diameter
**Daisies:** Petal clusters with centers, 10-14px diameter
**Leaves:** Oval/teardrop, 8-12px length
**Style:** Hand-drawn, organic, rustic, not symmetrical, opacity 0.9-1.0

## CSS CLASSES
`.invitation-container` - main card
`.floral-corner.top-left/right` - top corners
`.floral-corner.bottom-left/right` - bottom corners  
`.floral-frame` - central frame (pseudo-element or bg)
`.floral-side.left/right` - side decor (optional)
`.invitation-opening` - top message
`.name-static` - couple names
`.date-section` - date/time
`.venue-name/address` - location

## POSITIONING
Corners: `position: absolute; top: 0; left: 0;` (adjust per corner)
Sides: `position: absolute; left: 0; top: 50%; transform: translateY(-50%);`
All decor: `z-index: 1; pointer-events: none;`
Content: `z-index: 2;`

## RESPONSIVE
**768px:** Padding 60px 40px; corners 75-85px/120-135px
**480px:** Padding 50px 30px; corners 60-70px/100-110px; fonts -15-20%

## TEXT CONTENT
**Top:** "AZIZ MEHMONIMIZ! SIZNI HAYOTIMIZDAGI UNUTILMAS KUN, NIKOH TO'YIMIZ MUNOSABATI BILAN O'TADIGAN "VISOL OQSHOMI" GA TAKLIF ETAMIZ!"
**Names:** "Samandar" / "&" / "Nodirabegim"
**Date:** "NOYABR" above, "SESHANBA ─── 18 ─── 17:30" centered, "2025" below
**Venue:** ""Olmos" tantanalar saroyi" / "Termiz shahar"

## SVG NOTES
Use inline SVG (data URIs) or separate files. All elements use muted palette with dark brown strokes. Style: organic, hand-drawn appearance.
