'use client'
import { useEffect, useState } from "react"

/**
 * Full-screen loading screen: the logo, a 0–100 counter and a progress bar.
 *
 * The percentage is tied to real signals rather than a fixed animation — how
 * many images have finished decoding, plus the document's own readyState — so
 * it broadly tracks what the browser is actually doing. It eases towards that
 * target rather than jumping, and never runs ahead of 92% until the window
 * `load` event fires.
 *
 * Two safety valves, because a loader that gets stuck hides the whole site:
 *   - an 8 second cap forces it to finish regardless
 *   - a <noscript> rule in the root layout hides it when JS is unavailable
 *
 * Mounted in the root layout, so it appears once on first load and not again
 * on client-side navigation between pages.
 */
export default function SiteLoader() {
    const [progress, setProgress] = useState(0)
    const [phase, setPhase] = useState("loading") // loading -> leaving -> gone

    useEffect(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        // On a warm cache the page can be ready before the first frame, which
        // would flash "100%" and vanish. Hold it open long enough for the count
        // to actually read as a count.
        const MIN_VISIBLE = reduceMotion ? 0 : 900
        const started = performance.now()
        let frame
        let loaded = false
        let done = false

        // Roughly how far along the browser actually is.
        const measured = () => {
            const images = Array.from(document.images)
            const decoded = images.filter((img) => img.complete).length
            const imageRatio = images.length ? decoded / images.length : 1
            const docRatio =
                document.readyState === "complete" ? 1 :
                document.readyState === "interactive" ? 0.6 : 0.25
            return (docRatio * 0.4 + imageRatio * 0.6) * 100
        }

        const dismiss = () => {
            if (done) return
            done = true
            window.setTimeout(() => setPhase("leaving"), reduceMotion ? 0 : 200)
            window.setTimeout(() => setPhase("gone"), reduceMotion ? 100 : 820)
        }

        const tick = (now) => {
            const elapsed = now - started
            // Free to run to 100 only once loading finished AND the minimum
            // display time has passed; until then hold short of the end.
            const released = loaded && elapsed >= MIN_VISIBLE
            const ceiling = released ? 100 : 92
            setProgress((current) => {
                // Creep forward on time alone so it never looks frozen.
                const timeFloor = MIN_VISIBLE
                    ? Math.min(ceiling, (elapsed / MIN_VISIBLE) * 100)
                    : ceiling
                const target = Math.min(ceiling, Math.max(measured(), timeFloor))
                if (current >= target) return current
                const step = Math.max(released ? 2.5 : 0.6, (target - current) * 0.14)
                return Math.min(target, current + step)
            })
            if (released) {
                // Give the fill a frame at 100 before fading out.
                setProgress((current) => {
                    if (current >= 99.5) window.setTimeout(dismiss, 0)
                    return current
                })
            }
            if (!done) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)

        const onLoaded = () => { loaded = true }
        if (document.readyState === "complete") onLoaded()
        else window.addEventListener("load", onLoaded, { once: true })

        // Safety valves, because a loader that gets stuck hides the whole site.
        // The second one runs on a timer rather than a frame: requestAnimationFrame
        // is throttled (or never fires) in a backgrounded tab, so the animation
        // alone cannot be trusted to reach the end.
        const cap = window.setTimeout(onLoaded, 8000)
        const hardCap = window.setTimeout(() => {
            setProgress(100)
            dismiss()
        }, 10000)

        return () => {
            cancelAnimationFrame(frame)
            window.clearTimeout(cap)
            window.clearTimeout(hardCap)
            window.removeEventListener("load", onLoaded)
        }
    }, [])

    useEffect(() => {
        // Hold the page still while the loader is up.
        if (phase === "gone") return
        const previous = document.body.style.overflow
        document.body.style.overflow = "hidden"
        return () => { document.body.style.overflow = previous }
    }, [phase])

    if (phase === "gone") return null

    const shown = Math.round(progress)

    return (
        <div
            className={`ffa-loader${phase === "leaving" ? " ffa-loader--out" : ""}`}
            role="status"
            aria-live="polite"
            aria-label={`Loading, ${shown} percent`}
        >
            <div className="ffa-loader__inner">
                <img
                    className="ffa-loader__logo"
                    src="/assets/images/resources/logo-1.svg"
                    alt="Flow Forward Africa"
                />
                <div className="ffa-loader__track">
                    <span className="ffa-loader__fill" style={{ width: `${shown}%` }} />
                </div>
                <div className="ffa-loader__count">
                    <span>{shown}</span>%
                </div>
            </div>
        </div>
    )
}
