'use client'
import Link from "next/link"
import { useState } from "react"

const tabs = [
    {
        label: "Our Story",
        body: "Flow Forward Africa began with a simple question: how can we create meaningful, lasting change? What started as an idea soon became a journey of listening and learning. Through conversations with experts, community leaders and young women themselves, we discovered that real impact begins by understanding the needs of the people we serve.",
    },
    {
        label: "What We Do",
        body: "Our work focuses on three areas: providing menstrual hygiene products to girls in underserved communities, delivering workshops that promote menstrual health, confidence and wellbeing, and collaborating with schools, community organisations, volunteers and businesses to create lasting impact together.",
    },
    {
        label: "Our Vision",
        body: "We envision a future where no girl misses school because of her period. A future where menstrual health is understood without stigma, every girl has access to the products she needs, and every young woman has the opportunity to thrive with confidence and dignity.",
    },
]

export default function About() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => setActiveIndex(index)

    return (
        <>
            {/* About — who Flow Forward Africa is */}
            <section className="about-One">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="about-One__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                                <div className="about-One__img-box">
                                    <div className="about-One__img">
                                        <img className="ffa-photo" src="/assets/images/ffa/about-1.jpg" alt="" loading="lazy" decoding="async" />
                                    </div>
                                    <div className="about-One__img-2">
                                        <img className="ffa-photo" src="/assets/images/ffa/about-2.jpg" alt="" loading="lazy" decoding="async" />
                                    </div>
                                    <div className="about-One__provide-box wow zoomIn animated" data-wow-delay="500ms" data-wow-duration="2500ms">
                                        <div className="about-One__provide-icon">
                                            <span className="icon-love"></span>
                                        </div>
                                        <div className="about-One__provide-content">
                                            <p className="about-One__provide-count-text">
                                                Products, education<br /> and community support
                                            </p>
                                        </div>
                                    </div>
                                    <div className="about-One__shape-1"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-One__right wow fadeInRight" data-wow-delay="300ms">
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline">About Us</span>
                                    </div>
                                    <h2 className="section-title__title title-animation">
                                        Every girl deserves<br /> the freedom to thrive
                                    </h2>
                                </div>
                                <div className="about-One__vission-mission">
                                    <div className="about-One__tab-box tabs-box">
                                        <ul className="tab-buttons clearfix list-unstyled">
                                            {tabs.map((tab, i) => (
                                                <li
                                                    key={tab.label}
                                                    className={activeIndex == i + 1 ? "tab-btn active-btn" : "tab-btn"}
                                                    onClick={() => handleOnClick(i + 1)}
                                                >
                                                    <span>{tab.label}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="tabs-content">
                                            {tabs.map((tab, i) => (
                                                <div
                                                    key={tab.label}
                                                    className={activeIndex == i + 1 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}
                                                >
                                                    <div className="tabs-content__inner">
                                                        <p>{tab.body}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="about-One__btn-and-need-help">
                                    <div className="about-One__btn-box">
                                        <Link href="/about" className="about-One__btn thm-btn">
                                            Read Our Story<span><i className="icon-arrow-right"></i></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
