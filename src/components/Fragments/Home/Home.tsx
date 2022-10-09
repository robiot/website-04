import { ContactIcons } from "@components/Common/ContactIcons/ContactIcons";
import { Container } from "@components/Common/Container/Container";
import { HomePolygons } from "@components/Common/HomePolygons/HomePolygons";
import { NavbarHeight } from "@lib/constants";
import Link from "next/link";
import { FC } from "react";
import { FaAngleDown } from "react-icons/fa";
import styled from "styled-components";

// The top of the home page / landing
export const Home: FC = () => {
    return (
        <Wrapper>
            <HomePolygons />

            <Container size="medium">
                <ContentWrapper>
                    <Title>Hello, I'm Elliot.</Title>
                    <SubTitle>
                        A 15 year old Web and Software developer.
                    </SubTitle>
                    <ContactIcons />
                </ContentWrapper>
            </Container>

            <Link href="/#about" passHref>
                {/*eslint-disable-next-line styled-components-a11y/anchor-is-valid*/}
                <DownIcon aria-label="Arrow down">
                    <FaAngleDown />
                </DownIcon>
            </Link>
        </Wrapper>
    );
};

const DownIcon = styled.a`
    position: absolute;
    left: 50%;
    bottom: 20px;
    z-index: 100;
    transform: translateX(-50%);

    cursor: pointer;

    display: flex;
    font-size: ${({ theme }) => theme.icon.size.large};
    color: ${({ theme }) => theme.palette.primary.fg};
`;

const Wrapper = styled.div`
    height: calc(100vh - ${NavbarHeight});
    position: relative;
    overflow-x: clip;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    z-index: 100;
    position: relative;

    padding-bottom: ${NavbarHeight};
    height: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        align-items: flex-start;
    }
`;

const Title = styled.h1`
    font-size: ${({ theme }) => theme.font.size.xlarge};
    font-weight: bold;
    color: ${({ theme }) => theme.palette.primary.fg};
`;

const SubTitle = styled.h2`
    font-weight: 500;
    font-size: ${({ theme }) => theme.font.size.medium};
    color: ${({ theme }) => theme.palette.primary.fg};
`;
