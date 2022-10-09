import { Layout } from "@components/Assembled/Layout/Layout";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const IndexPage: NextPage = () => {
    return (
        <Layout>
            <NextSeo title="robiot - Home" description="About me" />
            <h1>Hello</h1>
        </Layout>
    );
};

export default IndexPage;
