import { LinksData, LinksDataType, LinksSection2Data } from "@lib/constants";
import {
    FadeContainer,
    mobileNavItemSideways,
} from "@lib/framerMotionVariants";
import { cx } from "@lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { Dispatch, FC, SetStateAction } from "react";
import styled from "styled-components";

const getLinks = (
    links: LinksDataType,
    setDropdownActive: Dispatch<SetStateAction<boolean>>
): JSX.Element[] => {
    return links.map((link, index) => {
        return (
            <Link href={link.to} passHref key={`dropdown_link:${link.name}`}>
                {/* eslint-disable-next-line styled-components-a11y/anchor-is-valid, styled-components-a11y/anchor-is-valid, styled-components-a11y/click-events-have-key-events*/}
                <Item
                    variants={mobileNavItemSideways}
                    className={cx(index == links.length - 1 && "last")}
                    onClick={() => {
                        setDropdownActive(false);
                    }}
                    tabIndex={0}
                    role="button"
                >
                    {link.name}
                </Item>
            </Link>
        );
    });
};

export const Dropdown: FC<{
    dropdownActive: boolean;
    setDropdownActive: Dispatch<SetStateAction<boolean>>;
}> = (properties) => {
    return (
        <Wrapper className={properties.dropdownActive ? "open" : ""}>
            <DropdownItemsWrapper
                initial="hidden"
                whileInView="visible"
                variants={FadeContainer}
                animate="visible"
                exit="hidden"
                // viewport={{ once: true }}
            >
                {getLinks(LinksData, properties.setDropdownActive)}

                <Divider />
                {getLinks(LinksSection2Data, properties.setDropdownActive)}
            </DropdownItemsWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.palette.primary.bg.from};
    height: 100%;
    width: 100%;

    position: fixed;
    left: 0;
    z-index: 400;

    display: flex;
    flex-direction: column;

    top: 0;
    @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
        display: none;
    }
`;

const DropdownItemsWrapper = styled(motion.div)`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 6rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
        padding-top: 0;
        justify-content: center;
    }
`;

const Item = styled(motion.a)`
    padding: 15px 0 15px 20px;
    font-weight: 700;
    border: 0;

    font-weight: 400;
    font-size: ${({ theme }) => theme.font.size.normal};
    color: ${({ theme }) => theme.palette.primary.fg};

    text-decoration: none;

    border-top: 1px solid ${({ theme }) => theme.palette.divider}AA;

    &.last {
        border-bottom: 1px solid ${({ theme }) => theme.palette.divider}AA;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
        padding-left: 4rem;

        font-size: ${({ theme }) => theme.font.size.medium};
    }
`;

const Divider = styled.div`
    height: 50px;
`;
