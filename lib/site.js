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
        "Flow Forward Africa is a social impact project ending period poverty through access to menstrual products, menstrual health education and community-led support across South Africa.",

    // TODO: confirm the live domain before launch.
    url: "https://flowforwardafrica.org",

    // TODO: replace with the real inbox.
    email: "hello@flowforwardafrica.org",

    // TODO: add a public phone number, or set to null to hide it everywhere.
    phone: null,

    location: "Cape Town, South Africa",

    // TODO: replace "#" with the real profile URLs. Any entry left as "#"
    // still renders — remove the whole entry to hide that icon.
    social: {
        instagram: "#",
        facebook: "#",
        linkedin: "#",
        tiktok: "#",
    },

    // Donations are handled off-site. Paste the live campaign URL here
    // (BackaBuddy or similar) and EVERY Donate button across the site points at
    // it and opens in a new tab — nothing else needs changing.
    //
    // TODO: awaiting the live link. Until it is set, Donate buttons fall back
    // to /contact, which explains how to give.
    donateUrl: null,

    partners: ["Ikamva Labantu"],
}

export const climb = {
    mountain: "Mount Kilimanjaro",
    heightMetres: 5895,
    // Reads as "At {when}, Flow Forward Africa will…".
    // TODO: confirm the exact expedition dates (copy says "end of September",
    // with no year given).
    when: "the end of September",
}

// Where a "Donate" button should point. Falls back to the Get Involved page
// until the external campaign URL is supplied.
export const donateHref = site.donateUrl || "/contact"

// True once donations are handled by an external campaign page.
export const donateIsExternal = Boolean(site.donateUrl)

// Spread onto any <Link> that acts as a Donate button. Handles opening the
// external campaign in a new tab, safely.
export const donateLinkProps = donateIsExternal
    ? { href: site.donateUrl, target: "_blank", rel: "noopener noreferrer" }
    : { href: donateHref }
