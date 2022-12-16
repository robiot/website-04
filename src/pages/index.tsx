import { Layout } from "@components/Assembled/Layout/Layout";
import { About } from "@components/Fragments/About/About";
import { Home } from "@components/Fragments/Home/Home";
import { Skills } from "@components/Fragments/Skills/Skills";
import { PrimaryTextCol1 } from "@utils/constants";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const IndexPage: NextPage = () => {
    return (
        <Layout>
            <NextSeo
                title="robiot - Home"
                description={PrimaryTextCol1}
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

            <Home />
            <About />
            <Skills />
            {/*<Skills />
            <Experience />
            <Projects /> */}
        </Layout>
    );
};

export default IndexPage;
