import { motion } from "framer-motion";
import { ComponentProps, FC, ReactNode } from "react";
import styled from "styled-components";

export const Button: FC<ComponentProps<"button"> & { children: ReactNode }> = (
    properties
) => {
    return (
        <Wrapper
            {...(properties as any)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
        ></Wrapper>
    );
};

const Wrapper = styled(motion.button)`
    background-color: ${({ theme }) => theme.palette.button.bg};
    color: ${({ theme }) => theme.palette.button.fg};

    font-size: ${({ theme }) => theme.font.size.normal};
    font-weight: 600;
    font-family: inherit;

    border: 0;
    margin: 0;
    padding: 15px;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
`;
