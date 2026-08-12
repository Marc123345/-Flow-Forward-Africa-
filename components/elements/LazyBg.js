'use client'
import { useEffect, useRef, useState } from "react"

/**
 * A decorative background image that is only fetched once it is near the
 * viewport.
 *
 * `loading="lazy"` only works on <img>. A CSS background is fetched the moment
 * the element is in the DOM, wherever it sits on the page, so the two big
 * bands near the bottom of the home page were competing with the hero for
 * bandwidth on the first paint. On a mobile connection that is the difference
 * between the page appearing and the page appearing to hang.
 *
 * Falls back to loading immediately where IntersectionObserver is unavailable,
 * so an old browser gets a slower page rather than no image at all.
 */
export default function LazyBg({ image, className, rootMargin = "300px", ...rest }) {
    const ref = useRef(null)
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (typeof IntersectionObserver === "undefined") {
            setShow(true)
            return
        }
        const el = ref.current
        if (!el) return

        const io = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting)) {
                    setShow(true)
                    io.disconnect()
                }
            },
            // Start the fetch slightly before it scrolls into view, so the
            // image is there by the time it is actually looked at.
            { rootMargin }
        )
        io.observe(el)
        return () => io.disconnect()
    }, [rootMargin])

    return (
        <div
            ref={ref}
            className={className}
            style={show ? { backgroundImage: `url(${image})` } : undefined}
            {...rest}
        />
    )
}
