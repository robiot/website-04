import { LinkButton } from "@components/Common/LinkButton/LinkButton";
import { ProjectsDataType } from "@lib/constants";
import { FC } from "react";
import styled from "styled-components";

export const ProjectCard: FC<{ card: ProjectsDataType[any] }> = (
    properties
) => {
    return (
        <Wrapper>
            <Title>{properties.card.title}</Title>
            <Description>{properties.card.description}</Description>
            <Spacer />
            <LinkButton href={properties.card.source} target="_blank">
                Source Code
            </LinkButton>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    min-height: 350px;
    width: 350px;
    padding: 45px;

    background-color: ${({ theme }) => theme.palette.widget.bg};

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        width: 100%;
    }
    /* border-radius: 11px; */
    /* box-shadow: 0px 4px 36px ${({ theme }) => theme.palette.shadow}; */
`;

const Spacer = styled.div`
    flex: 1;
`;

const Title = styled.h3`
    color: ${({ theme }) => theme.palette.widget.fg};
    font-size: ${({ theme }) => theme.font.size.large};
`;

const Description = styled.p`
    color: ${({ theme }) => theme.palette.widget.fg};
    font-size: ${({ theme }) => theme.font.size.normal};
`;
