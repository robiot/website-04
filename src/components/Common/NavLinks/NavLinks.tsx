import { LinksType } from "@lib/constants";
import { cx } from "@lib/utils";
import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

export const NavLinks: FC<{
    links: LinksType;
    section2?: boolean;
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
    marginBottom?: number | string;
}> = (properties) => {
    return (
        <div
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
                            style={{
                                marginBottom: properties.marginBottom,
                            }}
                            onClick={
                                link.to == "/"
                                    ? () => {
                                          document
                                              .querySelector("body")
                                              ?.scrollTo(0, 0);
                                      }
                                    : undefined
                            }
                            role="button"
                        >
                            <Text>{link.name}</Text>
                        </Item>
                    </Link>
                );
            })}
        </div>
    );
};

const Text = styled.span`
    font-weight: 400;
    font-size: ${({ theme }) => theme.font.size.normal};
`;

const Item = styled.a`
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
