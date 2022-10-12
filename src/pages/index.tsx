import { Layout } from "@components/Assembled/Layout/Layout";
import { About } from "@components/Fragments/About/About";
import { Experience } from "@components/Fragments/Experience/Experience";
import { Home } from "@components/Fragments/Home/Home";
import { Projects } from "@components/Fragments/Projects/Projects";
import { Skills } from "@components/Fragments/Skills/Skills";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const IndexPage: NextPage = () => {
    return (
        <Layout>
            <NextSeo
                title="robiot - Home"
                description="Hello, I'm Elliot (also called Robiot online), a self-taught
                passionate developer with lots of experience in both
                web- and software development. I've been building stuff
                since early 2021. Many of my projects are uploaded to
                Github, where some have gained lots of attention.
                Thanks!"
                openGraph={{
                    url: "https://robiot.dev",
                    type: "image/png",
                    images: [
                        {
                            url: "/img/og/ogimage.png",
                            width: 1406,
                            height: 803,
                            alt: "Image",
                            type: "image/png",
                        },
                    ],
                    site_name: "Robiot",
                }}
                twitter={{
                    handle: "@handle",
                    site: "@site",
                    cardType: "summary_large_image",
                }}
            />

            {/* <div style={{ height: "150vh" }}>aa</div> */}
            <Home />
            <About />
            <Skills />
            <Experience />
            <Projects />
        </Layout>
    );
};

export default IndexPage;
