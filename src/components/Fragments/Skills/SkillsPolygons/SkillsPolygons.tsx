import { FC } from "react";
import styled, { useTheme } from "styled-components";

export const SkillsPolygons: FC = () => {
    const theme = useTheme();

    return (
        <>
            <LeftPolygon>
                <svg
                    width="239"
                    height="436"
                    viewBox="0 0 239 436"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M21 0L239 218L21 436L-197 218L21 0Z"
                        fill={theme.palette.accent.yellow}
                    />
                </svg>
            </LeftPolygon>
            <RightPolygon>
                <svg
                    width="236"
                    height="436"
                    viewBox="0 0 236 436"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M189 0L377.794 109V327L189 436L0.206467 327V109L189 0Z"
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
    bottom: -218px;

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
        display: none;
    }
`;
