import Link from "next/link"

export default function Menu() {
    return (
        <>
            <ul className="main-menu__list">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li className="dropdown">
                    <Link href="/about">About</Link>
                    <ul className="shadow-box">
                        <li><Link href="/about">About Flow Forward Africa</Link></li>
                        <li><Link href="/founder">Meet the Founder</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="/initiatives">Initiatives</Link>
                </li>
                <li>
                    <Link href="/kilimanjaro">Kilimanjaro Climb</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/contact">Get Involved</Link>
                </li>
            </ul>
        </>
    )
}
