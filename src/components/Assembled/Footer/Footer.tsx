import { Container } from "@components/Common/Container/Container";
import { Hyperlink } from "@components/Common/Hyperlink/Hyperlink";
import { SiteBanner } from "@components/Common/SiteBanner/SiteBanner";
import styled from "styled-components";

import { FooterLinks } from "./FooterLinks/FooterLinks";

export const Footer = () => {
    return (
        <Wrapper>
            <Container size="large" noPadding>
                <Content>
                    <Top>
                        <SiteBanner />
                        <FooterLinks />
                    </Top>
                    <Bottom>
                        <Text>
                            Copyright © 2022 Robiot. All rights reserved.
                        </Text>
                        <Text>
                            Made without ♥ in Next.js {";)"}
                            <LinkWrapper>
                                <Hyperlink
                                    href="https://github.com/robiot/website"
                                    target="_blank"
                                >
                                    Source Code
                                </Hyperlink>
                            </LinkWrapper>
                        </Text>
                    </Bottom>
                </Content>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.footer`
    background: linear-gradient(
            202deg,
            ${({ theme }) => theme.palette.section[2].bg.from} 3.15%,
            ${({ theme }) => theme.palette.section[2].bg.to} 121%
        ),
        ${({ theme }) => theme.palette.section[2].bg.to};

    border-top: 1px solid ${({ theme }) => theme.palette.divider}44;
    display: flex;
    width: 100%;
    margin-top: 100px;
`;

const Content = styled.div`
    padding: 40px 50px 20px 50px;
    display: flex;
    flex-direction: column;
    gap: 100px;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        align-items: center;
        text-align: center;
    }
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;

    gap: 50px 100px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        flex-direction: column;
        align-items: center;
    }
`;

const Bottom = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 50px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        flex-direction: column;
        align-items: center;
    }
`;

const Text = styled.span`
    font-weight: 400;
    font-size: ${({ theme }) => theme.font.size.small};
    color: ${({ theme }) => theme.palette.section[2].fgWashedOut};
`;

const LinkWrapper = styled.span`
    color: ${({ theme }) => theme.palette.link};
    margin-left: 10px;
`;
