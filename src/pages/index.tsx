import { Layout } from "@components/Assembled/Layout/Layout";
import { About } from "@components/Fragments/About/About";
import { Home } from "@components/Fragments/Home/Home";
import { Skills } from "@components/Fragments/Skills/Skills";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const IndexPage: NextPage = () => {
    return (
        <Layout>
            <NextSeo title="robiot - Home" description="About me" />
            <Home />
            <About />
            {/* <Skills /> */}
        </Layout>
    );
};

export default IndexPage;
