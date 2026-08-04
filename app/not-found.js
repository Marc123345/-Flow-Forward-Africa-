import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function NotFound() {
    return (
        <>
            <Layout breadcrumbTitle="Page Not Found">
                <section className="error-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="error-page__inner">
                                    <div className="error-page__title-box">
                                        <h2 className="error-page__title">404</h2>
                                    </div>
                                    <h3 className="error-page__tagline">We can&rsquo;t find that page</h3>
                                    <p className="error-page__text">
                                        The page you&rsquo;re looking for may have moved. Head back to the homepage, or
                                        read about <Link href="/initiatives">our initiatives</Link>.
                                    </p>
                                    <Link href="/" className="thm-btn error-page__btn">
                                        Back to home<span><i className="icon-arrow-right"></i></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
