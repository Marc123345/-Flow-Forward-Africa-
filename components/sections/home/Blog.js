import Link from "next/link"
import { posts } from "@/lib/posts"

export default function Blog() {
    return (
        <>
            {/* Latest writing */}
            <section className="blog-one">
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">From the Blog</span>
                        </div>
                        <h2 className="section-title__title title-animation">
                            Listening First,<br /> Then Building Together
                        </h2>
                    </div>
                    <div className="row justify-content-center">
                        {posts.map((post, i) => (
                            <div
                                key={post.slug}
                                className={`col-xl-5 col-lg-6 col-md-6 wow ${i === 0 ? "fadeInLeft" : "fadeInRight"}`}
                                data-wow-delay={`${(i + 1) * 100}ms`}
                            >
                                <div className="blog-one__single">
                                    <div className="blog-one__img-box">
                                        <div className="blog-one__img">
                                            <img className="ffa-photo" src={post.image} alt="" loading="lazy" decoding="async" />
                                        </div>
                                        <div className="blog-one__date">
                                            <p>{post.dateLabel.split(" ")[0]}<span><br />{post.dateLabel.split(" ")[1]}</span></p>
                                        </div>
                                    </div>
                                    <div className="blog-one__content">
                                        <h4 className="blog-one__title">
                                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                        </h4>
                                        <div className="blog-one__btn-box">
                                            <Link href={`/blog/${post.slug}`} className="blog-one__btn thm-btn">
                                                Read More<span><i className="icon-arrow-right"></i></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
