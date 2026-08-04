import Layout from "@/components/layout/Layout"
import { Band, Prose, SectionTitle, IconCards, CtaBand, Split } from "@/components/elements/Blocks"
import { donateLinkProps } from "@/lib/site"

export const metadata = {
    title: "About",
    description:
        "Flow Forward Africa is a social impact project committed to ending period poverty by improving access to menstrual products, menstrual health education and community-led support.",
}

const pillars = [
    {
        icon: "icon-love",
        title: "Access",
        text: "Providing menstrual hygiene products to girls in underserved communities.",
    },
    {
        icon: "icon-help",
        title: "Education",
        text: "Delivering workshops that promote menstrual health, confidence and wellbeing.",
    },
    {
        icon: "icon-hand",
        title: "Collaborations",
        text: "Working with schools, community organisations, volunteers and businesses to create lasting impact together.",
    },
]

export default function About() {
    return (
        <>
            <Layout breadcrumbTitle="About Us">
                <Band>
                    <SectionTitle
                        tagline="About Flow Forward Africa"
                        title={<>Every Girl Deserves the<br /> Freedom to Thrive</>}
                    />
                    <Prose>
                        <p>
                            Flow Forward Africa is a social impact project committed to ending period poverty by
                            improving access to menstrual products, menstrual health education and community-led
                            support.
                        </p>
                        <p>
                            We believe that no girl should miss school, lose confidence, or have her future limited
                            because of her period. By working alongside communities and trusted partners, we&rsquo;re
                            creating practical, sustainable solutions that help girls stay in school and reach their
                            full potential.
                        </p>
                    </Prose>
                </Band>

                <Split
                    image="/assets/images/ffa/story-1.jpg"
                    tagline="Our Story"
                    title={<>It began with a<br /> simple question</>}
                    cta={{ label: "Our Initiatives", href: "/initiatives" }}
                >
                    <p className="ffa-pullquote">
                        How can we create meaningful, lasting change?
                    </p>
                    <p>
                        What started as an idea soon became a journey of listening and learning. Through
                        conversations with experts, community leaders and young women themselves, we discovered
                        that real impact begins by understanding the needs of the people we serve.
                    </p>
                    <p>
                        Community collaborations have been instrumental in this journey, allowing us to deliver
                        menstrual health workshops, distribute essential hygiene products, and build programmes
                        shaped by the voices of the communities we work with.
                    </p>
                </Split>

                <Band blush tight>
                    <SectionTitle tagline="What We Do" title={<>Our work focuses on<br /> three key areas</>} />
                </Band>
                <IconCards items={pillars} />

                <Band>
                    <SectionTitle
                        tagline="Our Vision"
                        title={<>A future where no girl misses<br /> school because of her period</>}
                    />
                    <Prose>
                        <p>
                            A future where menstrual health is understood without stigma, every girl has access to
                            the products she needs, and every young woman has the opportunity to thrive with
                            confidence and dignity.
                        </p>
                        <p className="ffa-pullquote">
                            Creating lasting change takes all of us.
                        </p>
                        <p>
                            Whether you&rsquo;re looking to collaborate, volunteer, sponsor an initiative, or support
                            our mission through a donation, your involvement helps create more opportunities for
                            girls across South Africa.
                        </p>
                        <p>
                            Together, we can keep girls in school, strengthen communities, and create a future where
                            every girl can move forward with confidence.
                        </p>
                    </Prose>
                </Band>

                <CtaBand
                    title="Join the Movement"
                    primary={{ label: "Donate", ...donateLinkProps }}
                    secondary={{ label: "Get Involved", href: "/contact" }}
                />
            </Layout>
        </>
    )
}
