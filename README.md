# Flow Forward Africa

Next.js 13 (App Router) site for Flow Forward Africa, built on the **Anity**
charity/donation React template (`~/Desktop/anity-pack`), recoloured and
rewritten around Flow Forward Africa's own content.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build — all pages render as static HTML
```

---

## Before this can go live

These are the open items. Everything else is finished.

| # | Item | Where to change it |
|---|------|--------------------|
| 1 | **Founder portrait** is still a placeholder, and the Kilimanjaro shot is stock. All other photography is FFA's own. | `public/assets/images/ffa/` — see [Photography](#photography) |
| 2 | **Contact email.** Currently `hello@flowforwardafrica.org` (invented). | `lib/site.js` → `email` |
| 3 | **Phone number.** Omitted everywhere (set to `null`); the UI hides it until you add one. | `lib/site.js` → `phone` |
| 4 | **Social links.** All point at `#`. | `lib/site.js` → `social` |
| 5 | **Donation URL.** Donations are handled off-site. Paste the campaign link into `donateUrl` and every Donate button on the site points at it and opens in a new tab. Until then they fall back to `/contact`. | `lib/site.js` → `donateUrl` |
| 6 | **Contact form delivery.** No endpoint configured, so the form is replaced by a direct "email us" block. | See [Contact form](#contact-form) |
| 7 | **Kilimanjaro dates.** Copy says "end of September" with no year. | `lib/site.js` → `climb.when` |
| 8 | **Blog post dates.** Placeholder dates (18 Jun / 24 Jul 2026). | `lib/posts.js` |
| 9 | **Live domain.** Used for metadata / Open Graph URLs. | `lib/site.js` → `url` |

Nothing on the site states a fundraising total, a number of girls reached, or
any other figure — no statistics were supplied, and none were invented.

---

## Where things live

```
app/
  page.js                  Home
  about/                   About Flow Forward Africa
  founder/                 Meet the Founder
  initiatives/             Our Initiatives
  kilimanjaro/             The Kilimanjaro Climb
  blog/                    Blog listing
  blog/[slug]/             Blog article (generated from lib/posts.js)
  contact/                 Get Involved / Contact / Donate
  not-found.js             404

components/
  layout/                  Header, Menu, MobileMenu, Footer, Breadcrumb, Layout
  sections/home/           The home page sections
  elements/Blocks.js       Reusable content blocks (see below)
  elements/ContactForm.js  Contact form

lib/
  site.js                  Org details, contact info, links — SINGLE SOURCE OF TRUTH
  posts.js                 Blog posts
  font.js                  DM Sans + Libre Baskerville (next/font)

public/assets/
  css/style.css            Vendor template CSS (recoloured in place)
  css/module-css/          Vendor per-section CSS (recoloured in place)
  css/brand.css            OUR overrides — edit this, not the vendor files
  images/ffa/              Site photography (see IMAGE-CREDITS.md)
  images/resources/        logo-1.svg (dark bg) / logo-2.svg (light bg)
```

### Reusable blocks

`components/elements/Blocks.js` provides `SectionTitle`, `Band`, `Prose`,
`Split`, `IconCards`, `CtaBand` and `Btn`. Building a new page means composing
those rather than copying markup — see `app/initiatives/page.js` for a typical
example.

---

## Photography

All photography is **Flow Forward Africa's own**, from a real workshop —
supplied by the organisation and cropped to each slot. No stock, no attribution
required. Full slot-by-slot detail is in
**[IMAGE-CREDITS.md](IMAGE-CREDITS.md)**.

Files live in `public/assets/images/ffa/` and are referenced by filename in the
page components, so replacing one is a straight overwrite — same name, roughly
the same aspect ratio, nothing else to change.

**Consent matters here.** These are identifiable young people, many of them
minors. Confirm the workshop consent covers website and social publication.

**Still outstanding:** `founder.svg` is a placeholder for a portrait of Alexia
(Lexi) Levy — it needs a real photograph of her. And Mount Kilimanjaro is still
a stock image (the climb hasn't happened); swap in the team's own summit photos
afterwards.

## Donations

There is no donation page and no payment form on this site. Every Donate
button opens a chooser asking **"Do you need a Section 18A certificate?"**,
because the destination differs:

| Answer | Goes to |
|--------|---------|
| Yes — needs the SARS tax-deductible receipt | GivenGain campaign |
| No | *Awaiting link — shown as "coming soon" and not clickable* |

Both URLs live in `site.donate` in `lib/site.js`. Fill in
`withoutCertificate` and that option becomes live automatically; until then it
is deliberately inert rather than pointing somewhere wrong.

The chooser is `components/elements/DonateModal.js`, opened by any
`DonateButton` via a window event, with the host mounted once in `Layout`.

---

## Contact form

`components/elements/ContactForm.js` posts to whatever is in
`NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`. Any form-to-email service works
(Formspree, Getform, Basin, Netlify Forms):

```bash
# .env.local
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

With no endpoint set the form is **not rendered at all** — the page shows the
organisation's email address instead. That's deliberate: a form that silently
discards enquiries is worse than no form.

---

## Branding

Colours were swapped throughout the vendor CSS (not overridden), so hover
states, gradients and tints are all consistent:

Flow Forward Africa's palette is monochromatic — blush through to deep
burgundy — so the site reads as one warm red family rather than rose + gold +
teal:

| Swatch | Hex | Used for |
|--------|-----|----------|
| Blush pink | `#F5C6BE` | lightest card tint |
| Dusty rose | `#E0A29A` | footer accent type |
| Terracotta rose | `#CE837C` | secondary accent (`--anity-primary`) |
| Muted brick | `#BC6059` | tertiary accent (`--anity-extra`) |
| Brick red | `#A93F3E` | **primary** — buttons, links (`--anity-base`) |
| Crimson / wine | `#932A31` | hover + gradient midpoint |
| Deep burgundy | `#7A1428` | hero wash, dark surfaces (`--ffa-plum`) |

Warm near-black `#2E1B1D` carries headings and body text
(`--anity-black`), and `#FDF4F2` is the blush section background
(`--ffa-blush`).

Fonts are the template's originals and suit the brand well: **Libre
Baskerville** for headings, **DM Sans** for body.

The logo is Flow Forward Africa's own heart-and-hands mark, supplied as a
transparent PNG, locked up with a wordmark in SVG:
`logo-1.svg` (dark type, for light backgrounds) and `logo-2.svg` (white type
and a white knockout of the mark, for the footer and mobile drawer). The mark
is embedded in each SVG as a data URI, so there is one file per variant and
nothing to go missing. The favicon uses the same mark.

---

## Notes on the copy

The supplied copy is used essentially verbatim. Three deliberate changes:

1. **"Flow For It Africa" → "Flow Forward Africa".** The source text used both
   names; the site standardises on Flow Forward Africa throughout. Worth
   confirming which is correct.
2. **Spelling standardised to South African English** (organisation,
   programme, realised).
3. **"Rather than asking people to donate simply"** was reordered to "Rather
   than simply asking people to donate" in the Kilimanjaro blog post.

The template's shop, events, volunteer-directory, testimonials, FAQ and
multi-homepage routes were deleted, along with their components — there was no
content for them, and empty demo pages are worse than no pages.

---

## Deployment

Everything renders as static HTML, so any host works. For Vercel: import the
repo, framework preset **Next.js**, no build configuration needed. Add
`NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` in project settings if you wire up the form.

Next.js is pinned at 13.4.19 by the template and has known security advisories.
Upgrading to the latest Next 14 is worth doing before launch; the app uses only
standard App Router APIs, so it should be a straightforward version bump.
