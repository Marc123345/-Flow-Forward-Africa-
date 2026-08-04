import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import DonateButton from "@/components/elements/DonateButton"

function NavInner({ handleMobileMenu, isMobileMenu }) {
    return (
        <div className="main-menu__wrapper-inner">
            <div className="main-menu__left">
                <div className="main-menu__logo">
                    <Link href="/" aria-label="Flow Forward Africa home">
                        <img src="/assets/images/resources/logo-1.svg" alt="Flow Forward Africa" />
                    </Link>
                </div>
                <div className="main-menu__main-menu-box">
                    {/* A real button, not an <a href="#">. The anchor navigated on
                        tap, which on mobile fought with the open/close state. */}
                    <button
                        type="button"
                        className="mobile-nav__toggler"
                        onClick={handleMobileMenu}
                        aria-label={isMobileMenu ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenu}
                        aria-controls="mobile-nav"
                    >
                        <i className="fa fa-bars"></i>
                    </button>
                    <Menu />
                </div>
            </div>
            <div className="main-menu__right">
                <div className="main-menu__btn-box">
                    <DonateButton className="main-menu__btn thm-btn">Donate</DonateButton>
                </div>
            </div>
        </div>
    )
}

export default function Header({ scroll, handleMobileMenu, closeMobileMenu, isMobileMenu }) {
    return (
        <>
            <header className="main-header">
                <nav className="main-menu">
                    <div className="main-menu__wrapper">
                        <div className="container">
                            <NavInner handleMobileMenu={handleMobileMenu} isMobileMenu={isMobileMenu} />
                        </div>
                    </div>
                </nav>
            </header>

            <div className={`stricky-header stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
                <div className="sticky-header__content">
                    <nav className="main-menu">
                        <div className="main-menu__wrapper">
                            <div className="container">
                                <NavInner handleMobileMenu={handleMobileMenu} isMobileMenu={isMobileMenu} />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <MobileMenu handleMobileMenu={handleMobileMenu} closeMobileMenu={closeMobileMenu} />
        </>
    )
}
