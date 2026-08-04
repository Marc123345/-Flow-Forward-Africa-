'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { donateHref } from "@/lib/site"

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
        cta: { label: "Donate", href: donateHref },
    },
    {
        image: "/assets/images/ffa/hero-3.jpg",
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
    return (
        <>
            <section className="main-slider">
                <Swiper {...swiperOptions} className="main-slider__carousel">
                    {slides.map((slide, i) => (
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
                                                <Link href={slide.cta.href} className="thm-btn">
                                                    {slide.cta.label}
                                                    <span><i className="icon-arrow-right"></i></span>
                                                </Link>
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
        </>
    )
}
