import { Contact, Links, LinksSection2 } from "@lib/constants";
import { FC } from "react";
import styled from "styled-components";

import { NavLinks } from "../NavLinks/NavLinks";

export const FooterLinks: FC = () => {
    return (
        <Wrapper>
            <Column>
                <ColumnTitle>Go to</ColumnTitle>
                <Items>
                    <NavLinks
                        flexDirection="column"
                        links={Links}
                        section2
                        marginBottom={10}
                    />
                    <NavLinks
                        flexDirection="column"
                        links={LinksSection2}
                        section2
                        marginBottom={10}
                    />
                </Items>
            </Column>
            <Column>
                <ColumnTitle>Contact</ColumnTitle>
                <Items>
                    <NavLinks
                        flexDirection="column"
                        links={Contact}
                        section2
                        marginBottom={10}
                    />
                </Items>
            </Column>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    gap: 100px;
`;

const Column = styled.div`
    flex: 1;
`;

const ColumnTitle = styled.h3`
    font-weight: 500;
    color: ${({ theme }) => theme.palette.section[2].fg};
    margin-bottom: 20px;
`;

const Items = styled.div`
    display: flex;
    flex-direction: column;
`;
