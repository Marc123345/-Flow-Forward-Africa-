import "public/assets/css/style.css"
import "public/assets/css/brand.css"
import 'swiper/css'
import "swiper/css/pagination"
import 'swiper/css/free-mode'
import { dmSans, libreBaskerville } from '@/lib/font'
import { site } from '@/lib/site'

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
            <body>{children}</body>
        </html>
    )
}
