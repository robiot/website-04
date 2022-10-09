import { Container } from "@components/Common/Container/Container";
import { FooterLinks } from "@components/Common/FooterLinks/FooterLinks";
import { SiteBanner } from "@components/Common/SiteBanner/SiteBanner";
import styled from "styled-components";

export const Footer = () => {
    return (
        <Wrapper>
            <Container size="large">
                <Content>
                    <Top>
                        <SiteBanner />
                        <FooterLinks />
                    </Top>
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
`;

const Content = styled.div`
    padding: 40px 0 20px 0;
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
`;
