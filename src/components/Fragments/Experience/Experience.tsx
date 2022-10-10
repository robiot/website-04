import { Container } from "@components/Common/Container/Container";
import { FC } from "react";
import styled from "styled-components";

export const Experience: FC = () => {
    return (
        <Wrapper id="experience">
            <Container size="medium">
                <ContentWrapper>
                    <Title>Experience</Title>
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

    max-width: 100px;
    margin: 0 auto;

    display: flex;
    justify-content: center;
`;

const Title = styled.h2`
    color: ${({ theme }) => theme.palette.section[1].fg};
    font-size: ${({ theme }) => theme.font.size.xlarge};
`;

const Text = styled.p`
    font-size: ${({ theme }) => theme.font.size.normal};
    color: ${({ theme }) => theme.palette.section[1].fg};
`;
