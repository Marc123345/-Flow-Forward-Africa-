import Link from "next/link"
import { site } from "@/lib/site"
import DonateButton from "@/components/elements/DonateButton"

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <>
            <footer className="site-footer">
                {/* Join the Movement strip — replaces the template's newsletter form */}
                <div className="site-footer__newsletter">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="site-footer__newsletter-inner">
                                    <div className="site-footer__newsletter-left">
                                        <div className="site-footer__newsletter-title-box">
                                            <h3 className="site-footer__newsletter-title">Join the Movement</h3>
                                        </div>
                                    </div>
                                    <div className="site-footer__newsletter-right">
                                        <div className="site-footer__newsletter-content">
                                            <p className="site-footer__newsletter-text">
                                                Period poverty is a challenge we can solve together.
                                            </p>
                                            <Link href="/contact" className="thm-btn site-footer__newsletter-btn">
                                                Get Involved<span><i className="icon-arrow-right"></i></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-footer__top">
                    <div className="container">
                        <div className="site-footer__top-inner">
                            <div className="row">
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                    <div className="footer-widget__about">
                                        <div className="footer-widget__about-logo">
                                            <Link href="/" aria-label="Flow Forward Africa home">
                                                <img src="/assets/images/resources/logo-2.svg" alt="Flow Forward Africa" />
                                            </Link>
                                        </div>
                                        <p className="footer-widget__about-text">
                                            Ending period poverty through access to menstrual products, menstrual
                                            health education and community-led support across South Africa.
                                        </p>
                                        <div className="site-footer__social">
                                            <Link href={site.social.instagram} aria-label="Instagram"><i className="icon-instagram"></i></Link>
                                            <Link href={site.social.facebook} aria-label="Facebook"><i className="icon-facebook"></i></Link>
                                            <Link href={site.social.linkedin} aria-label="LinkedIn"><i className="icon-link-in"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                    <div className="footer-widget__services">
                                        <h4 className="footer-widget__title">What We Do</h4>
                                        <ul className="footer-widget__services-list list-unstyled">
                                            <li><Link href="/initiatives">Menstrual Health Education</Link></li>
                                            <li><Link href="/initiatives">Access to Essential Products</Link></li>
                                            <li><Link href="/initiatives">Community Partnerships</Link></li>
                                            <li><Link href="/kilimanjaro">The Kilimanjaro Climb</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                    <div className="footer-widget__links">
                                        <h4 className="footer-widget__title">Explore</h4>
                                        <ul className="footer-widget__services-list list-unstyled">
                                            <li><Link href="/about">About Us</Link></li>
                                            <li><Link href="/founder">Meet the Founder</Link></li>
                                            <li><Link href="/blog">Blog</Link></li>
                                            <li><DonateButton className="ffa-donate-link" showArrow={false}>Donate</DonateButton></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                    <div className="footer-widget__contact">
                                        <h3 className="footer-widget__title">Get in Touch</h3>
                                        <ul className="footer-widget__contact-list list-unstyled">
                                            {site.phone && (
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-call"></span>
                                                    </div>
                                                    <p><Link href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</Link></p>
                                                </li>
                                            )}
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-envelope"></span>
                                                </div>
                                                <p><Link href={`mailto:${site.email}`}>{site.email}</Link></p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-pin"></span>
                                                </div>
                                                <p>{site.location}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer__bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="site-footer__bottom-inner">
                                    <div className="site-footer__copyright">
                                        <p className="site-footer__copyright-text">
                                            &copy; {year} {site.name}. All rights reserved.
                                        </p>
                                    </div>
                                    <div className="site-footer__bottom-menu-box">
                                        <ul className="list-unstyled site-footer__bottom-menu">
                                            <li><Link href="/about">About</Link></li>
                                            <li><Link href="/contact">Get Involved</Link></li>
                                            <li><DonateButton className="ffa-donate-link" showArrow={false}>Donate</DonateButton></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
