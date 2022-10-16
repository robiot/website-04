import { Container } from "@components/Common/Container/Container";
import { FC } from "react";
import styled from "styled-components";

import { SkillsPolygons } from "./SkillsPolygons/SkillsPolygons";
import { SkillsTable } from "./SkillsTable/SkillsTable";

export const Skills: FC = () => {
    return (
        <Wrapper id="skills">
            <LeftTilt />
            <RightTilt />
            <SkillsPolygons />
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

const Wrapper = styled.section`
    position: relative;
    overflow-x: clip;
    scroll-margin-top: 40px;
`;

const LeftTilt = styled.div`
    position: absolute;
    z-index: -1;
    left: -5px;
    top: -10%;
    width: 50%;
    height: 230px;
    background-color: ${({ theme }) => theme.palette.section[1].bg};
    /* transform: rotate(3deg); */
`;

const RightTilt = styled.div`
    position: absolute;
    z-index: -1;
    right: -5px;
    top: -10%;
    width: 50%;
    height: 230px;
    background-color: ${({ theme }) => theme.palette.section[1].bg};
    /* transform: rotate(3deg); */
`;

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
    color: ${({ theme }) => theme.palette.accent.on};
`;
