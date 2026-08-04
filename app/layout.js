import "public/assets/css/style.css"
import "public/assets/css/brand.css"
import 'swiper/css'
import "swiper/css/pagination"
import 'swiper/css/free-mode'
import { dmSans, libreBaskerville } from '@/lib/font'
import { site } from '@/lib/site'
import SiteLoader from '@/components/elements/SiteLoader'

export const metadata = {
    metadataBase: new URL(site.url),
    title: {
        default: `${site.name} — ${site.tagline}`,
        template: `%s | ${site.name}`,
    },
    description: site.description,
    icons: {
        icon: '/assets/images/favicons/favicon.svg',
    },
    openGraph: {
        title: `${site.name} — ${site.tagline}`,
        description: site.description,
        url: site.url,
        siteName: site.name,
        locale: 'en_ZA',
        type: 'website',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en-ZA" className={`${dmSans.variable} ${libreBaskerville.variable}`}>
            <head>
                {/* The first hero frame is a CSS background applied inline, so
                    the browser would not discover it until stylesheets and
                    scripts had been dealt with. It is the largest thing on the
                    page and the one people are waiting for — start it early. */}
                <link
                    rel="preload"
                    as="image"
                    href="/assets/images/ffa/hero-1.jpg"
                    fetchPriority="high"
                />
                {/* Without JavaScript the loader can never dismiss itself, so
                    make sure it is simply not shown. */}
                <noscript>
                    <style>{`.ffa-loader{display:none!important}`}</style>
                </noscript>
            </head>
            <body>
                <SiteLoader />
                {children}
            </body>
        </html>
    )
}
