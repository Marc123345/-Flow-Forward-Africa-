// ---------------------------------------------------------------------------
// Blog posts.
//
// Each post is a plain object. `body` is an array of blocks so posts can be
// rendered on both the listing and the article page without duplicating copy.
//
// Block types:
//   { type: "p",     text }   paragraph
//   { type: "h3",    text }   section heading
//   { type: "quote", text }   pull quote
//
// To add a post: append an object here. Nothing else needs changing — the
// listing page and /blog/[slug] route both read from this file.
// ---------------------------------------------------------------------------

export const posts = [
    {
        slug: "listening-first",
        title: "Changing the Conversation Around Period Poverty Starts With Listening",
        excerpt:
            "Real impact rarely begins with having all the answers. It begins with asking better questions.",
        // TODO: confirm publication dates with Flow Forward Africa.
        date: "2026-06-18",
        dateLabel: "18 Jun",
        author: "Flow Forward Africa",
        category: "Our Approach",
        image: "/assets/images/ffa/blog-listening.jpg",
        body: [
            { type: "p", text: "Real impact rarely begins with having all the answers. It begins with asking better questions." },
            { type: "p", text: "Flow Forward Africa was founded on a simple belief: no girl should have to choose between managing her period and receiving an education." },
            { type: "p", text: "Like many people, we initially believed we understood what communities needed. Our first ideas centred around creating sustainable menstrual solutions and teaching girls how to make reusable sanitary products. It seemed like the obvious place to begin." },
            { type: "quote", text: "Then we listened." },
            { type: "p", text: "Engaging directly with girls in township communities transformed our perspective. The conversations challenged our assumptions and reminded us that meaningful social impact cannot be designed from a distance." },
            { type: "p", text: "Every community has its own realities. Every young woman has her own experience. Every solution must begin with understanding." },
            { type: "h3", text: "More than a distribution initiative" },
            { type: "p", text: "That is why Flow Forward Africa exists as more than a distribution initiative. We are building a platform that combines access to menstrual products with education, open conversations and long-term community partnerships." },
            { type: "p", text: "Our first outreach programme provided hundreds of menstrual hygiene products while creating a safe space for honest discussion around periods, confidence, health and education. The lessons we learnt during that first engagement continue to shape every decision we make moving forward." },
            { type: "quote", text: "Social impact is not about arriving with solutions. It is about building solutions together." },
            { type: "p", text: "As we continue to expand our workshops, strengthen partnerships and raise funding through initiatives such as our Kilimanjaro expedition, our commitment remains unchanged: to create sustainable change that is guided by the voices of the girls and communities we serve." },
            { type: "h3", text: "It cannot be done alone" },
            { type: "p", text: "We know that ending period poverty cannot be achieved by one organisation alone." },
            { type: "p", text: "It requires educators, healthcare professionals, businesses, community leaders, volunteers, donors and everyday South Africans who believe that education should never be interrupted by a lack of access to basic menstrual care." },
            { type: "p", text: "The future we are working towards is one where every girl can attend school with confidence, dignity and the freedom to focus on her potential instead of her circumstances." },
            { type: "p", text: "That future begins by listening, and it grows through action." },
        ],
    },
    {
        slug: "climbing-higher-than-a-mountain",
        title: "Climbing Higher Than a Mountain: Why We're Taking on Kilimanjaro",
        excerpt:
            "Some challenges are measured in metres. Others are measured in opportunity.",
        // TODO: confirm publication dates with Flow Forward Africa.
        date: "2026-07-24",
        dateLabel: "24 Jul",
        author: "Flow Forward Africa",
        category: "The Climb",
        image: "/assets/images/ffa/blog-kilimanjaro.jpg",
        body: [
            { type: "p", text: "Some challenges are measured in metres. Others are measured in opportunity." },
            { type: "p", text: "At the end of September, Flow Forward Africa will begin an expedition to the summit of Mount Kilimanjaro. While reaching the highest peak in Africa is an extraordinary physical challenge, the mountain itself is not our destination. The future we're working towards is." },
            { type: "quote", text: "Every metre we climb represents another step towards ensuring that girls across South Africa have access to menstrual products, education and the dignity they deserve." },
            { type: "h3", text: "An overlooked barrier to education" },
            { type: "p", text: "Period poverty remains one of the most overlooked barriers to education. For thousands of girls, something as natural as menstruation can mean missing days of school, falling behind academically and gradually losing confidence. Over time, these missed opportunities contribute to a cycle that becomes increasingly difficult to break." },
            { type: "p", text: "We believe that every girl deserves the opportunity to stay in the classroom, participate fully in her education and shape her own future. That belief is what inspired this expedition." },
            { type: "h3", text: "A challenge that matches the commitment" },
            { type: "p", text: "Rather than simply asking people to donate, we wanted to create a challenge that reflected the commitment required to create meaningful change. The Kilimanjaro climb has become a symbol of resilience, determination and collective action. Corporations are pledging sponsorships based on every metre climbed, while individuals are joining our BackaBuddy campaign to help expand the impact even further." },
            { type: "p", text: "Together, these contributions will directly support the distribution of menstrual products, community outreach programmes, educational workshops and partnerships that empower girls where support is needed most." },
            { type: "p", text: "This journey has already shown us that lasting impact is never created alone. It is built through organisations that open their doors, communities that share their lived experiences, volunteers who generously give their time, and businesses that choose to invest in something greater than themselves." },
            { type: "quote", text: "The climb may take only a few days. The impact has the potential to last for generations." },
            { type: "p", text: "As we prepare for Kilimanjaro, we invite organisations, partners, sponsors and individuals to join this journey. Together, we can ensure that no girl's education is interrupted by something that should never stand in her way." },
            { type: "p", text: "Some mountains are climbed with determination. The most important ones are climbed together." },
        ],
    },
]

export function getPost(slug) {
    return posts.find((p) => p.slug === slug)
}
