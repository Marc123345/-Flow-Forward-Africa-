'use client'
import { useEffect, useRef } from "react"
import { donateOptions } from "@/lib/site"

/**
 * Donation chooser.
 *
 * Every Donate button opens this rather than linking straight out, because the
 * destination depends on whether the donor needs a Section 18A certificate
 * (the SARS tax-deductible receipt). Each answer goes to a different platform.
 *
 * An option with no URL yet is shown as "coming soon" and is not clickable —
 * better than sending someone to a dead link.
 */
export default function DonateModal({ open, onClose }) {
    const panelRef = useRef(null)
    const closeRef = useRef(null)

    useEffect(() => {
        if (!open) return
        const onKey = (e) => { if (e.key === "Escape") onClose() }
        document.addEventListener("keydown", onKey)
        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"
        closeRef.current?.focus()
        return () => {
            document.removeEventListener("keydown", onKey)
            document.body.style.overflow = previousOverflow
        }
    }, [open, onClose])

    if (!open) return null

    return (
        <div className="ffa-donate-modal" role="dialog" aria-modal="true" aria-labelledby="donate-modal-title" onClick={onClose}>
            <div className="ffa-donate-modal__panel" ref={panelRef} onClick={(e) => e.stopPropagation()}>
                <button
                    ref={closeRef}
                    type="button"
                    className="ffa-donate-modal__close"
                    onClick={onClose}
                    aria-label="Close"
                >
                    <i className="fa fa-times"></i>
                </button>

                <p className="ffa-donate-modal__eyebrow">Donate</p>
                <h3 className="ffa-donate-modal__title" id="donate-modal-title">
                    Do you need a Section&nbsp;18A certificate?
                </h3>
                <p className="ffa-donate-modal__intro">
                    A Section&nbsp;18A certificate lets South African taxpayers claim the donation as a
                    deduction. Your answer decides where we send you.
                </p>

                <div className="ffa-donate-modal__options">
                    {donateOptions.map((option) =>
                        option.url ? (
                            <a
                                key={option.key}
                                className="ffa-donate-option"
                                href={option.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onClose}
                            >
                                <span className="ffa-donate-option__label">{option.label}</span>
                                <span className="ffa-donate-option__hint">{option.hint}</span>
                                <span className="ffa-donate-option__arrow"><i className="icon-arrow-right"></i></span>
                            </a>
                        ) : (
                            <div key={option.key} className="ffa-donate-option ffa-donate-option--soon" aria-disabled="true">
                                <span className="ffa-donate-option__label">{option.label}</span>
                                <span className="ffa-donate-option__hint">{option.hint}</span>
                                <span className="ffa-donate-option__soon">Link coming soon</span>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}
