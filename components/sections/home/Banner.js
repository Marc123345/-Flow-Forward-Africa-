'use client'
import Link from "next/link"
import { useRef, useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { donateLinkProps, kilimanjaroImage } from "@/lib/site"
import VideoModal from "@/components/elements/VideoModal"

// The Flow Forward Africa film, played as the background of the opening hero
// slide. Served through ImageKit's video transform — sized and re-encoded for a
// background loop, which takes it from 23.5 MB down to ~11 MB. It sits under
// the rose gradient, so the lower bitrate isn't visible.
//
// `f-mp4` is deliberate: left to itself ImageKit content-negotiates and hands
// browsers a WebM variant that stalls before it delivers any data. Pinning the
// container keeps playback reliable.
const VIDEO_BASE =
    "https://ik.imagekit.io/qcvroy8xpd/FINAL%20FFA%20VIDEO%20VERSION%20(1)%20(1)%20(1).mp4"

// Background loop: smaller and softer, it sits under the gradient.
const HERO_VIDEO = `${VIDEO_BASE}?tr=w-1280,q-50,f-mp4`
// What people actually watch, in the player.
const FULL_VIDEO = `${VIDEO_BASE}?tr=w-1280,q-70,f-mp4`

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
        video: HERO_VIDEO,
        poster: "/assets/images/ffa/hero-1.jpg",
        eyebrow: "Ending period poverty",
        title: <>Every girl<br /> deserves the freedom<br /> to thrive</>,
        cta: { label: "Donate", ...donateLinkProps },
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
    const videoRef = useRef(null)
    const [playerOpen, setPlayerOpen] = useState(false)

    const openPlayer = () => {
        videoRef.current?.pause()
        setPlayerOpen(true)
    }

    const closePlayer = () => {
        setPlayerOpen(false)
        videoRef.current?.play().catch(() => {})
    }

    // Hold the hero on the film while it plays rather than sliding away from
    // it after seven seconds; resume rotating once the viewer moves on.
    //
    // Synced on transition END, not on slideChange: in loop mode Swiper reports
    // a transient index while it repositions, which paused the film a few
    // seconds in and never resumed it.
    const handleInit = (swiper) => {
        if (swiper.realIndex !== 0) return
        swiper.autoplay?.stop()
        videoRef.current?.play().catch(() => {})
    }

    const syncVideo = (swiper) => {
        const video = videoRef.current
        if (!video) return
        if (swiper.realIndex === 0) {
            swiper.autoplay?.stop()
            video.play().catch(() => {
                // Autoplay can be refused (low-power mode, data saver). The
                // poster frame stands in for it.
            })
        } else {
            video.pause()
            swiper.autoplay?.start()
        }
    }

    return (
        <>
            <section className="main-slider">
                <Swiper
                    {...swiperOptions}
                    onSwiper={handleInit}
                    onSlideChangeTransitionEnd={syncVideo}
                    className="main-slider__carousel"
                >
                    {slides.map(({ cta: { label: ctaLabel, ...ctaProps }, ...slide }, i) => (
                        <SwiperSlide key={i}>
                            <div className="swiper-slide">
                                {slide.video ? (
                                    <video
                                        ref={videoRef}
                                        className="main-slider__video"
                                        src={slide.video}
                                        poster={slide.poster}
                                        preload="metadata"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <div className="image-layer" style={{ backgroundImage: `url(${slide.image})` }}></div>
                                )}
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
                                                <Link {...ctaProps} className="thm-btn">
                                                    {ctaLabel}
                                                    <span><i className="icon-arrow-right"></i></span>
                                                </Link>
                                                {slide.video && (
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
                                                )}
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
