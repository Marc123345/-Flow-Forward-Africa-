import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home/Banner"
import Pillars from "@/components/sections/home/Pillars"
import About from "@/components/sections/home/About"
import Kilimanjaro from "@/components/sections/home/Kilimanjaro"
import GetInvolved from "@/components/sections/home/GetInvolved"
import Blog from "@/components/sections/home/Blog"
import Cta from "@/components/sections/home/Cta"

export default function Home() {
    return (
        <>
            <Layout>
                <Banner />
                <Pillars />
                <About />
                <Kilimanjaro />
                <GetInvolved />
                <Blog />
                <Cta />
            </Layout>
        </>
    )
}
