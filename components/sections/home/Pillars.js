import Link from "next/link"

const pillars = [
    {
        icon: "icon-love",
        title: "Access",
        text: "Providing menstrual hygiene products to girls in underserved communities.",
        cls: "",
        anim: "fadeInUp",
    },
    {
        icon: "icon-help",
        title: "Education",
        text: "Delivering workshops that promote menstrual health, confidence and wellbeing.",
        cls: " feature-one__single-2",
        anim: "fadeInDown",
    },
    {
        icon: "icon-hand",
        title: "Collaborations",
        text: "Working with schools, community organisations, volunteers and businesses to create lasting impact together.",
        cls: " feature-one__single-3",
        anim: "fadeInUp",
    },
]

export default function Pillars() {
    return (
        <>
            {/* What We Do — the three areas the work focuses on */}
            <section className="feature-one">
                <div className="container">
                    <div className="row">
                        {pillars.map((p, i) => (
                            <div key={p.title} className={`col-xl-4 col-lg-4 wow ${p.anim}`} data-wow-delay={`${(i + 1) * 100}ms`}>
                                <div className={`feature-one__single${p.cls}`}>
                                    <div className="feature-one__icon">
                                        <span className={p.icon}></span>
                                    </div>
                                    <div className="feature-one__content">
                                        <h4><Link href="/initiatives">{p.title}</Link></h4>
                                        <p>{p.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
