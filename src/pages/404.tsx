import { Layout } from "@components/Assembled/Layout/Layout";
import { PrimaryText } from "@lib/constants";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const IndexPage: NextPage = () => {
    return (
        <Layout>
            <NextSeo
                title="robiot - Page not found"
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

            {/* <Piano /> */}
        </Layout>
    );
};

export default IndexPage;
