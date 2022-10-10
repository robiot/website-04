import Link from "next/link";
import { ComponentProps, FC } from "react";
import styled from "styled-components";

export const Hyperlink: FC<ComponentProps<typeof Link>> = (properties) => {
    return (
        <Link {...properties} passHref>
            {/* eslint-disable-next-line styled-components-a11y/anchor-is-valid */}
            <Wrapper target={properties.target}>{properties.children}</Wrapper>
        </Link>
    );
};

const Wrapper = styled.a`
    font-weight: 400;
    color: inherit;
    text-decoration: inherit;

    &:hover {
        text-decoration: underline;
    }
`;
