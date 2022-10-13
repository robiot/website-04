import { Layout } from "@components/Assembled/Layout/Layout";
import { NavbarHeight, PrimaryText } from "@lib/constants";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import styled from "styled-components";

const IndexPage: NextPage = () => {
    return (
        <Layout footerMarginTop={false}>
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
            <Wrapper>
                <Title>404</Title>
                <SubTitle>Page not found :(</SubTitle>
            </Wrapper>
        </Layout>
    );
};

const Wrapper = styled.div`
    height: calc(100vh - ${NavbarHeight});

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: clamp(100px, 10vw, 200px);
    font-weight: bold;
    color: ${({ theme }) => theme.palette.primary.fg};
`;

const SubTitle = styled.h2`
    font-weight: 500;
    font-size: ${({ theme }) => theme.font.size.medium};
    color: ${({ theme }) => theme.palette.primary.fg};
`;

export default IndexPage;
