'use client'
import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import DataBg from "../elements/DataBg"
import Breadcrumb from './Breadcrumb'
import Header from "./header/Header"
import Footer from './footer/Footer'

export default function Layout({ breadcrumbTitle, children, wrapperCls }) {
    const [scroll, setScroll] = useState(0)

    // Mobile menu.
    //
    // The open/closed state lives in React and the `mobile-menu-visible` class
    // on <body> (which is what the template's CSS keys off) is derived from it
    // in an effect. The template shipped this the other way round — toggling
    // the class imperatively inside the click handler while keeping a separate
    // piece of state — which lets the two drift apart. Once they disagree the
    // drawer stops responding: the handler adds a class that is already there.
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => setMobileMenu((open) => !open)
    const closeMobileMenu = () => setMobileMenu(false)

    useEffect(() => {
        document.body.classList.toggle("mobile-menu-visible", isMobileMenu)
        return () => document.body.classList.remove("mobile-menu-visible")
    }, [isMobileMenu])

    // Escape closes the drawer.
    useEffect(() => {
        if (!isMobileMenu) return
        const onKey = (e) => { if (e.key === "Escape") setMobileMenu(false) }
        document.addEventListener("keydown", onKey)
        return () => document.removeEventListener("keydown", onKey)
    }, [isMobileMenu])

    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()

        const onScroll = () => setScroll(window.scrollY > 100)
        onScroll()
        document.addEventListener("scroll", onScroll, { passive: true })
        return () => document.removeEventListener("scroll", onScroll)
    }, [])
    return (
        <>
            <DataBg />
            <div className={`page-wrapper ${wrapperCls ? wrapperCls : ""}`} id="#top">
                <Header
                    scroll={scroll}
                    isMobileMenu={isMobileMenu}
                    handleMobileMenu={handleMobileMenu}
                    closeMobileMenu={closeMobileMenu}
                />

                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                {children}

                <Footer />
            </div>
            <BackToTop scroll={scroll} />
        </>
    )
}
