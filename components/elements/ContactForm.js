'use client'
import { useState } from "react"
import Link from "next/link"
import { site } from "@/lib/site"

/**
 * Contact form.
 *
 * Set NEXT_PUBLIC_CONTACT_FORM_ENDPOINT (e.g. a Formspree / Getform / Basin
 * endpoint) in .env.local and this posts to it. With no endpoint configured
 * the form is not shown at all — we surface the real email address instead,
 * rather than pretending to send a message that goes nowhere.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT

const interests = [
    "Collaborate with us",
    "Volunteer",
    "Sponsor an initiative",
    "Corporate partnership",
    "Kilimanjaro sponsorship",
    "Make a donation",
    "Something else",
]

export default function ContactForm() {
    const [status, setStatus] = useState("idle")
    const [error, setError] = useState("")

    if (!ENDPOINT) {
        return (
            <div className="contact-one__inner">
                <div className="ffa-prose">
                    <h3>Talk to us</h3>
                    <p>
                        The quickest way to reach Flow Forward Africa is by email. Tell us a little about who you
                        are and how you&rsquo;d like to be involved &mdash; whether that&rsquo;s collaborating, volunteering,
                        sponsoring an initiative or making a donation.
                    </p>
                    <p>
                        <Link href={`mailto:${site.email}`} className="thm-btn">
                            Email {site.email}<span><i className="icon-arrow-right"></i></span>
                        </Link>
                    </p>
                </div>
            </div>
        )
    }

    async function handleSubmit(event) {
        event.preventDefault()
        setStatus("sending")
        setError("")
        const form = event.currentTarget
        try {
            const response = await fetch(ENDPOINT, {
                method: "POST",
                headers: { Accept: "application/json" },
                body: new FormData(form),
            })
            if (!response.ok) throw new Error(`Request failed (${response.status})`)
            form.reset()
            setStatus("sent")
        } catch (err) {
            setError(err.message)
            setStatus("error")
        }
    }

    return (
        <div className="contact-one__inner">
            <div className="section-title text-left sec-title-animation animation-style2">
                <div className="section-title__tagline-box">
                    <span className="section-title__tagline">Get Involved</span>
                </div>
                <h2 className="section-title__title title-animation">
                    Tell us how you&rsquo;d<br /> like to help
                </h2>
            </div>
            <form className="contact-one__form" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <h4 className="contact-one__input-title">Your name</h4>
                        <div className="contact-one__input-box">
                            <div className="contact-one__input-icon"><span className="icon-user"></span></div>
                            <input type="text" name="name" placeholder="Name" required />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <h4 className="contact-one__input-title">Email address</h4>
                        <div className="contact-one__input-box">
                            <div className="contact-one__input-icon"><span className="icon-envelope"></span></div>
                            <input type="email" name="email" placeholder="Email address" required />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <h4 className="contact-one__input-title">Organisation (optional)</h4>
                        <div className="contact-one__input-box">
                            <div className="contact-one__input-icon"><span className="icon-hand"></span></div>
                            <input type="text" name="organisation" placeholder="School, business or organisation" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <h4 className="contact-one__input-title">I&rsquo;d like to</h4>
                        <div className="contact-one__input-box">
                            <div className="contact-one__input-icon"><span className="icon-love"></span></div>
                            <select name="interest" defaultValue={interests[0]}>
                                {interests.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <h4 className="contact-one__input-title">Your message</h4>
                        <div className="contact-one__input-box">
                            <div className="contact-one__input-icon"><span className="icon-comment"></span></div>
                            <textarea name="message" placeholder="Tell us a little about how you'd like to be involved" required></textarea>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="contact-one__btn-box">
                            <button type="submit" className="thm-btn contact-one__btn" disabled={status === "sending"}>
                                {status === "sending" ? "Sending…" : "Send message"}
                                <span><i className="icon-arrow-right"></i></span>
                            </button>
                        </div>
                        <div aria-live="polite" style={{ marginTop: "20px" }}>
                            {status === "sent" && (
                                <p style={{ color: "var(--anity-extra)" }}>
                                    Thank you — your message is on its way. We&rsquo;ll be in touch soon.
                                </p>
                            )}
                            {status === "error" && (
                                <p style={{ color: "var(--anity-base)" }}>
                                    Sorry, that didn&rsquo;t send{error ? ` (${error})` : ""}. Please email us directly at{" "}
                                    <Link href={`mailto:${site.email}`}>{site.email}</Link>.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
