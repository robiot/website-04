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
                description="Hello, I'm Elliot, a web and software developer"
                openGraph={{
                    url: "https://robiot.dev",
                    // title: "Open Graph Title",
                    // description: "Open Graph Description",
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
            <Experience />
        </Layout>
    );
};

export default IndexPage;
