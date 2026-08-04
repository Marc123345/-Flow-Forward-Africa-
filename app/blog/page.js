import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { posts } from "@/lib/posts"
import { CtaBand } from "@/components/elements/Blocks"

export const metadata = {
    title: "Blog",
    description:
        "Stories and thinking from Flow Forward Africa on period poverty, listening to communities and the road to Kilimanjaro.",
}

export default function Blog() {
    return (
        <>
            <Layout breadcrumbTitle="Blog">
                <section className="blog-page">
                    <div className="container">
                        <div className="row justify-content-center">
                            {posts.map((post, i) => (
                                <div
                                    key={post.slug}
                                    className={`col-xl-5 col-lg-6 col-md-6 wow ${i % 2 === 0 ? "fadeInLeft" : "fadeInRight"}`}
                                    data-wow-delay={`${(i + 1) * 100}ms`}
                                >
                                    <div className="blog-one__single">
                                        <div className="blog-one__img-box">
                                            <div className="blog-one__img">
                                                <img className="ffa-photo" src={post.image} alt="" />
                                            </div>
                                            <div className="blog-one__date">
                                                <p>
                                                    {post.dateLabel.split(" ")[0]}
                                                    <span><br />{post.dateLabel.split(" ")[1]}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="blog-one__content">
                                            <h4 className="blog-one__title">
                                                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                            </h4>
                                            <p>{post.excerpt}</p>
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

                <CtaBand
                    title={<>Be part of the<br /> next chapter</>}
                    primary={{ label: "Donate", donate: true }}
                    secondary={{ label: "Get Involved", href: "/contact" }}
                />
            </Layout>
        </>
    )
}
