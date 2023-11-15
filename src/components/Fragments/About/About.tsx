import { Container } from "@components/Common/Container/Container";
import { PrimaryTextCol1 } from "@utils/constants";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { FC, useRef } from "react";

export const About: FC = () => {
    const section = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: section,
        offset: ["0 1", "0.8 1"],
    });

    return (
        <section
            ref={section}
            id="about"
            className="relative pt-[calc(20vh-75px)] pb-32"
        >
            <div className="absolute inset-0 w-full bg-grey2 -skew-y-1" />
            <Container className="relative gap-7 flex flex-col items-center">
                <motion.h3
                    // multiply value
                    style={{ scale: scrollYProgress }}
                    className="text-center text-5xl font-bold text-black"
                >
                    About me
                </motion.h3>

                <p className="flex-1 leading-7 text-center max-w-2xl">
                    {PrimaryTextCol1}
                </p>
            </Container>
        </section>
    );
};
