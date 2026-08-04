'use client'

/**
 * Every "Donate" control on the site. Instead of linking straight out it opens
 * the Section 18A chooser, which decides the destination.
 *
 * It signals via a window event rather than React context so it can be dropped
 * into any server-rendered page without threading a provider through.
 */
export function openDonate() {
    if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("ffa:donate"))
    }
}

export default function DonateButton({ children = "Donate", className = "thm-btn", showArrow = true }) {
    return (
        <button type="button" className={`${className} ffa-donate-trigger`} onClick={openDonate}>
            {children}
            {showArrow && <span><i className="icon-arrow-right"></i></span>}
        </button>
    )
}
