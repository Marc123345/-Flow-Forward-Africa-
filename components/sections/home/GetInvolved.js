import Link from "next/link"
import { donateLinkProps } from "@/lib/site"

export default function GetInvolved() {
    return (
        <>
            {/* Two ways in: give, or partner with us */}
            <section className="donate-one pdt">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                            <div className="donate-one__single">
                                <div className="donate-one__single-bg" style={{ backgroundImage: 'url(/assets/images/ffa/donate-wide.jpg)' }}></div>
                                <h3 className="donate-one__title">
                                    <Link {...donateLinkProps}>Keep a girl in school</Link>
                                </h3>
                                <p className="donate-one__text">
                                    Every donation helps us provide menstrual hygiene products,<br /> deliver
                                    educational workshops and expand our outreach<br /> programmes across South Africa.
                                </p>
                                <div className="donate-one__btn-box">
                                    <Link {...donateLinkProps} className="donate-one__btn thm-btn">
                                        Donate<span><i className="icon-arrow-right"></i></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                            <div className="donate-one__single donate-one__single-2">
                                <div className="donate-one__single-bg" style={{ backgroundImage: 'url(/assets/images/ffa/cta-wide.jpg)' }}></div>
                                <h3 className="donate-one__title">
                                    <Link href="/contact">Collaborate, volunteer or sponsor</Link>
                                </h3>
                                <p className="donate-one__text">
                                    Whether you&rsquo;re a community organisation, corporate partner,<br /> volunteer or
                                    passionate individual, your involvement creates<br /> more opportunities for girls.
                                </p>
                                <div className="donate-one__btn-box">
                                    <Link href="/contact" className="donate-one__btn thm-btn">
                                        Get Involved<span><i className="icon-arrow-right"></i></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
