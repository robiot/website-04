import { Container } from "@components/Common/Container/Container";
import { ExperiencesData } from "@utils/constants";
import { FadeContainer, popUp } from "@utils/framerMotionVariants";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

export const Experience: FC = () => {
    return (
        <section
            id="experience"
            className="relative mt-16 py-16 pb-64 scroll-m-10"
        >
            <div className="absolute inset-0 w-full bg-grey2 -skew-y-1"></div>
            <Container className="relative flex flex-col gap-10 items-center justify-center">
                <h3 className="text-center text-5xl font-bold text-black">
                    Experience
                </h3>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={FadeContainer}
                    viewport={{ once: true }}
                    className="flex flex-col gap-5"
                >
                    {ExperiencesData.map((item, index) => {
                        return (
                            <motion.div
                                variants={popUp}
                                className="duration-500 flex items-center gap-7"
                                key={`experience_item_${index}`}
                            >
                                <div className="h-[60px] w-[60px] flex rounded-sm pointer-events-none">
                                    <Image
                                        height={60}
                                        width={60}
                                        style={{ borderRadius: "11px" }}
                                        alt={item.company}
                                        src={`/img/experience/${item.image}`}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl">{item.title}</h3>
                                    <span>
                                        {item.date}
                                        {item.company != "" ? " · " : ""}
                                        {item.company}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </Container>
        </section>
    );
};
