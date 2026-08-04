import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Band, Prose, SectionTitle, CtaBand } from "@/components/elements/Blocks"
import { site } from "@/lib/site"

export const metadata = {
    title: "Our Initiatives",
    description:
        "Menstrual health education, access to essential products and community partnerships — practical solutions designed so that no girl is held back by period poverty.",
}

const initiatives = [
    {
        image: "/assets/images/ffa/initiative-education.jpg",
        title: "Menstrual Health Education",
        lead: "Knowledge empowers.",
        text: "Our workshops create safe spaces where girls can learn about menstrual health, hygiene, and wellbeing while building confidence through open and honest conversations.",
    },
    {
        image: "/assets/images/ffa/initiative-products.jpg",
        title: "Access to Essential Products",
        lead: "Every girl deserves the dignity of having access to menstrual products.",
        text: "Through our outreach programmes, we distribute essential hygiene products to girls in underserved communities, helping them stay in school and participate fully in their education.",
    },
    {
        image: "/assets/images/ffa/initiative-partners.jpg",
        title: "Community Partnerships",
        lead: "Lasting impact happens through collaboration.",
        text: `Working alongside organisations like ${site.partners[0]}, as well as schools, volunteers, and local leaders, we build initiatives that are shaped by the communities we serve and designed to create sustainable change.`,
    },
]

export default function Initiatives() {
    return (
        <>
            <Layout breadcrumbTitle="Our Initiatives">
                <Band tight>
                    <SectionTitle
                        tagline="Our Initiatives"
                        title={<>Creating Change<br /> That Lasts</>}
                    />
                    <Prose>
                        <p>
                            At Flow Forward Africa, every initiative is designed around one goal: ensuring that no
                            girl is held back by period poverty.
                        </p>
                        <p>
                            By working alongside communities, schools, and trusted partners, we create practical
                            solutions that improve access to menstrual health education, essential products, and
                            ongoing support.
                        </p>
                    </Prose>
                </Band>

                <section className="found-one">
                    <div className="container">
                        <div className="row">
                            {initiatives.map((item, i) => (
                                <div
                                    key={item.title}
                                    className={`col-xl-4 col-lg-4 wow ${i === 0 ? "fadeInLeft" : i === 1 ? "fadeInUp" : "fadeInRight"}`}
                                    data-wow-delay={`${(i + 1) * 100}ms`}
                                >
                                    <div className="found-one__single">
                                        <div className="found-one__img-box">
                                            <div className="found-one__img">
                                                <img className="ffa-photo" src={item.image} alt="" loading="lazy" decoding="async" />
                                            </div>
                                        </div>
                                        <div className="found-one__content">
                                            <h4 className="found-one__title">{item.title}</h4>
                                            <p className="found-one__text"><strong>{item.lead}</strong></p>
                                            <p className="found-one__text">{item.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Band blush>
                    <SectionTitle tagline="Looking Ahead" title={<>Our work grows with<br /> every partnership</>} />
                    <Prose>
                        <p>
                            Our work continues to grow with every partnership, every outreach programme, and every
                            conversation.
                        </p>
                        <p>
                            As Flow Forward Africa expands, so will our initiatives, allowing us to reach more
                            girls, strengthen more communities, and move closer to a future where period poverty is
                            no longer a barrier to education or opportunity.
                        </p>
                        <p className="ffa-pullquote">
                            Whether you&rsquo;re a community organisation, corporate partner, volunteer, or
                            passionate individual, you can help us create meaningful change.
                        </p>
                        <p>
                            Together, we can ensure every girl has the confidence, dignity, and opportunity to
                            thrive. You can also{" "}
                            <Link href="/kilimanjaro">support the Kilimanjaro expedition</Link>, which funds the
                            growth of every programme on this page.
                        </p>
                    </Prose>
                </Band>

                <CtaBand
                    title="Get Involved"
                    primary={{ label: "Donate", donate: true }}
                    secondary={{ label: "Partner With Us", href: "/contact" }}
                />
            </Layout>
        </>
    )
}
