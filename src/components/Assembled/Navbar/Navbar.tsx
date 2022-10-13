import { Container } from "@components/Common/Container/Container";
import { NavLinks } from "@components/Common/NavLinks/NavLinks";
import { SiteBanner } from "@components/Common/SiteBanner/SiteBanner";
import { LinksData, LinksSection2Data, NavbarHeight } from "@lib/constants";
import { cx } from "@lib/utils";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { Dropdown } from "./Dropdown/Dropdown";

export const Navbar = () => {
    const [isTop, setIsTop] = useState(false);
    const [dropdownActive, setDropdownActive] = useState(false);

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
        <>
            <Wrapper className={cx(isTop && !dropdownActive && "scrolled")}>
                <Container size="large">
                    <SpaceBetween>
                        <SiteBanner />

                        <Items>
                            <NavLinks links={LinksData} />

                            <Divider />

                            <NavLinks links={LinksSection2Data} />
                        </Items>

                        <ToggleDropdown
                            className={cx(dropdownActive && "open")}
                            onClick={() => {
                                setDropdownActive(!dropdownActive);
                            }}
                        >
                            <span />
                            <span />
                            <span />
                        </ToggleDropdown>
                    </SpaceBetween>
                </Container>
            </Wrapper>

            <Dropdown
                dropdownActive={dropdownActive}
                setDropdownActive={setDropdownActive}
            />
        </>
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

const ToggleDropdown = styled.button`
    cursor: pointer;
    width: 25px;
    height: 20px;

    display: flex;
    align-self: center;

    background-color: transparent;

    border: 0;

    transform: rotate(0deg);

    position: relative;

    @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
        display: none;
    }

    & span {
        transition-property: transform, top, width, opacity;
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out;
        display: block;
        position: absolute;
        border-radius: 9px;
        left: 0;
        height: 3px;
        width: 100%;
        background-color: ${({ theme }) => theme.palette.primary.fg};
        transform-origin: left center; // ?
    }
    & span:nth-child(1) {
        top: 0;
    }
    & span:nth-child(2) {
        top: 50%;
    }
    & span:nth-child(3) {
        top: 100%;
    }
    &.open span:nth-child(1) {
        transform: rotate(45deg);
    }
    &.open span:nth-child(2) {
        width: 0%;
        opacity: 0;
    }
    &.open span:nth-child(3) {
        transform: rotate(-45deg);
        top: 90%;
    }
`;
