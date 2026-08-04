import Layout from "@/components/layout/Layout"
import { Band, Prose, SectionTitle, CtaBand, Split } from "@/components/elements/Blocks"
import { climb, donateLinkProps, kilimanjaroImage } from "@/lib/site"

export const metadata = {
    title: "The Kilimanjaro Climb",
    description:
        "One mountain. Thousands of futures. Flow Forward Africa is climbing Mount Kilimanjaro to fund menstrual products, education and outreach for girls across South Africa.",
}

export default function Kilimanjaro() {
    return (
        <>
            <Layout breadcrumbTitle="The Kilimanjaro Climb">
                <Band tight>
                    <SectionTitle
                        tagline="The Kilimanjaro Climb"
                        title={<>One Mountain.<br /> Thousands of Futures.</>}
                    />
                    <Prose>
                        <p>
                            At {climb.when}, Flow Forward Africa will take on one of Africa&rsquo;s
                            greatest challenges: climbing {climb.mountain}.
                        </p>
                        <p>
                            Standing at {climb.heightMetres.toLocaleString("en-ZA")} metres above sea level,
                            Kilimanjaro is a test of resilience, determination and purpose. For us, it represents
                            something even greater.
                        </p>
                        <p className="ffa-pullquote">
                            Every step we take is a step towards ending period poverty.
                        </p>
                        <p>
                            This expedition is more than a climb. It is a commitment to ensuring that girls across
                            South Africa have access to the menstrual products, education and support they need to
                            remain in school and reach their full potential.
                        </p>
                        <p>
                            Because while the summit may be our destination, lasting impact is our purpose.
                        </p>
                    </Prose>
                </Band>

                <Split
                    image={kilimanjaroImage(1200, 620)}
                    tagline="Why We Climb"
                    title={<>Turning awareness<br /> into action</>}
                >
                    <p>
                        Period poverty continues to prevent thousands of girls from participating fully in their
                        education. Without access to essential menstrual products, many girls miss valuable
                        classroom time, lose confidence and face unnecessary barriers to achieving their goals.
                    </p>
                    <p>
                        We believe that no girl&rsquo;s future should be defined by circumstances beyond her control.
                    </p>
                    <p>
                        Through this challenge, we are raising funds that will directly support menstrual hygiene
                        product distribution, educational workshops and community outreach programmes delivered
                        alongside our partners.
                    </p>
                    <p className="ffa-pullquote">
                        Every metre climbed represents another step towards creating opportunities for girls who
                        deserve every chance to succeed.
                    </p>
                </Split>

                <Band blush>
                    <SectionTitle
                        tagline="Turning Every Metre Into Meaning"
                        title={<>A new way to support<br /> meaningful change</>}
                    />
                    <Prose>
                        <p>
                            The climb has become a unique way for individuals and businesses to support meaningful
                            change.
                        </p>
                        <p>
                            Corporate partners are sponsoring every metre climbed, transforming each step up the
                            mountain into practical support for girls across South Africa.
                        </p>
                        <p>
                            Alongside our corporate sponsorships, individual supporters are helping us reach our
                            fundraising goals through our public campaign, proving that lasting impact is created
                            when communities come together around a shared purpose.
                        </p>
                        <p className="ffa-pullquote">
                            Together, we are aiming to raise more than funds. We are raising awareness, creating
                            conversations, and inspiring action.
                        </p>
                    </Prose>
                </Band>

                <Band>
                    <SectionTitle
                        tagline="Beyond the Summit"
                        title={<>The beginning of<br /> the next chapter</>}
                    />
                    <Prose>
                        <p>
                            Reaching the top of Kilimanjaro will mark the end of the expedition. It will also mark
                            the beginning of the next chapter for Flow Forward Africa.
                        </p>
                        <p>
                            The funds raised will help us expand our outreach programmes, provide menstrual hygiene
                            products to more girls, strengthen our educational workshops, and build partnerships
                            with communities that are creating lasting change from within.
                        </p>
                        <p>
                            Our vision extends far beyond one mountain. We are working towards a future where no
                            girl misses school because of her period, where menstrual health is discussed openly and
                            without stigma, and where every young woman has the opportunity to pursue her education
                            with confidence and dignity.
                        </p>

                        <h3>Climb With Us</h3>
                        <p>
                            You don&rsquo;t need to stand on the slopes of Kilimanjaro to be part of this journey.
                        </p>
                        <p>
                            You can climb with us by becoming a corporate sponsor, supporting our fundraising
                            campaign, partnering with Flow Forward Africa, or sharing our mission with your
                            community.
                        </p>
                        <p>
                            Every contribution, every conversation and every act of support helps move us closer to
                            a future where period poverty no longer limits a girl&rsquo;s potential.
                        </p>
                        <p className="ffa-pullquote">
                            Together, we can turn one climb into thousands of opportunities. Together, we can help
                            every girl keep moving forward.
                        </p>
                    </Prose>
                </Band>

                <CtaBand
                    title={<>Turn every step<br /> into opportunity</>}
                    primary={{ label: "Support the Climb", ...donateLinkProps }}
                    secondary={{ label: "Become a Sponsor", href: "/contact" }}
                    image={kilimanjaroImage(1200, 620)}
                />
            </Layout>
        </>
    )
}
