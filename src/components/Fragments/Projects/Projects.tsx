import { Container } from "@components/Common/Container/Container";
import { ProjectsData } from "@utils/constants";
import { cx } from "@utils/cx";
import { popUp } from "@utils/framerMotionVariants";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";

export const Projects: FC = () => {
    return (
        <section id="projects" className="-mt-40 scroll-m-20">
            <Container className="z-20">
                <div className="flex flex-col items-center">
                    <h3 className="text-center text-5xl font-bold text-black">
                        Projects
                    </h3>
                    <div className="flex flex-col lg:flex-row w-full gap-10 justify-between mt-10 lg:mt-5">
                        {ProjectsData.map((project, index) => {
                            return (
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={popUp}
                                    viewport={{ once: true }}
                                    className={cx(
                                        "flex flex-1",
                                        index == 1 ? "lg:mt-6" : ""
                                    )}
                                    key={`project_${index}`}
                                >
                                    <div className="flex justify-between flex-col h-72 flex-1 p-9 bg-grey3 rounded-3xl shadow-lg border-2 border-grey2 lg:border-transparent">
                                        <div className="flex flex-col gap-3">
                                            <h4 className="text-2xl font-semibold">
                                                {project.title}
                                            </h4>
                                            <p>{project.description}</p>
                                        </div>
                                        <a
                                            className="flex justify-center items-center w-full h-12 text-white bg-blue rounded-lg hover:bg-blue/95"
                                            href={project.source}
                                            target="_blank"
                                        >
                                            Source Code
                                        </a>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                    <div className="mt-10 text-lg">
                        Much more can be found on my{" "}
                        <span>
                            <Link
                                href="https://github.com/robiot"
                                target="_blank"
                                className="text-blue1"
                            >
                                Github
                            </Link>
                        </span>
                    </div>
                </div>
            </Container>
        </section>
    );
};
