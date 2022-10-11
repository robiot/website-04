import { Layout } from "@components/Assembled/Layout/Layout";
import { About } from "@components/Fragments/About/About";
import { Experience } from "@components/Fragments/Experience/Experience";
import { Home } from "@components/Fragments/Home/Home";
import { Skills } from "@components/Fragments/Skills/Skills";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const IndexPage: NextPage = () => {
    return (
        <Layout>
            <NextSeo
                title="robiot - Home"
                description="About me"
                openGraph={{
                    url: "https://robiot.dev",
                    title: "Open Graph Title",
                    description: "Open Graph Description",
                    images: [
                        {
                            url: "//og/ogimage.png",
                            width: 800,
                            height: 600,
                            alt: "Og Image Alt",
                            type: "image/png",
                        },
                    ],
                    site_name: "SiteName",
                }}
                twitter={{
                    handle: "@handle",
                    site: "@site",
                    cardType: "summary_large_image",
                }}
            />
            <Home />
            <About />
            <Skills />
            <Experience />
        </Layout>
    );
};

export default IndexPage;
