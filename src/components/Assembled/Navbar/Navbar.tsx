import robot from "@assets/robot.png";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Navbar = () => {
    return (
        <Wrapper>
            <Container>
                <SpaceBetween>
                    <Link href="/" passHref>
                        {/* eslint-disable-next-line styled-components-a11y/anchor-is-valid*/}
                        <WebsiteHome>
                            <Image
                                src={robot}
                                height="50px"
                                width="50px"
                                alt="Site image"
                                style={{ borderRadius: "9999px" }}
                            />
                            <Text>robiot</Text>
                        </WebsiteHome>
                    </Link>

                    <Items>
                        <Link href="/" passHref>
                            {/* eslint-disable-next-line styled-components-a11y/anchor-is-valid*/}
                            <Item>
                                <Text>Home</Text>
                            </Item>
                        </Link>
                    </Items>
                </SpaceBetween>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: sticky;
    top: 0;

    display: flex;
    width: 100%;
    height: 70px;

    background-color: white;
`;

const Container = styled.div`
    width: 100%;
    max-width: ${({ theme }) => theme.container.large};

    margin: 0 auto;
    padding: 10px 10px;
`;

const SpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
`;

const WebsiteHome = styled.a`
    display: flex;
    align-items: center;
    gap: 20px;

    color: ${({ theme }) => theme.palette.primary.fg};
    text-decoration: none;
`;

const Text = styled.span`
    font-weight: 400;
    font-size: ${({ theme }) => theme.font.size.normal};
`;

const Items = styled.div`
    display: flex;
`;

const Item = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 10px;
    color: ${({ theme }) => theme.palette.primary.fgWashedOut};

    transition: color 0.5s;

    &:hover {
        color: ${({ theme }) => theme.palette.primary.fg};
    }
`;
