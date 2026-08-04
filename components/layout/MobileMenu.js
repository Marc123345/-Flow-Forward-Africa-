'use client'
import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import DonateButton from "@/components/elements/DonateButton";

const MobileMenu = ({ handleMobileMenu, closeMobileMenu }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({ status: false, key: "" });
    } else {
      setIsActive({ status: true, key });
    }
  };

  return (
    <>
      <div className="mobile-nav__wrapper" id="mobile-nav">
        <div className="mobile-nav__overlay mobile-nav__toggler" onClick={closeMobileMenu} aria-hidden="true"></div>
        <div className="mobile-nav__content">
          <button type="button" className="mobile-nav__close mobile-nav__toggler" onClick={closeMobileMenu} aria-label="Close menu"><i className="fa fa-times"></i></button>

          <div className="logo-box">
            <Link href="/" aria-label="Flow Forward Africa home">
              <img src="/assets/images/resources/logo-2.svg" width="190" alt="Flow Forward Africa" loading="lazy" decoding="async" />
            </Link>
          </div>

          <div className="mobile-nav__container">
            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
              <ul className="main-menu__list">
                <li><Link href="/" onClick={closeMobileMenu}>Home</Link></li>
                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                  <Link href="/about" onClick={closeMobileMenu}>About</Link>
                  <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                    <li><Link href="/about" onClick={closeMobileMenu}>About Flow Forward Africa</Link></li>
                    <li><Link href="/founder" onClick={closeMobileMenu}>Meet the Founder</Link></li>
                  </ul>
                  <button aria-label="Toggle About submenu" className={isActive.key == 1 ? "expanded open" : ""} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></button>
                </li>
                <li><Link href="/initiatives" onClick={closeMobileMenu}>Initiatives</Link></li>
                <li><Link href="/kilimanjaro" onClick={closeMobileMenu}>Kilimanjaro Climb</Link></li>
                <li><Link href="/blog" onClick={closeMobileMenu}>Blog</Link></li>
                <li><Link href="/contact" onClick={closeMobileMenu}>Get Involved</Link></li>
                <li><DonateButton className="ffa-donate-link" showArrow={false}>Donate</DonateButton></li>
              </ul>
            </div>
          </div>

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <Link href={`mailto:${site.email}`}>{site.email}</Link>
            </li>
            {site.phone && (
              <li>
                <i className="fa fa-phone-alt"></i>
                <Link href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  )
}
export default MobileMenu;
