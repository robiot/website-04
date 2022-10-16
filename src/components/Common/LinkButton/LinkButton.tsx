import { motion } from "framer-motion";
import Link from "next/link";
import { ComponentProps, FC, ReactNode } from "react";
import styled from "styled-components";

export const LinkButton: FC<
    ComponentProps<"a"> & { children: ReactNode; href: string }
> = (properties) => {
    return (
        <Link href={properties.href} passHref>
            {/* eslint-disable-next-line styled-components-a11y/anchor-has-content */}
            <Wrapper
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.9 }}
                {...(properties as any)}
            />
        </Link>
    );
};

const Wrapper = styled(motion.a)`
    background-color: ${({ theme }) => theme.palette.button.bg};
    color: ${({ theme }) => theme.palette.button.fg};

    font-size: ${({ theme }) => theme.font.size.normal};
    font-weight: 600;
    font-family: inherit;
    text-decoration: none;

    border: 0;
    margin: 0;
    padding: 15px;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
`;
