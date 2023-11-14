"use client";

import { Container } from "@components/Common/Container/Container";
import { SiteBanner } from "@components/Common/SiteBanner/SiteBanner";
import { MotionLink } from "@components/Common/UI/MotionLink";
import { ContactData, LinksData, LinksDataType } from "@utils/constants";
import { FadeContainer, popUp } from "@utils/framerMotionVariants";
import { motion } from "framer-motion";
import { FC } from "react";

const Column: FC<{ links: LinksDataType; title: string }> = ({
    links,
    title,
}) => {
    return (
        <div className="flex-1 flex flex-col">
            <span className="font-semibold text-md mb-3">{title}</span>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={FadeContainer}
                viewport={{ once: true }}
                className="flex flex-col"
            >
                {links.map((link) => {
                    return (
                        <MotionLink
                            href={link.to}
                            key={`link:${link.name}`}
                            variants={popUp}
                            className="text-lg text-grey hover:text-black transition-colors duration-150"
                        >
                            {link.name}
                        </MotionLink>
                    );
                })}
            </motion.div>
        </div>
    );
};

export const Footer = () => {
    return (
        <div className="flex w-full bg-white border-t-[1px] border-grey1/30 border-col mt-20 py-10">
            <Container>
                <div className="flex flex-col gap-20">
                    <div className="flex-col md:flex-row flex items-center md:items-start justify-between gap-y-9">
                        <SiteBanner />

                        <div className="flex-col md:flex-row text-center md:text-left flex gap-x-20 gap-y-10">
                            <Column links={LinksData} title="Go to" />
                            <Column links={ContactData} title="Contact" />
                        </div>
                    </div>
                    <div className="flex justify-between text-center md:text-left flex-col md:flex-row gap-y-8">
                        <span className="text-grey text-sm md:text-base">
                            Copyright © 2023 Robiot. All rights reserved.
                        </span>

                        <span className="text-grey text-sm md:text-base">
                            Made without ♥ in Next.js {";)"}
                        </span>
                    </div>
                </div>
            </Container>
        </div>
    );
};
