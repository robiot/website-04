import { LanguagesData, OtherData, TechnologiesData } from "@lib/constants";
import { FadeContainer, popUp } from "@lib/framerMotionVariants";
import { cx } from "@lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";

const getItems = (itemtype: { name: string; image: string }[]) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={FadeContainer}
            viewport={{ once: true }}
        >
            {itemtype.map((item, index) => {
                return (
                    <Item
                        style={{ transitionDuration: ".4s" }}
                        variants={popUp}
                        key={index}
                        className={cx(index == itemtype.length - 1 && "last")}
                    >
                        <Image
                            height={30}
                            width={30}
                            alt={item.name}
                            src={`/img/skills/${item.image}`}
                        />
                        {item.name}
                    </Item>
                );
            })}
        </motion.div>
    );
};

export const SkillsTable: FC = () => {
    return (
        <Wrapper>
            <Column>
                <ColumnTitle>Languages</ColumnTitle>
                {getItems(LanguagesData)}
            </Column>
            <Separator />

            <Column>
                <ColumnTitle>Technologies</ColumnTitle>
                {getItems(TechnologiesData)}
            </Column>

            <Separator />

            <Column>
                <ColumnTitle>Others</ColumnTitle>
                {getItems(OtherData)}
            </Column>
        </Wrapper>
    );
};

const fromTop = "80px";

const Wrapper = styled.div`
    display: flex;
    justify-content: stretch;
    margin-top: -${fromTop};
    margin-bottom: 100px;
    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        flex-flow: column wrap;
        margin-top: 0;
    }
`;

const Column = styled.div`
    flex: 1;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        margin-top: 50px;
    }
`;

const ColumnTitle = styled.h2`
    text-align: center;
    margin-bottom: ${fromTop};
    color: ${({ theme }) => theme.palette.accent.on};

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        color: ${({ theme }) => theme.palette.primary.fg};

        margin-bottom: 10px;
    }
`;

const Item = styled(motion.div)`
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px 20px;

    font-size: ${({ theme }) => theme.font.size.normal};

    color: ${({ theme }) => theme.palette.primary.fg};

    border-bottom: 1px solid ${({ theme }) => theme.palette.divider};

    &.last {
        border-bottom: none;
    }
`;

export const Separator = styled.div`
    width: 1px;
    background-color: ${({ theme }) => theme.palette.divider};
    margin: calc(${fromTop} + 60px) 20px 20px 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        display: none;
    }
`;
