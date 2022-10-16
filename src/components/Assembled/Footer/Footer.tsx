import { Container } from "@components/Common/Container/Container";
import { Hyperlink } from "@components/Common/Hyperlink/Hyperlink";
import { SiteBanner } from "@components/Common/SiteBanner/SiteBanner";
import { useAppTheme } from "@context/themeContext";
import { FaAngleUp, FaLaptop } from "react-icons/fa";
import styled from "styled-components";

import { FooterLinks } from "./FooterLinks/FooterLinks";

export const Footer = () => {
    const theme = useAppTheme();

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

                        <Text>Made without ♥ in Next.js {";)"}</Text>
                        <Text>
                            <LinkWrapper>
                                <Hyperlink
                                    href="https://github.com/robiot/website"
                                    target="_blank"
                                >
                                    Source Code
                                </Hyperlink>
                            </LinkWrapper>
                        </Text>
                        <ThemeSwitcherWrapper>
                            <ThemeSwitcherActiveIconWrapper>
                                <FaLaptop />
                            </ThemeSwitcherActiveIconWrapper>
                            {/* eslint-disable-next-line styled-components-a11y/no-onchange */}
                            <ThemeSwitcher
                                value={theme.savedTheme}
                                onChange={(event) => {
                                    theme.changeTheme(
                                        event.target.value as any
                                    );
                                }}
                            >
                                <option value="system">System</option>
                                <option value="dark">Dark</option>
                                <option value="light">Light</option>
                            </ThemeSwitcher>
                            <ThemeSwitcherRightIcon>
                                <FaAngleUp />
                            </ThemeSwitcherRightIcon>
                        </ThemeSwitcherWrapper>
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
    align-items: center;
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

const ThemeSwitcherWrapper = styled.div`
    font-size: ${({ theme }) => theme.font.size.small};
    background-color: ${({ theme }) => theme.palette.primary.bg.from};
    border: 1px solid ${({ theme }) => theme.palette.divider};
    position: relative;
`;

const ThemeSwitcherActiveIconWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.palette.primary.fg};
    padding-left: 14px;
`;

const ThemeSwitcherRightIcon = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.palette.primary.fg};
    padding-right: 14px;
`;

const ThemeSwitcher = styled.select`
    appearance: none;
    padding: 10px 40px;
    font-size: ${({ theme }) => theme.font.size.small};
    background-color: ${({ theme }) => theme.palette.primary.bg.from};
    color: ${({ theme }) => theme.palette.primary.fg};
    border: 0;
`;
