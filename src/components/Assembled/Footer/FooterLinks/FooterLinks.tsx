import { ContactData, LinksData, LinksSection2Data } from "src/utils/constants";
import { FC } from "react";
import styled from "styled-components";

import { NavLinks } from "../../../Common/NavLinks/NavLinks";

export const FooterLinks: FC = () => {
    return (
        <Wrapper>
            <Column>
                <ColumnTitle>Go to</ColumnTitle>
                <Items>
                    <NavLinks
                        flexDirection="column"
                        links={[...LinksData, ...LinksSection2Data]}
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
                        links={ContactData}
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

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        flex-direction: column;
        text-align: center;
    }
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
