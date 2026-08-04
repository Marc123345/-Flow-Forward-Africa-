import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Band, Prose, SectionTitle, IconCards, CtaBand, Btn } from "@/components/elements/Blocks"
import { site, climb } from "@/lib/site"

export const metadata = {
    title: "Donate",
    description:
        "Every donation helps Flow Forward Africa provide menstrual hygiene products, deliver educational workshops and expand outreach programmes across South Africa.",
}

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

export default function Donate() {
    return (
        <>
            <Layout breadcrumbTitle="Donate">
                <Band tight>
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
                            deliver educational workshops and expand our outreach programmes to communities across
                            South Africa.
                        </p>
                        <p>
                            Together, we&rsquo;re creating a future where no girl&rsquo;s education is interrupted by her
                            period.
                        </p>
                    </Prose>
                </Band>

                <Band blush tight>
                    <SectionTitle tagline="Your Impact" title={<>Your support<br /> helps us</>} />
                </Band>
                <IconCards items={impact} />

                <Band>
                    <Prose>
                        <p className="text-center">
                            <strong>Every contribution, regardless of its size, helps create lasting change.</strong>
                        </p>
                    </Prose>
                </Band>

                {/* How to give — deliberately not a card form. Donations are handled by
                    Flow Forward Africa's fundraising platform, not by this site. */}
                <section className="donation-one">
                    <div className="donation-one__wrapper">
                        <div className="donation-one__left">
                            <div
                                className="donation-one__left-bg"
                                style={{ backgroundImage: 'url(/assets/images/ffa/donate-wide.jpg)' }}
                            ></div>
                        </div>
                        <div className="donation-one__right">
                            <div className="donation-one__content-box">
                                <div className="section-title-two text-left sec-title-animation animation-style2">
                                    <div className="section-title-two__tagline-box">
                                        <span className="section-title-two__tagline">Ways to Give</span>
                                    </div>
                                    <h2 className="section-title-two__title title-animation">
                                        Make a <span>donation</span> today
                                    </h2>
                                </div>
                                <div className="ffa-prose">
                                    {site.donateUrl ? (
                                        <p>
                                            Donations are handled securely through our fundraising campaign. Every
                                            contribution goes directly towards products, workshops and outreach.
                                        </p>
                                    ) : (
                                        <p>
                                            Our public fundraising campaign link is being finalised. In the meantime,
                                            get in touch and we&rsquo;ll share the details of how to give directly, sponsor
                                            an initiative, or set up a corporate contribution.
                                        </p>
                                    )}
                                    <ul className="ffa-list">
                                        <li>
                                            <strong>Individual donations</strong>
                                            One-off or recurring gifts of any size.
                                        </li>
                                        <li>
                                            <strong>Corporate sponsorship</strong>
                                            Sponsor an outreach programme, a workshop, or every metre of the
                                            Kilimanjaro climb.
                                        </li>
                                        <li>
                                            <strong>In-kind support</strong>
                                            Donate menstrual products, or the services and skills your team can offer.
                                        </li>
                                    </ul>
                                </div>
                                <div className="donation-one__btn-box" style={{ marginTop: "34px" }}>
                                    {site.donateUrl ? (
                                        <Btn href={site.donateUrl} className="donation-one__btn thm-btn">Donate Now</Btn>
                                    ) : (
                                        <Btn href="/contact" className="donation-one__btn thm-btn">Contact Us to Give</Btn>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Band blush>
                    <SectionTitle
                        tagline="The Kilimanjaro Challenge"
                        title={<>Support the climb,<br /> expand the reach</>}
                    />
                    <Prose>
                        <p>
                            Our {climb.mountain} expedition is more than a climb. It&rsquo;s a fundraising campaign that
                            will help expand the reach of Flow Forward Africa and support thousands more girls.
                        </p>
                        <p>
                            By supporting the climb, you&rsquo;re helping us turn every step into opportunity for the
                            young women we serve.{" "}
                            <Link href="/kilimanjaro">Read more about the expedition</Link>.
                        </p>
                        <h3>More Ways to Make an Impact</h3>
                        <p>
                            There are many ways to be part of this journey. Whether you&rsquo;d like to make a donation,
                            sponsor the Kilimanjaro expedition, partner with us as a business, or volunteer your
                            time, your support helps us create meaningful change where it&rsquo;s needed most.
                        </p>
                        <p className="ffa-pullquote">
                            Period poverty is a challenge we can solve together.
                        </p>
                        <p>
                            Your generosity helps keep girls in classrooms, strengthens communities and creates
                            opportunities that last far beyond today.
                        </p>
                        <p>
                            Thank you for believing in a future where every girl has the freedom to learn, grow and
                            thrive.
                        </p>
                    </Prose>
                </Band>

                <CtaBand
                    title={<>Together, we can keep girls<br /> moving forward</>}
                    primary={{ label: site.donateUrl ? "Donate Now" : "Contact Us to Give", href: site.donateUrl || "/contact" }}
                    secondary={{ label: "The Kilimanjaro Climb", href: "/kilimanjaro" }}
                />
            </Layout>
        </>
    )
}
