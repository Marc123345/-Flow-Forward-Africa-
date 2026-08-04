'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { climb } from "@/lib/site"

/**
 * The Kilimanjaro campaign block on the home page.
 *
 * Copy sits on the left, a carousel of climb photography on the right.
 * Slides carry their own credit line because three of the four photographs are
 * Creative Commons BY-SA and require attribution — see IMAGE-CREDITS.md.
 */
const slides = [
    {
        image: "/assets/images/ffa/climb-1.jpg",
        caption: "Reaching Gilman's Point, 5,681 m",
        credit: null,
    },
    {
        image: "/assets/images/ffa/climb-2.jpg",
        caption: "On the route toward the Lava Tower",
        credit: "Masa Sakano, CC BY-SA 2.0",
    },
    {
        image: "/assets/images/ffa/climb-3.jpg",
        caption: "The team at the higher camps",
        credit: "FokshaAnatolii, CC BY-SA 4.0",
    },
    {
        image: "/assets/images/ffa/climb-4.jpg",
        caption: "Every load carried, every metre earned",
        credit: "Sergei Andreichuk, CC BY-SA 4.0",
    },
]

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: { delay: 5500, disableOnInteraction: false },
    navigation: { nextEl: ".ffa-climb-next", prevEl: ".ffa-climb-prev" },
    pagination: { el: ".ffa-climb-pagination", clickable: true },
}

export default function Kilimanjaro() {
    return (
        <>
            <section className="ffa-climb">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="200ms">
                            <div className="ffa-climb__copy">
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline">The Kilimanjaro Climb</span>
                                    </div>
                                    <h2 className="section-title__title title-animation">
                                        One Mountain.<br /> Thousands of Futures.
                                    </h2>
                                </div>
                                <p className="ffa-climb__text">
                                    At {climb.when}, Flow Forward Africa will take on one of Africa&rsquo;s greatest
                                    challenges: climbing {climb.mountain}. Standing at{" "}
                                    {climb.heightMetres.toLocaleString("en-ZA")} metres above sea level, it is a test
                                    of resilience, determination and purpose. For us, it represents something even
                                    greater.
                                </p>
                                <ul className="ffa-list">
                                    <li>
                                        <strong>Every metre climbed</strong>
                                        Corporate partners are sponsoring each metre, turning every step up the
                                        mountain into practical support for girls across South Africa.
                                    </li>
                                    <li>
                                        <strong>Every contribution counts</strong>
                                        Individual supporters are helping us reach our fundraising goals through
                                        our public campaign.
                                    </li>
                                </ul>
                                <div className="ffa-climb__btn">
                                    <Link href="/kilimanjaro" className="thm-btn">
                                        Climb With Us<span><i className="icon-arrow-right"></i></span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 wow fadeInRight" data-wow-delay="300ms">
                            <div className="ffa-climb__media">
                                <Swiper {...swiperOptions} className="ffa-climb__carousel">
                                    {slides.map((slide) => (
                                        <SwiperSlide key={slide.image}>
                                            <figure className="ffa-climb__slide">
                                                <img src={slide.image} alt={slide.caption} />
                                                <figcaption>
                                                    <span className="ffa-climb__caption">{slide.caption}</span>
                                                    {slide.credit && (
                                                        <span className="ffa-climb__credit">{slide.credit}</span>
                                                    )}
                                                </figcaption>
                                            </figure>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                <div className="ffa-climb__controls">
                                    <button type="button" className="ffa-climb__arrow ffa-climb-prev" aria-label="Previous photo">
                                        <i className="icon-arrow-right-two"></i>
                                    </button>
                                    <div className="ffa-climb__pagination ffa-climb-pagination"></div>
                                    <button type="button" className="ffa-climb__arrow ffa-climb-next" aria-label="Next photo">
                                        <i className="icon-arrow-right-two"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
