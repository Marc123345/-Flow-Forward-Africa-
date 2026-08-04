'use client'
import Link from "next/link";
import { useState } from "react";
import { site, donateLinkProps } from "@/lib/site";

const MobileMenu = ({ handleMobileMenu }) => {
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
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu}></div>
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-times"></i></span>

          <div className="logo-box">
            <Link href="/" aria-label="Flow Forward Africa home">
              <img src="/assets/images/resources/logo-2.svg" width="190" alt="Flow Forward Africa" />
            </Link>
          </div>

          <div className="mobile-nav__container">
            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
              <ul className="main-menu__list">
                <li><Link href="/" onClick={handleMobileMenu}>Home</Link></li>
                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                  <Link href="/about" onClick={handleMobileMenu}>About</Link>
                  <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                    <li><Link href="/about" onClick={handleMobileMenu}>About Flow Forward Africa</Link></li>
                    <li><Link href="/founder" onClick={handleMobileMenu}>Meet the Founder</Link></li>
                  </ul>
                  <button aria-label="Toggle About submenu" className={isActive.key == 1 ? "expanded open" : ""} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></button>
                </li>
                <li><Link href="/initiatives" onClick={handleMobileMenu}>Initiatives</Link></li>
                <li><Link href="/kilimanjaro" onClick={handleMobileMenu}>Kilimanjaro Climb</Link></li>
                <li><Link href="/blog" onClick={handleMobileMenu}>Blog</Link></li>
                <li><Link href="/contact" onClick={handleMobileMenu}>Get Involved</Link></li>
                <li><Link {...donateLinkProps} onClick={handleMobileMenu}>Donate</Link></li>
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
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <Link href={site.social.instagram} className="fab fa-instagram" aria-label="Instagram"></Link>
              <Link href={site.social.facebook} className="fab fa-facebook-square" aria-label="Facebook"></Link>
              <Link href={site.social.linkedin} className="fab fa-linkedin-in" aria-label="LinkedIn"></Link>
              <Link href={site.social.tiktok} className="fab fa-tiktok" aria-label="TikTok"></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MobileMenu;
