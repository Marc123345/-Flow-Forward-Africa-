'use client'
import Link from "next/link"
import { useRef, useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { kilimanjaroImage } from "@/lib/site"
import DonateButton from "@/components/elements/DonateButton"
import VideoModal from "@/components/elements/VideoModal"

// The Flow Forward Africa film. It is no longer a hero background — the hero
// runs photographs — but "Watch the film" opens it full-screen with sound.
//
// `f-mp4` is deliberate: left to itself ImageKit content-negotiates and hands
// browsers a WebM variant that stalls before delivering any data. Pinning the
// container keeps playback reliable.
const FULL_VIDEO =
    "https://ik.imagekit.io/qcvroy8xpd/FINAL%20FFA%20VIDEO%20VERSION%20(1)%20(1)%20(1).mp4?tr=w-1280,q-70,f-mp4"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}

const slides = [
    {
        image: "/assets/images/ffa/hero-1.jpg",
        eyebrow: "Ending period poverty",
        title: <>Every girl<br /> deserves the freedom<br /> to thrive</>,
        cta: { label: "Donate", donate: true },
    },
    {
        image: kilimanjaroImage(1920, 800),
        eyebrow: "One mountain. Thousands of futures.",
        title: <>Every step is a step<br /> towards ending<br /> period poverty</>,
        cta: { label: "The Kilimanjaro Climb", href: "/kilimanjaro" },
    },
    {
        image: "/assets/images/ffa/hero-2.jpg",
        eyebrow: "Our vision",
        title: <>No girl should miss<br /> school because<br /> of her period</>,
        cta: { label: "Our Initiatives", href: "/initiatives" },
    },
]

export default function Banner() {
    const swiperRef = useRef(null)
    const [playerOpen, setPlayerOpen] = useState(false)

    // Stop the hero rotating behind the player while someone is watching.
    const openPlayer = () => {
        swiperRef.current?.autoplay?.stop()
        setPlayerOpen(true)
    }

    const closePlayer = () => {
        setPlayerOpen(false)
        swiperRef.current?.autoplay?.start()
    }

    return (
        <>
            <section className="main-slider">
                <Swiper
                    {...swiperOptions}
                    onSwiper={(swiper) => { swiperRef.current = swiper }}
                    className="main-slider__carousel"
                >
                    {slides.map(({ cta: { label: ctaLabel, ...ctaProps }, ...slide }, i) => (
                        <SwiperSlide key={i}>
                            <div className="swiper-slide">
                                <div className="image-layer" style={{ backgroundImage: `url(${slide.image})` }}></div>
                                <div className="image-layer__left-gradient"></div>
                                <div className="container">
                                    <div className="main-slider-content">
                                        <div className="main-slider-content__inner">
                                            <div className="sub-title">
                                                <h4>{slide.eyebrow}</h4>
                                            </div>
                                            <div className="big-title">
                                                <h2>{slide.title}</h2>
                                            </div>
                                            <div className="btn-box">
                                                {ctaProps.donate ? (
                                                    <DonateButton className="thm-btn">{ctaLabel}</DonateButton>
                                                ) : (
                                                    <Link {...ctaProps} className="thm-btn">
                                                        {ctaLabel}
                                                        <span><i className="icon-arrow-right"></i></span>
                                                    </Link>
                                                )}
                                                {/* On every slide, not just the first — whichever
                                                    one someone lands on should offer the film. */}
                                                <button
                                                    type="button"
                                                    className="ffa-watch-btn"
                                                    onClick={openPlayer}
                                                >
                                                    <span className="ffa-watch-btn__icon">
                                                        <i className="fa fa-play"></i>
                                                    </span>
                                                    Watch the film
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <ul className="banner-slider-nav-four">
                        <li className="banner-slider-control-four banner-slider-button-prev h1p" aria-label="Previous slide">
                            <span><i className="icon-arrow-right-two" aria-hidden="true"></i></span>
                        </li>
                        <li className="banner-slider-control-four banner-slider-button-next h1n" aria-label="Next slide">
                            <span><i className="icon-arrow-right-two" aria-hidden="true"></i></span>
                        </li>
                    </ul>
                </Swiper>
            </section>

            <VideoModal
                open={playerOpen}
                onClose={closePlayer}
                src={FULL_VIDEO}
                title="The Flow Forward Africa film"
            />
        </>
    )
}
