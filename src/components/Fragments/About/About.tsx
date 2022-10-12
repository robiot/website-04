import { Container } from "@components/Common/Container/Container";
import { FC } from "react";
import styled from "styled-components";

export const About: FC = () => {
    return (
        <Wrapper id="about">
            <Container size="medium">
                <ContentWrapper>
                    <Text>
                        I'm Elliot (also called Robiot online), a self-taught
                        passionate developer with lots of experience in both
                        web- and software development. I've been building stuff
                        since early 2021. Many of my projects are uploaded to
                        Github, where some have gained lots of attention.
                        Thanks!
                    </Text>
                    <Text>
                        But I don't just do code related stuff. I also love to
                        play music and I play both piano{" "}
                        <span role="img" aria-label="Piano emoji">
                            🎹
                        </span>{" "}
                        and drums{" "}
                        <span role="img" aria-label="Drum emoji">
                            🥁
                        </span>
                        .
                    </Text>
                </ContentWrapper>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.palette.section[1].bg};
    scroll-margin-top: 40px;
`;

const ContentWrapper = styled.div`
    z-index: 100;
    position: relative;

    padding: 70px 0;
    height: 100%;
`;

const Text = styled.p`
    font-size: ${({ theme }) => theme.font.size.normal};
    color: ${({ theme }) => theme.palette.section[1].fg};
`;