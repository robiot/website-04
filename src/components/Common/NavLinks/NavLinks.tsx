import { LinksDataType } from "@lib/constants";
import { FadeContainer, popUp } from "@lib/framerMotionVariants";
import { cx } from "@lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

export const NavLinks: FC<{
    links: LinksDataType;
    section2?: boolean;
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
    marginBottom?: number | string;
}> = (properties) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={FadeContainer}
            viewport={{ once: true }}
            style={{
                display: "flex",
                flexDirection: properties.flexDirection
                    ? properties.flexDirection
                    : "row",
            }}
        >
            {properties.links.map((link) => {
                return (
                    <Link href={link.to} passHref key={`link:${link.name}`}>
                        {/* eslint-disable-next-line styled-components-a11y/anchor-is-valid, styled-components-a11y/anchor-is-valid, styled-components-a11y/click-events-have-key-events*/}
                        <Item
                            className={cx(properties.section2 && "section2")}
                            tabIndex={0}
                            variants={popUp}
                            style={{
                                marginBottom: properties.marginBottom,
                            }}
                            role="button"
                        >
                            <Text>{link.name}</Text>
                        </Item>
                    </Link>
                );
            })}
        </motion.div>
    );
};

const Text = styled.span`
    font-weight: 400;
    font-size: ${({ theme }) => theme.font.size.normal};
    flex: 1;
`;

const Item = styled(motion.a)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 10px;
    color: ${({ theme }) => theme.palette.primary.fgWashedOut};

    transition: color 0.3s;

    &.section2 {
        padding: 0;
        color: ${({ theme }) => theme.palette.section[2].fgWashedOut};
        &:hover {
            color: ${({ theme }) => theme.palette.section[2].fg};
        }
    }

    &:hover {
        color: ${({ theme }) => theme.palette.primary.fg};
    }
`;
