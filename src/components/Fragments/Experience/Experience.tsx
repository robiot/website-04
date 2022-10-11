import { Container } from "@components/Common/Container/Container";
import { Experiences } from "@lib/constants";
import { FC } from "react";
import styled from "styled-components";

import { ExperienceItem } from "./ExperienceItem/ExperienceItem";

export const Experience: FC = () => {
    return (
        <Wrapper id="experience">
            <Container size="medium">
                <ContentWrapper>
                    <Title>Experience</Title>

                    <ExperiencesWrapper>
                        {Experiences.map((item, index) => {
                            return (
                                <ExperienceItem
                                    item={item}
                                    key={`experience_item_${index}`}
                                />
                            );
                        })}
                    </ExperiencesWrapper>
                </ContentWrapper>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.palette.section[1].bg};
`;

const ContentWrapper = styled.div`
    z-index: 100;
    position: relative;

    padding: 70px 0;
    height: 100%;
    /* 
    max-width: 100px;
    margin: 0 auto; */

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 50px;
`;

const Title = styled.h2`
    color: ${({ theme }) => theme.palette.section[1].fg};
    font-size: ${({ theme }) => theme.font.size.xlarge};
    word-break: break-all;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        font-size: calc(${({ theme }) => theme.font.size.xlarge} - 20px);
    }
`;

const ExperiencesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
