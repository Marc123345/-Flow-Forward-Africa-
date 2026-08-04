'use client'
import { useEffect, useRef } from "react"

/**
 * Full-screen player for the Flow Forward Africa film.
 *
 * The hero runs the film muted as a background loop; this is how someone
 * actually watches it — with sound, native controls, scrubbing and fullscreen.
 * Written by hand rather than pulling in a modal-video dependency.
 */
export default function VideoModal({ open, onClose, src, title = "Flow Forward Africa" }) {
    const videoRef = useRef(null)
    const closeRef = useRef(null)

    useEffect(() => {
        if (!open) return

        const onKey = (e) => { if (e.key === "Escape") onClose() }
        document.addEventListener("keydown", onKey)

        // Stop the page behind from scrolling while the player is up.
        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"

        closeRef.current?.focus()
        const video = videoRef.current
        if (video) {
            video.currentTime = 0
            video.muted = false
            video.play().catch(() => {
                // If the browser refuses sound-on playback, fall back to muted
                // so something still happens; the controls do the rest.
                video.muted = true
                video.play().catch(() => {})
            })
        }

        return () => {
            document.removeEventListener("keydown", onKey)
            document.body.style.overflow = previousOverflow
            video?.pause()
        }
    }, [open, onClose])

    if (!open) return null

    return (
        <div
            className="ffa-video-modal"
            role="dialog"
            aria-modal="true"
            aria-label={title}
            onClick={onClose}
        >
            <button
                ref={closeRef}
                type="button"
                className="ffa-video-modal__close"
                onClick={onClose}
                aria-label="Close video"
            >
                <i className="fa fa-times"></i>
            </button>
            <div className="ffa-video-modal__frame" onClick={(e) => e.stopPropagation()}>
                <video
                    ref={videoRef}
                    src={src}
                    controls
                    playsInline
                    preload="metadata"
                />
            </div>
        </div>
    )
}
