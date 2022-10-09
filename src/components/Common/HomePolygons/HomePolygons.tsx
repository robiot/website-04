import { FC } from "react";
import styled from "styled-components";

export const HomePolygons: FC = () => {
    return (
        <>
            <LeftPolygon
                src="/img/page/polygon-small.svg"
                alt="Polygon background"
            />
            <RightPolygon
                src="/img/page/polygon-big.svg"
                alt="Polygon background"
            />
        </>
    );
};

const LeftPolygon = styled.img`
    position: absolute;
    left: 0;
    bottom: -200px;

    pointer-events: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        left: -100px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        display: none;
    }
`;

const RightPolygon = styled.img`
    position: absolute;
    right: 0;
    bottom: -210px;

    pointer-events: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        right: -100px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        right: -220px;
    }
`;
