import Link from "next/link"
import { climb } from "@/lib/site"

export default function Kilimanjaro() {
    return (
        <>
            {/* The Kilimanjaro Climb — the current fundraising campaign */}
            <section className="who-we-are">
                <div className="who-we-are__shape-3 float-bob-y">
                    <img src="/assets/images/shapes/who-we-are-shape-3.png" alt="" />
                </div>
                <div className="who-we-are__shape-4 float-bob-x">
                    <img src="/assets/images/shapes/who-we-are-shape-4.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 wow fadeInLeft" data-wow-delay="300ms">
                            <div className="who-we-are__left">
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline">The Kilimanjaro Climb</span>
                                    </div>
                                    <h2 className="section-title__title title-animation">
                                        One Mountain.<br /> Thousands of Futures.
                                    </h2>
                                </div>
                                <p className="who-we-are__text">
                                    At {climb.when}, Flow Forward Africa will take on one of Africa&rsquo;s greatest
                                    challenges: climbing {climb.mountain}. Standing at {climb.heightMetres.toLocaleString("en-ZA")} metres
                                    above sea level, it is a test of resilience, determination and purpose. For us,
                                    it represents something even greater.
                                </p>
                                <ul className="ffa-list">
                                    <li>
                                        <strong>Every metre climbed</strong>
                                        Corporate partners are sponsoring each metre, turning every step up the
                                        mountain into practical support for girls across South Africa.
                                    </li>
                                    <li>
                                        <strong>Every contribution counts</strong>
                                        Individual supporters are helping us reach our fundraising goals through
                                        our public campaign.
                                    </li>
                                </ul>
                                <div className="who-we-are__btn-box">
                                    <Link href="/kilimanjaro" className="who-we-are__btn thm-btn">
                                        Climb With Us<span><i className="icon-arrow-right"></i></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                            <div className="who-we-are__right">
                                <div className="who-we-are__img-box">
                                    <div className="who-we-are__img">
                                        <img className="ffa-photo" src="/assets/images/ffa/kilimanjaro-1.jpg" alt="" />
                                    </div>
                                    <div className="who-we-are__img-2">
                                        <img className="ffa-photo" src="/assets/images/ffa/kilimanjaro-2.jpg" alt="" />
                                    </div>
                                    <div className="who-we-are__shape-1 img-bounce"></div>
                                    <div className="who-we-are__shape-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
