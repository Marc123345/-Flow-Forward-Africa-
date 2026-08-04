import Link from "next/link"
import DonateButton from "./DonateButton"

/**
 * Small, reusable content blocks used across the inner pages so every page
 * shares the same rhythm. All of them lean on the template's existing classes
 * plus the additions in public/assets/css/brand.css.
 */

/** Section eyebrow + heading. `align` is "left" or "center". */
export function SectionTitle({ tagline, title, align = "center", className = "" }) {
    const alignCls = align === "left" ? "text-left" : "text-center"
    const animCls = align === "left" ? "animation-style2" : "animation-style1"
    return (
        <div className={`section-title ${alignCls} sec-title-animation ${animCls} ${className}`}>
            {tagline && (
                <div className="section-title__tagline-box">
                    <span className="section-title__tagline">{tagline}</span>
                </div>
            )}
            <h2 className="section-title__title title-animation">{title}</h2>
        </div>
    )
}

/** A plain band of copy, optionally on the blush background. */
export function Band({ children, blush = false, tight = false, className = "" }) {
    return (
        <section className={`ffa-band${blush ? " ffa-band--blush" : ""}${tight ? " ffa-band--tight" : ""} ${className}`}>
            <div className="container">{children}</div>
        </section>
    )
}

/** A centred column of long-form copy. */
export function Prose({ children, width = 8 }) {
    return (
        <div className="row justify-content-center">
            <div className={`col-xl-${width} col-lg-10`}>
                <div className="ffa-prose">{children}</div>
            </div>
        </div>
    )
}

/** The template's pill button. Extra props (target/rel) pass straight through,
 *  so an external Donate link can open in a new tab. */
export function Btn({ href, children, className = "thm-btn", ...rest }) {
    return (
        <Link href={href} className={className} {...rest}>
            {children}<span><i className="icon-arrow-right"></i></span>
        </Link>
    )
}

/** Three (or more) icon cards — the feature-one layout from the template. */
export function IconCards({ items }) {
    const variants = ["", " feature-one__single-2", " feature-one__single-3"]
    const anims = ["fadeInUp", "fadeInDown", "fadeInUp"]
    return (
        <section className="feature-one">
            <div className="container">
                <div className="row">
                    {items.map((item, i) => (
                        <div
                            key={item.title}
                            className={`col-xl-4 col-lg-4 wow ${anims[i % anims.length]}`}
                            data-wow-delay={`${(i + 1) * 100}ms`}
                        >
                            <div className={`feature-one__single${variants[i % variants.length]}`}>
                                <div className="feature-one__icon">
                                    <span className={item.icon}></span>
                                </div>
                                <div className="feature-one__content">
                                    <h4>{item.href ? <Link href={item.href}>{item.title}</Link> : item.title}</h4>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

/** Full-width closing call to action. */
export function CtaBand({ title, primary, secondary, image = "/assets/images/ffa/cta-wide.jpg" }) {
    return (
        <section className="cta-one">
            <div className="cta-one__bg" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="container">
                <div className="cta-one__inner">
                    <div className="cta-one__title-box sec-title-animation animation-style1">
                        <h2 className="cta-one__title title-animation">{title}</h2>
                    </div>
                    <div className="cta-one__btn-box">
                        {primary && (primary.donate
                            ? <DonateButton className="cta-one__btn-1 thm-btn">{primary.label}</DonateButton>
                            : (() => { const { label, ...p } = primary; return <Btn {...p} className="cta-one__btn-1 thm-btn">{label}</Btn> })())}
                        {secondary && (secondary.donate
                            ? <DonateButton className="cta-one__btn-2 thm-btn">{secondary.label}</DonateButton>
                            : (() => { const { label, ...s } = secondary; return <Btn {...s} className="cta-one__btn-2 thm-btn">{label}</Btn> })())}
                    </div>
                </div>
            </div>
        </section>
    )
}

/** Image-left / copy-right (or reversed) split section. */
export function Split({ image, imageAlt = "", tagline, title, children, reverse = false, cta }) {
    const media = (
        <div className={`col-xl-6 col-lg-6 wow ${reverse ? "slideInRight" : "slideInLeft"}`} data-wow-delay="100ms" data-wow-duration="2500ms">
            <div className="ffa-split__media">
                <img className="ffa-photo" src={image} alt={imageAlt} loading="lazy" decoding="async" />
            </div>
        </div>
    )
    const copy = (
        <div className={`col-xl-6 col-lg-6 wow ${reverse ? "fadeInLeft" : "fadeInRight"}`} data-wow-delay="300ms">
            <div className="ffa-split__copy">
                <SectionTitle tagline={tagline} title={title} align="left" />
                <div className="ffa-prose">{children}</div>
                {cta && (
                    <div className="ffa-split__btn">
                        <Btn href={cta.href}>{cta.label}</Btn>
                    </div>
                )}
            </div>
        </div>
    )
    return (
        <section className="ffa-split">
            <div className="container">
                <div className="row align-items-center">
                    {reverse ? <>{copy}{media}</> : <>{media}{copy}</>}
                </div>
            </div>
        </section>
    )
}
