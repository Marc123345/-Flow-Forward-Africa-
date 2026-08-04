import Layout from "@/components/layout/Layout"
import Link from "next/link"
import ContactForm from "@/components/elements/ContactForm"
import { Band, Prose, SectionTitle, IconCards, CtaBand } from "@/components/elements/Blocks"
import { site, climb } from "@/lib/site"

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
        text: "Creating safe spaces where girls can learn about menstrual health, wellbeing, and self-confidence.",
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
                            At Flow Forward Africa, every donation helps us provide menstrual hygiene products,
                            deliver educational workshops, and expand our outreach programmes to communities across
                            South Africa.
                        </p>
                        <p>
                            Together, we&rsquo;re creating a future where no girl&rsquo;s education is interrupted
                            by her period.
                        </p>
                        <p>
                            <strong>Every contribution, regardless of its size, helps create lasting change.</strong>
                        </p>
                        <p>
                            Use the Donate button anywhere on this site and we&rsquo;ll ask one question first —
                            whether you need a Section&nbsp;18A certificate — so we can send you to the right place.
                        </p>
                    </Prose>
                </Band>

                <IconCards items={impact} />

                <Band blush>
                    <SectionTitle
                        tagline="Support the Kilimanjaro Challenge"
                        title={<>Turning every step<br /> into opportunity</>}
                    />
                    <Prose>
                        <p>
                            Our Kilimanjaro expedition is more than a climb. It&rsquo;s a fundraising campaign that
                            will help expand the reach of Flow Forward Africa and support thousands more girls.
                        </p>
                        <p>
                            By supporting the climb, you&rsquo;re helping us turn every step into opportunity for the
                            young women we serve.{" "}
                            <Link href="/kilimanjaro">Read more about the expedition</Link>.
                        </p>

                        <h3>More Ways to Make an Impact</h3>
                        <p>There are many ways to be part of this journey.</p>
                        <p>
                            Whether you&rsquo;d like to make a donation, sponsor the Kilimanjaro expedition, partner
                            with us as a business, or volunteer your time, your support helps us create meaningful
                            change where it&rsquo;s needed most.
                        </p>

                        <h3>Join the Movement</h3>
                        <p className="ffa-pullquote">
                            Period poverty is a challenge we can solve together.
                        </p>
                        <p>
                            Your generosity helps keep girls in classrooms, strengthens communities, and creates
                            opportunities that last far beyond today.
                        </p>
                        <p>
                            Thank you for believing in a future where every girl has the freedom to learn, grow, and
                            thrive.
                        </p>
                        <p>Together, we can keep girls moving forward.</p>
                    </Prose>
                </Band>

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
                    primary={{ label: "Donate", donate: true }}
                    secondary={{ label: "The Kilimanjaro Climb", href: "/kilimanjaro" }}
                />
            </Layout>
        </>
    )
}
