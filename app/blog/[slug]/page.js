import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { notFound } from "next/navigation"
import { posts, getPost } from "@/lib/posts"
import { CtaBand } from "@/components/elements/Blocks"

export function generateStaticParams() {
    return posts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }) {
    const post = getPost(params.slug)
    if (!post) return {}
    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
        },
    }
}

function Block({ block, index }) {
    if (block.type === "h3") return <h3 key={index}>{block.text}</h3>
    if (block.type === "quote") return <p key={index} className="ffa-pullquote">{block.text}</p>
    return <p key={index}>{block.text}</p>
}

export default function BlogPost({ params }) {
    const post = getPost(params.slug)
    if (!post) notFound()

    const others = posts.filter((p) => p.slug !== post.slug)

    return (
        <>
            <Layout breadcrumbTitle="Blog">
                <section className="blog-details">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-9 col-lg-10">
                                <div className="blog-details__left">
                                    <div className="blog-details__img">
                                        <img className="ffa-photo" src={post.image} alt="" loading="lazy" decoding="async" />
                                    </div>
                                    <div className="blog-details__content">
                                        <ul className="blog-details__meta list-unstyled">
                                            <li>
                                                <div className="icon"><span className="icon-user"></span></div>
                                                <span>By {post.author}</span>
                                            </li>
                                            <li>
                                                <div className="icon"><span className="icon-file"></span></div>
                                                <span>{post.category}</span>
                                            </li>
                                            <li>
                                                <div className="icon"><span className="icon-calender"></span></div>
                                                <time dateTime={post.date}>
                                                    {new Date(post.date).toLocaleDateString("en-ZA", {
                                                        day: "numeric",
                                                        month: "long",
                                                        year: "numeric",
                                                    })}
                                                </time>
                                            </li>
                                        </ul>
                                        <h3 className="blog-details__title">{post.title}</h3>
                                        <div className="ffa-prose">
                                            {post.body.map((block, i) => (
                                                <Block key={i} block={block} index={i} />
                                            ))}
                                        </div>
                                    </div>


                                    {others.length > 0 && (
                                        <div className="ffa-prose" style={{ marginTop: "50px" }}>
                                            <h4>Read next</h4>
                                            {others.map((other) => (
                                                <p key={other.slug}>
                                                    <Link href={`/blog/${other.slug}`}>{other.title}</Link>
                                                </p>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <CtaBand
                    title={<>Help us keep girls<br /> in the classroom</>}
                    primary={{ label: "Donate", donate: true }}
                    secondary={{ label: "Get Involved", href: "/contact" }}
                />
            </Layout>
        </>
    )
}
