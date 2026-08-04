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
| 1 | **Photography is royalty-free stock, not FFA's own work.** Fine to launch with; replace as real photos arrive. | `public/assets/images/ffa/` — see [Photography](#photography) |
| 2 | **Contact email.** Currently `hello@flowforwardafrica.org` (invented). | `lib/site.js` → `email` |
| 3 | **Phone number.** Omitted everywhere (set to `null`); the UI hides it until you add one. | `lib/site.js` → `phone` |
| 4 | **Social links.** All point at `#`. | `lib/site.js` → `social` |
| 5 | **BackaBuddy / donation URL.** Not set, so every Donate button routes to the on-site `/donate` page, which honestly says the link is being finalised. | `lib/site.js` → `donateUrl` |
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
  donate/                  Donate
  blog/                    Blog listing
  blog/[slug]/             Blog article (generated from lib/posts.js)
  contact/                 Get Involved / Contact
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

Every photograph is **royalty-free stock** licensed CC0 or Public Domain Mark,
sourced through [Openverse](https://openverse.org) from Wikimedia Commons and
Flickr. Neither licence requires attribution, but full provenance for every
file is recorded in **[IMAGE-CREDITS.md](IMAGE-CREDITS.md)**.

> **These photographs show other organisations' programmes, not Flow Forward
> Africa's.** They illustrate the kind of work each page describes. That is
> normal practice, but it is worth being deliberate about: swap in FFA's own
> photography as it becomes available, and make sure consent is in place for
> any identifiable person — especially minors.

Files live in `public/assets/images/ffa/` and are referenced directly by
filename in the page components, so replacing one is a straight overwrite (keep
the same name and roughly the same aspect ratio and nothing else needs to
change).

| File | Size | Shows | Used on |
|------|------|-------|---------|
| `hero-1.jpg` | 1920×800 | Girls' group session outdoors | Home hero, slide 1 |
| `hero-2.jpg` | 1920×800 | Girls together, outdoors | Home hero, slide 3 |
| `hero-3.jpg` | 1920×800 | Mount Kilimanjaro under cloud | Home hero, slide 2 |
| `about-1.jpg` | 1140×1200 | Outreach worker with girls | Home — About collage |
| `about-2.jpg` | 740×680 | Small group reading together | Home — About collage |
| `story-1.jpg` | 1200×1120 | Community session | About — Our Story |
| `initiative-education.jpg` | 820×740 | Session under a shelter | Initiatives |
| `initiative-products.jpg` | 820×740 | Menstrual products being handed out | Initiatives |
| `initiative-partners.jpg` | 820×740 | Health worker with materials | Initiatives |
| `kilimanjaro-1.jpg` | 1140×1120 | Climber at Gilman's Point | Home — Kilimanjaro |
| `kilimanjaro-2.jpg` | 740×680 | Kilimanjaro from the ridge | Home — Kilimanjaro |
| `kilimanjaro-wide.jpg` | 1800×930 | Kilimanjaro under cloud | Kilimanjaro page |
| `blog-listening.jpg` | 1200×750 | Large group seated outdoors | Blog post 1 |
| `blog-kilimanjaro.jpg` | 1200×750 | Climber at the summit sign | Blog post 2 |
| `donate-wide.jpg` | 1800×840 | Girl smiling with a certificate | Donate + Home |
| `cta-wide.jpg` | 1920×500 | Table Mountain, Cape Town | Closing CTA bands |
| `page-header-bg.jpg` | 1920×550 | Table Mountain, Cape Town | All inner-page banners |

`founder.svg` is **still a branded placeholder on purpose.** It marks a portrait
of Alexia (Lexi) Levy — a real, named person — and putting a stock photograph of
someone else there would misrepresent her. It needs an actual photo of Lexi.

**Two things to know when swapping images:**

- The hero and page-header sit under a rose gradient with white type over them.
  If you drop in a much brighter photo, check the headline still reads; the
  gradient stops are commented in `brand.css` under `--- Hero ---` and
  `--- Page header ---`.
- Images total ~3.9 MB. macOS `sips` (used to crop and encode these) has no WebP
  encoder, so they are all JPEG. Converting to WebP/AVIF, or moving the `<img>`
  tags to `next/image`, would cut that substantially — worth doing before launch
  if page weight matters.

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

| Role | Anity original | Flow Forward Africa |
|------|----------------|---------------------|
| Base / primary | `#FF5528` orange | `#C4326B` rose |
| Accent | `#FFA415` amber | `#F0A536` warm gold |
| Secondary | `#26CC8C` green | `#2FA79B` teal |
| Text / dark | `#343434` | `#2E2630` plum-charcoal |

Fonts are the template's originals and suit the brand well: **Libre
Baskerville** for headings, **DM Sans** for body.

The logo is an SVG wordmark in `public/assets/images/resources/`
(`logo-1.svg` for light backgrounds, `logo-2.svg` for dark). If Flow Forward
Africa has its own logo, replace those two files and delete the width rules at
the top of `brand.css`.

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
