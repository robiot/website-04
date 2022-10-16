import { FC } from "react";
import styled, { useTheme } from "styled-components";

export const HomePolygons: FC = () => {
    const theme = useTheme();

    return (
        <>
            <LeftPolygon>
                <svg
                    width="210"
                    height="436"
                    viewBox="0 0 210 436"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M21 0L209.794 109V327L21 436L-167.794 327V109L21 0Z"
                        fill={theme.palette.accent.teal}
                    />
                </svg>
            </LeftPolygon>

            <RightPolygon>
                <svg
                    width="315"
                    height="837"
                    viewBox="0 0 315 837"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M340.5 0L680.415 209.25V627.75L340.5 837L0.585022 627.75V209.25L340.5 0Z"
                        fill={theme.palette.accent.teal}
                    />
                </svg>
            </RightPolygon>
        </>
    );
};

const LeftPolygon = styled.div`
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

const RightPolygon = styled.div`
    position: absolute;
    right: 0;
    bottom: -210px;

    pointer-events: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        right: -100px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        /* right: -220px; */
        display: none;
    }
`;
