import Layout from "@/components/layout/Layout"
import Link from "next/link"
import ContactForm from "@/components/elements/ContactForm"
import { Band, Prose, SectionTitle, IconCards, CtaBand } from "@/components/elements/Blocks"
import { site, donateHref } from "@/lib/site"

export const metadata = {
    title: "Get Involved",
    description:
        "Collaborate, volunteer, sponsor an initiative or donate. Period poverty is a challenge we can solve together.",
}

const ways = [
    {
        icon: "icon-hand",
        title: "Collaborate",
        text: "Schools, community organisations and local leaders who want to bring our programmes to their community.",
    },
    {
        icon: "icon-help",
        title: "Volunteer",
        text: "Give your time at outreach programmes and workshops, or lend the skills your team already has.",
    },
    {
        icon: "icon-love",
        title: "Sponsor",
        text: "Back an initiative, sponsor every metre of the Kilimanjaro climb, or partner with us as a business.",
    },
]

export default function Contact() {
    return (
        <>
            <Layout breadcrumbTitle="Get Involved">
                <Band tight>
                    <SectionTitle
                        tagline="Join the Movement"
                        title={<>Creating lasting change<br /> takes all of us</>}
                    />
                    <Prose>
                        <p>
                            Whether you&rsquo;re looking to collaborate, volunteer, sponsor an initiative, or support our
                            mission through a donation, your involvement helps create more opportunities for girls
                            across South Africa.
                        </p>
                    </Prose>
                </Band>

                <IconCards items={ways} />

                <section className="contact-one">
                    <div className="container">
                        <ContactForm />
                    </div>
                </section>

                <Band blush>
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="ffa-prose text-center">
                                <h3>Reach us directly</h3>
                                <p>
                                    <Link href={`mailto:${site.email}`}>{site.email}</Link>
                                    {site.phone && (
                                        <>
                                            {" · "}
                                            <Link href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</Link>
                                        </>
                                    )}
                                </p>
                                <p>{site.location}</p>
                                <p className="ffa-pullquote" style={{ textAlign: "left" }}>
                                    Together, we can keep girls in school, strengthen communities, and create a future
                                    where every girl can move forward with confidence.
                                </p>
                            </div>
                        </div>
                    </div>
                </Band>

                <CtaBand
                    title={<>Period poverty is a challenge<br /> we can solve together</>}
                    primary={{ label: "Donate", href: donateHref }}
                    secondary={{ label: "The Kilimanjaro Climb", href: "/kilimanjaro" }}
                />
            </Layout>
        </>
    )
}
