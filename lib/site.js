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

    // TODO: paste the live BackaBuddy campaign URL. Until it is set, every
    // "Donate" button routes to the on-site /donate page instead.
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

// Convenience: where a "Donate" button should point.
export const donateHref = site.donateUrl || "/donate"
