import { Languages } from "@lib/constants";
import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";

const getItems = (itemtype: { name: string; image: string }[]) => {
    return itemtype.map((item, index) => {
        return (
            <Item key={index}>
                <Image
                    height={30}
                    width={30}
                    alt={item.name}
                    src={`/img/skills/${item.image}`}
                />
                {item.name}
            </Item>
        );
    });
};

export const SkillsTable: FC = () => {
    return (
        <Wrapper>
            <Column>
                <ColumnTitle>Languages</ColumnTitle>
                {getItems(Languages)}
            </Column>
            <Separator />

            <Column>
                <ColumnTitle>Technologies</ColumnTitle>
            </Column>

            <Separator />

            <Column>
                <ColumnTitle>Others</ColumnTitle>
            </Column>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    /* margin-top: -60px; */
`;

const Column = styled.div`
    flex: 1;
`;

const ColumnTitle = styled.h2`
    text-align: center;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 20px;
`;

export const Separator = styled.div`
    flex-grow: initial;
    width: 0.1rem;
    display: flex;
    background-color: ${({ theme }) => theme.palette.divider};
`;
