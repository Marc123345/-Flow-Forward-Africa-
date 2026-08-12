// ---------------------------------------------------------------------------
// Flow Forward Africa — single source of truth for organisation details.
//
// Everything in this file is used across the site. Update it here once and it
// changes everywhere. Values marked TODO are placeholders that still need the
// real information from Flow Forward Africa before launch.
// ---------------------------------------------------------------------------

export const site = {
    name: "Flow Forward Africa",
    tagline: "Every girl deserves the freedom to thrive",
    description:
        "Flow Forward Africa is a social impact project ending period poverty through access to menstrual products, menstrual health education and community-led support across Africa.",

    // TODO: confirm the live domain before launch.
    // Vercel serves www and 308-redirects the apex to it, so this has to be the
    // www host. It builds og:image, and link scrapers (WhatsApp especially)
    // often will not follow a redirect when fetching the preview image.
    url: "https://www.flowforwardafrica.org",

    email: "lexi@flowforwardafrica.org",

    // TODO: add a public phone number, or set to null to hide it everywhere.
    phone: null,

    location: "Cape Town, South Africa",


    // Donations are handled off-site, and which platform someone is sent to
    // depends on whether they need a Section 18A tax certificate. Every Donate
    // button opens a short chooser first — see components/elements/DonateModal.
    donate: {
        // Section 18A certificate issued (SARS tax deduction).
        withCertificate: "https://www.givengain.com/project/alexia-lexi-raising-funds-for-menstruation-foundation-127015",
        // No certificate — the Kilimanjaro expedition campaign.
        withoutCertificate: "https://www.backabuddy.co.za/campaign/flow-forward-africa-expedition-to-kilimanjaro",
    },

    partners: ["Ikamva Labantu"],
}

// ---------------------------------------------------------------------------
// Mount Kilimanjaro
//
// One canonical photograph is used everywhere the mountain itself appears,
// hosted on Flow Forward Africa's ImageKit account. ImageKit does the cropping
// and format conversion, so each slot requests the exact size it needs.
//
// The source is PORTRAIT (2401×3601). `fo-top` matters: a centred crop of a
// portrait into a wide banner lands on the foreground and loses the mountain
// completely. Cropping from the top keeps sky + summit in frame.
// ---------------------------------------------------------------------------
const KILIMANJARO_SRC =
    "https://ik.imagekit.io/qcvroy8xpd/stephan-bechert-1ZfMAnL4ubE-unsplash.jpg"

export function kilimanjaroImage(width, height) {
    return `${KILIMANJARO_SRC}?tr=w-${width},h-${height},fo-top`
}

export const climb = {
    mountain: "Mount Kilimanjaro",
    heightMetres: 5895,
    // Rendered as supplied in the copy — a comma, not a locale-formatted space.
    heightLabel: "5,895",
    // Reads as "At {when}, Flow Forward Africa will…".
    // TODO: confirm the exact expedition dates (copy says "end of September",
    // with no year given).
    when: "the end of September",
}

// Both donation destinations, in the order they are offered.
export const donateOptions = [
    {
        key: "yes",
        label: "Yes, I need a Section 18A certificate",
        hint: "Issued for SARS tax-deductible donations.",
        url: site.donate.withCertificate,
    },
    {
        key: "no",
        label: "No certificate needed",
        hint: "A straightforward donation.",
        url: site.donate.withoutCertificate,
    },
]
