import { Container } from "@components/Common/Container/Container";
import { popUpFromBottomForText } from "@utils/framerMotionVariants";
import { motion } from "framer-motion";
import { FC } from "react";

import { ContactIcons } from "./ContactIcons";

// The top of the home page / landing
export const Home: FC = () => {
    return (
        <div>
            <div className="h-[80vh] relative overflow-x-hidden overflow-y-hidden">
                <Container>
                    <motion.div
                        className="h-full flex items-center"
                        initial="hidden"
                        animate="visible"
                        variants={popUpFromBottomForText}
                    >
                        <div className="flex flex-col gap-2">
                            <h1 className="text-6xl font-extrabold">
                                Hello, I'm Elliot.
                            </h1>

                            <h3 className="text-lg">
                                A 15 year old Web and Software developer.
                            </h3>

                            <ContactIcons />
                        </div>
                    </motion.div>
                </Container>
                <div className="bg-blue top-28 right-[-20%] absolute -z-10 h-[100%] w-[50vw] rounded-[6rem] -rotate-[25deg] hidden lg:block" />
            </div>
        </div>
    );
};
