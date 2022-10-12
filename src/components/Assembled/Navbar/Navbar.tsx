import { Container } from "@components/Common/Container/Container";
import { NavLinks } from "@components/Common/NavLinks/NavLinks";
import { SiteBanner } from "@components/Common/SiteBanner/SiteBanner";
import { LinksData, LinksSection2Data, NavbarHeight } from "@lib/constants";
import { useEffect, useState } from "react";
import styled from "styled-components";

export const Navbar = () => {
    const [isTop, setIsTop] = useState(false);

    const handleScroll = () => {
        setIsTop(window.scrollY >= 66);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, true);

        return () => {
            window.removeEventListener("scroll", handleScroll, true);
        };
    }, []);

    return (
        <Wrapper className={isTop ? "scrolled" : ""}>
            <Container size="large">
                <SpaceBetween>
                    <SiteBanner />

                    <Items>
                        <NavLinks links={LinksData} />

                        <Divider />

                        <NavLinks links={LinksSection2Data} />
                    </Items>
                </SpaceBetween>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.nav`
    position: sticky;
    top: 0;
    left: 0;
    z-index: 500;

    display: flex;
    width: 100%;
    height: ${NavbarHeight};

    transition: box-shadow 0.2s;
    &.scrolled {
        background-color: ${({ theme }) => theme.palette.primary.bg.from};
        box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.palette.divider}44;
    }
`;

const SpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
`;

const Items = styled.div`
    display: flex;
    height: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        display: none;
    }
`;

const Divider = styled.div`
    height: 20px;
    width: 2px;
    margin: 0 20px;
    align-self: center;

    background-color: ${({ theme }) => theme.palette.divider};
`;
