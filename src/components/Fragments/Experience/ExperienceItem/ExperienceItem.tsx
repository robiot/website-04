import { ExperiencesDataType } from "@lib/constants";
import { popUp } from "@lib/framerMotionVariants";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";

export const ExperienceItem: FC<{ item: ExperiencesDataType[any] }> = (
    properties
) => {
    return (
        <Wrapper variants={popUp} style={{ transitionDuration: "0.5s" }}>
            <ImageWrapper>
                <Image
                    height={60}
                    width={60}
                    style={{ borderRadius: "11px" }}
                    alt={properties.item.company}
                    src={`/img/experience/${properties.item.image}`}
                />
            </ImageWrapper>
            <Content>
                <Title>{properties.item.title}</Title>
                <BottomText>
                    {properties.item.date}
                    {properties.item.company != "" ? " · " : ""}
                    {properties.item.company}
                </BottomText>
            </Content>
        </Wrapper>
    );
};

const Wrapper = styled(motion.div)`
    display: flex;
    gap: 30px;
    align-items: center;
`;

const ImageWrapper = styled.div`
    display: flex;
    border: 1px solid ${({ theme }) => theme.palette.divider}AA;
    border-radius: 11px;
    pointer-events: none;
    width: 60px;
    min-width: 60px;
    height: 60px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.span`
    color: ${({ theme }) => theme.palette.section[1].fg};
    font-size: 22px;
    font-weight: 500;
`;

const BottomText = styled.span`
    color: ${({ theme }) => theme.palette.section[1].fg};
    font-size: 18px; /* Exception */
`;
