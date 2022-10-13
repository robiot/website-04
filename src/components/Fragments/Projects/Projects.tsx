import { Container } from "@components/Common/Container/Container";
import { Hyperlink } from "@components/Common/Hyperlink/Hyperlink";
import { ProjectsData } from "@lib/constants";
import { FC } from "react";
import styled from "styled-components";

import { ProjectCard } from "./ProjectCard/ProjectCard";

export const Projects: FC = () => {
    return (
        <Wrapper id="projects">
            <Container size="large">
                <Content>
                    <Title>Projects</Title>
                    <CardsWrapper>
                        {ProjectsData.map((project, index) => {
                            return (
                                <CardWrapper
                                    style={{
                                        marginTop: index == 1 ? "30px" : "",
                                    }}
                                    key={`project_${index}`}
                                >
                                    <ProjectCard card={project} />
                                </CardWrapper>
                            );
                        })}
                    </CardsWrapper>
                    <UnderText>
                        Much more can be found on my{" "}
                        <LinkWrapper>
                            <Hyperlink
                                href="https://github.com/robiot"
                                target="_blank"
                            >
                                Github
                            </Hyperlink>
                        </LinkWrapper>
                    </UnderText>
                </Content>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    margin-top: -150px;
    scroll-margin-top: 100px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CardsWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 50px;
    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        align-items: center;
        flex-direction: column;
        margin-top: 30px;
    }
`;

const CardWrapper = styled.div`
    width: 100%;
    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        margin: 0 !important;
    }
`;

const Title = styled.h2`
    color: ${({ theme }) => theme.palette.section[1].fg};
    font-size: ${({ theme }) => theme.font.size.xlarge};
    word-break: break-all;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        font-size: calc(${({ theme }) => theme.font.size.xlarge} - 20px);
    }
`;

const UnderText = styled.span`
    margin-top: 50px;
    color: ${({ theme }) => theme.palette.primary.fg};
    font-size: ${({ theme }) => theme.font.size.normal};
    text-align: center;
`;

const LinkWrapper = styled.span`
    color: ${({ theme }) => theme.palette.link};
`;
