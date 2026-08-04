'use client'
import { useEffect, useState } from "react"

/**
 * Full-screen loading screen: the logo, a 0–100 counter and a progress bar.
 *
 * It deliberately does NOT wait for the page to finish loading. `window.load`
 * does not fire until every image has arrived, and the home page carries a
 * dozen photographs — on mobile data that meant staring at this screen for
 * many seconds while content that was ready to show sat hidden behind it. The
 * loader now clears as soon as the document is usable and lets the imagery
 * stream in behind it.
 *
 * So the timings are ceilings, not targets:
 *   RELEASE_CAP  hand the page over by now, loaded or not
 *   HARD_CAP     dismiss unconditionally, even if a frame never fires
 *
 * The second one runs on a timer rather than an animation frame on purpose:
 * requestAnimationFrame is throttled — or never fires at all — in a
 * backgrounded tab, so the animation alone cannot be trusted to reach the end.
 * A <noscript> rule in the root layout covers the no-JavaScript case.
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
        const MIN_VISIBLE = reduceMotion ? 0 : 700
        // Ceilings, not targets — see the note above the component.
        const RELEASE_CAP = 2500
        const HARD_CAP = 4000
        const started = performance.now()
        let frame
        let loaded = false
        let done = false

        // Roughly how far along the browser actually is. Lazy images that have
        // not been reached yet are ignored, or they would peg this near zero
        // for the whole visit.
        const measured = () => {
            const images = Array.from(document.images).filter(
                (img) => img.loading !== "lazy" || img.complete
            )
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
            if (!done) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)

        // Finishing is driven by timers, not by the animation loop. Frames are
        // throttled on low-end and backgrounded mobile browsers, and when they
        // crawl the counter never reaches the end — so anything that waited on
        // the animation would leave the overlay sitting there.
        const finish = () => {
            setProgress(100)
            dismiss()
        }

        let releaseTimer
        const release = () => {
            if (loaded) return
            loaded = true
            const remaining = Math.max(0, MIN_VISIBLE - (performance.now() - started))
            releaseTimer = window.setTimeout(finish, remaining)
        }
        // The document being usable is enough; the photographs can follow.
        if (document.readyState !== "loading") release()
        else document.addEventListener("DOMContentLoaded", release, { once: true })
        window.addEventListener("load", release, { once: true })

        const cap = window.setTimeout(release, RELEASE_CAP)
        const hardCap = window.setTimeout(finish, HARD_CAP)

        return () => {
            cancelAnimationFrame(frame)
            window.clearTimeout(releaseTimer)
            window.clearTimeout(cap)
            window.clearTimeout(hardCap)
            window.removeEventListener("load", release)
            document.removeEventListener("DOMContentLoaded", release)
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
