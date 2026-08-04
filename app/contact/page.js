import Layout from "@/components/layout/Layout"
import Link from "next/link"
import ContactForm from "@/components/elements/ContactForm"
import { Band, Prose, SectionTitle, IconCards, CtaBand } from "@/components/elements/Blocks"
import { site, donateLinkProps } from "@/lib/site"

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

// From the supplied Donate copy. The standalone /donate page was retired once
// donations moved to an external campaign page; this keeps the copy in play.
const impact = [
    {
        icon: "icon-love",
        title: "Provide Essential Products",
        text: "Giving girls access to menstrual hygiene products so they can attend school with confidence.",
    },
    {
        icon: "icon-help",
        title: "Deliver Education",
        text: "Creating safe spaces where girls can learn about menstrual health, wellbeing and self-confidence.",
    },
    {
        icon: "icon-hand",
        title: "Expand Our Reach",
        text: "Working alongside trusted community partners to bring our programmes to more schools and communities.",
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

                {/* Donation copy. Donations themselves are handled off-site, so this
                    section explains the impact and hands off to the campaign page. */}
                <Band blush>
                    <SectionTitle
                        tagline="Donate"
                        title={<>100% of Every Donation Helps<br /> Keep a Girl in School</>}
                    />
                    <Prose>
                        <p>
                            When a girl has access to menstrual products, she gains more than what she needs for a
                            few days each month.
                        </p>
                        <p className="ffa-pullquote">
                            She gains confidence. She gains dignity. She gains the opportunity to stay in school and
                            continue building her future.
                        </p>
                        <p>
                            Every donation helps us provide menstrual hygiene products, deliver educational
                            workshops and expand our outreach programmes to communities across South Africa.
                            Together, we&rsquo;re creating a future where no girl&rsquo;s education is interrupted by her
                            period.
                        </p>
                        <p>
                            <strong>Every contribution, regardless of its size, helps create lasting change.</strong>
                        </p>
                        {!site.donateUrl && (
                            <p>
                                Our donation link is being finalised. In the meantime, get in touch using the form
                                below and we&rsquo;ll share the details of how to give directly, sponsor an initiative,
                                or set up a corporate contribution.
                            </p>
                        )}
                    </Prose>
                </Band>

                <IconCards items={impact} />

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
                    primary={{ label: "Donate", ...donateLinkProps }}
                    secondary={{ label: "The Kilimanjaro Climb", href: "/kilimanjaro" }}
                />
            </Layout>
        </>
    )
}
