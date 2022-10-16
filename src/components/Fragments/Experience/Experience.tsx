import { Container } from "@components/Common/Container/Container";
import { ExperiencesData } from "@lib/constants";
import { FadeContainer } from "@lib/framerMotionVariants";
import { motion } from "framer-motion";
import { FC } from "react";
import styled from "styled-components";

import { ExperienceItem } from "./ExperienceItem/ExperienceItem";

export const Experience: FC = () => {
    return (
        <Wrapper id="experience">
            <Container size="medium">
                <ContentWrapper>
                    <Title>Experience</Title>

                    <ExperiencesWrapper
                        initial="hidden"
                        whileInView="visible"
                        variants={FadeContainer}
                        viewport={{ once: true }}
                    >
                        {ExperiencesData.map((item, index) => {
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
    scroll-margin-top: 20px;
`;

const ContentWrapper = styled.div`
    z-index: 100;
    position: relative;

    padding: 70px 0 250px 0;
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

const ExperiencesWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
