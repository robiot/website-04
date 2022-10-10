import { Container } from "@components/Common/Container/Container";
import { SkillsTable } from "@components/Common/SkillsTable/SkillsTable";
import { FC } from "react";
import styled from "styled-components";

export const Skills: FC = () => {
    return (
        <Wrapper id="skills">
            <Container size="xlarge" noPadding>
                <TitleBlock>
                    <Container size="medium">
                        <Content>
                            <Title>Skills</Title>
                        </Content>
                    </Container>
                </TitleBlock>
            </Container>

            <Container size="medium">
                <SkillsTable />
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.section``;

const TitleBlock = styled.div`
    background-color: ${({ theme }) => theme.palette.accent.yellow};
    padding: 50px 0 100px 0;
    height: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        padding: 50px 0 50px 0;
    }
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
`;

const Title = styled.h2`
    font-size: ${({ theme }) => theme.font.size.xlarge};
`;
