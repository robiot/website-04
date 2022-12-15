import { Layout } from "@components/Assembled/Layout/Layout";
import { Home } from "@components/Fragments/Home/Home";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { PrimaryText } from "src/utils/constants";

const IndexPage: NextPage = () => {
    return (
        <Layout>
            <NextSeo
                title="robiot - Home"
                description={PrimaryText}
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
            {/* <About />
            <Skills />
            <Experience />
            <Projects /> */}
        </Layout>
    );
};

export default IndexPage;
