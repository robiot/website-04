import { cx } from "@lib/utils";
import { FC, ReactNode } from "react";
import styled from "styled-components";

export const Container: FC<{
    children: ReactNode;
    size: "large" | "medium" | "xlarge";
    noPadding?: boolean;
}> = (properties) => {
    return (
        <Wrapper
            className={cx(
                properties.size,
                properties.noPadding && "no-padding"
            )}
        >
            {properties.children}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    margin: 0 auto;
    padding: 10px 20px;

    &.xlarge {
        max-width: ${({ theme }) => theme.container.xlarge};
    }

    &.large {
        max-width: ${({ theme }) => theme.container.large};
    }

    &.medium {
        max-width: ${({ theme }) => theme.container.medium};
    }

    &.no-padding {
        padding: 0;
    }
`;
