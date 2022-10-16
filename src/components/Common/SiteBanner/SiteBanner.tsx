import robot from "@assets/robot.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const SiteBanner = () => {
    return (
        <Link href="/" passHref>
            {/* eslint-disable-next-line styled-components-a11y/anchor-is-valid, styled-components-a11y/click-events-have-key-events */}
            <Wrapper
                tabIndex={0}
                onClick={() => {
                    document.querySelector("body")?.scrollTo(0, 0);
                }}
                role="button"
            >
                <motion.div
                    style={{
                        transitionDuration: ".1s",
                        backgroundColor: "#232f4b",
                        height: "50px",
                        width: "50px",
                        borderRadius: "50%",
                    }}
                    animate={{
                        scale: [1, 1.2, 1.2, 1, 1],
                        rotate: [0, 0, 60, 60, 0],
                    }}
                >
                    <Image
                        src={robot}
                        height="50px"
                        width="50px"
                        alt="Site image"
                        style={{ borderRadius: "9999px" }}
                    />
                </motion.div>
                <Text>robiot</Text>
            </Wrapper>
        </Link>
    );
};

const Wrapper = styled.a`
    display: flex;
    height: fit-content;
    align-items: center;
    gap: 20px;

    color: ${({ theme }) => theme.palette.primary.fg};
    text-decoration: none;
`;

const Text = styled.span`
    font-weight: 400;
    font-size: ${({ theme }) => theme.font.size.normal};
`;
