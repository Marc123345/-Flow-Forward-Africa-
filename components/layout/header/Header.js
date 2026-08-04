import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import { site, donateLinkProps } from "@/lib/site"

function Social() {
    return (
        <div className="main-menu__social">
            <Link href={site.social.instagram} aria-label="Instagram"><i className="icon-instagram"></i></Link>
            <Link href={site.social.facebook} aria-label="Facebook"><i className="icon-facebook"></i></Link>
            <Link href={site.social.linkedin} aria-label="LinkedIn"><i className="icon-link-in"></i></Link>
        </div>
    )
}

function NavInner({ handleMobileMenu }) {
    return (
        <div className="main-menu__wrapper-inner">
            <div className="main-menu__left">
                <div className="main-menu__logo">
                    <Link href="/" aria-label="Flow Forward Africa home">
                        <img src="/assets/images/resources/logo-1.svg" alt="Flow Forward Africa" />
                    </Link>
                </div>
                <div className="main-menu__main-menu-box">
                    <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu} aria-label="Open menu"><i className="fa fa-bars"></i></Link>
                    <Menu />
                </div>
            </div>
            <div className="main-menu__right">
                <div className="main-menu__btn-box">
                    <Link {...donateLinkProps} className="main-menu__btn thm-btn">
                        Donate<span><i className="icon-arrow-right"></i></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default function Header({ scroll, handleMobileMenu }) {
    return (
        <>
            <header className="main-header">
                <div className="main-menu__top">
                    <div className="container">
                        <div className="main-menu__top-inner">
                            <ul className="list-unstyled main-menu__contact-list">
                                <li>
                                    <div className="icon">
                                        <i className="icon-envelope"></i>
                                    </div>
                                    <div className="text">
                                        <p><Link href={`mailto:${site.email}`}>{site.email}</Link></p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="icon-pin-two"></i>
                                    </div>
                                    <div className="text">
                                        <p>{site.location}</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="main-menu__top-right">
                                <div className="main-menu__social-box">
                                    <p className="main-menu__social-title">Follow Us On:</p>
                                    <Social />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="main-menu">
                    <div className="main-menu__wrapper">
                        <div className="container">
                            <NavInner handleMobileMenu={handleMobileMenu} />
                        </div>
                    </div>
                </nav>
            </header>

            <div className={`stricky-header stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
                <div className="sticky-header__content">
                    <nav className="main-menu">
                        <div className="main-menu__wrapper">
                            <div className="container">
                                <NavInner handleMobileMenu={handleMobileMenu} />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <MobileMenu handleMobileMenu={handleMobileMenu} />
        </>
    )
}
