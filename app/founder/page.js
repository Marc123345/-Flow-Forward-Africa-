import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Band, Prose, SectionTitle, CtaBand } from "@/components/elements/Blocks"
import { site } from "@/lib/site"

export const metadata = {
    title: "Meet the Founder",
    description:
        "Alexia (Lexi) Levy founded Flow Forward Africa at 16, believing that no girl should miss out on her education because of her period.",
}

export default function Founder() {
    return (
        <>
            <Layout breadcrumbTitle="Meet the Founder">
                <section className="volunteer-details">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-5 col-lg-6">
                                <div className="volunteer-details__left">
                                    <div className="volunteer-details__img">
                                        <img className="ffa-photo" src="/assets/images/ffa/founder.svg" alt="Alexia (Lexi) Levy" />
                                        <div className="volunteer-details__social">
                                            <Link href={site.social.instagram} aria-label="Instagram"><span className="icon-instagram"></span></Link>
                                            <Link href={site.social.facebook} aria-label="Facebook"><span className="icon-facebook"></span></Link>
                                            <Link href={site.social.linkedin} aria-label="LinkedIn"><span className="icon-link-in"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-6">
                                <div className="volunteer-details__right">
                                    <div className="volunteer-details__name-and-video">
                                        <div className="volunteer-details__name-box">
                                            <h3 className="volunteer-details__name">Alexia (Lexi) Levy</h3>
                                            <p className="volunteer-details__sub-title">Founder, Flow Forward Africa</p>
                                        </div>
                                    </div>
                                    <div className="ffa-prose">
                                        <p>
                                            Lexi is a Grade 11 student at St Cyprian&rsquo;s School in Cape Town. At just 16
                                            years old, she founded Flow Forward Africa with the belief that no girl should
                                            miss out on her education because of her period.
                                        </p>
                                        <p>
                                            Driven by a passion for creating meaningful change, Lexi has dedicated her time
                                            to volunteering, mentoring and supporting young people through education and
                                            community service. After researching the impact of period poverty, engaging
                                            directly with experts and leaders in the impact space, and collaborating with
                                            girls in underserved communities, she realised that lasting solutions begin by
                                            listening.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Band blush>
                    <Prose>
                        <p>
                            Today, she leads Flow Forward Africa alongside community partners, volunteers and
                            supporters who share a common vision: to ensure that every girl has access to the
                            products, education and opportunities she deserves.
                        </p>
                        <p className="ffa-pullquote">
                            For Lexi, this initiative is a young woman&rsquo;s commitment to helping others move forward
                            with confidence, dignity and hope.
                        </p>
                    </Prose>
                </Band>

                <Band tight>
                    <SectionTitle
                        tagline="From the Blog"
                        title={<>Read more about<br /> how we work</>}
                    />
                    <Prose>
                        <p className="text-center">
                            <Link href="/blog/listening-first">
                                Changing the Conversation Around Period Poverty Starts With Listening
                            </Link>
                        </p>
                    </Prose>
                </Band>

                <CtaBand
                    title={<>Support the girls<br /> Lexi is fighting for</>}
                    primary={{ label: "Donate", donate: true }}
                    secondary={{ label: "Get Involved", href: "/contact" }}
                />
            </Layout>
        </>
    )
}
