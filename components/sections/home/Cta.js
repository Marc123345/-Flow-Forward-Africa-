import Link from "next/link"
import DonateButton from "@/components/elements/DonateButton"
import LazyBg from "@/components/elements/LazyBg"

export default function Cta() {
    return (
        <>
            {/* Closing call to action */}
            <section className="cta-one">
                <LazyBg className="cta-one__bg" image="/assets/images/ffa/cta-wide.jpg" />
                <div className="container">
                    <div className="cta-one__inner">
                        <div className="cta-one__title-box sec-title-animation animation-style1">
                            <h2 className="cta-one__title title-animation">
                                Together, we can keep girls<br /> moving forward
                            </h2>
                        </div>
                        <div className="cta-one__btn-box">
                            <DonateButton className="cta-one__btn-1 thm-btn">Donate</DonateButton>
                            <Link href="/contact" className="cta-one__btn-2 thm-btn">
                                Get Involved<span><i className="icon-arrow-right"></i></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
