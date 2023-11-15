import { Container } from "@components/Common/Container/Container";
import { ProjectsData } from "@utils/constants";
import Link from "next/link";
import { FC } from "react";

import { ProjectCard } from "./ProjectCard";

export const Projects: FC = () => {
    return (
        <section id="projects" className="-mt-40 scroll-m-20">
            <Container className="z-20">
                <div className="flex flex-col items-center">
                    <h3 className="mb-8 text-center text-5xl font-bold text-black">
                        Projects
                    </h3>
                    <div className="flex flex-col lg:flex-row w-full gap-7 justify-between lg:mt-5">
                        {ProjectsData.map((project, index) => (
                            <ProjectCard
                                project={project}
                                key={`project_${index}`}
                            />
                        ))}
                    </div>
                    <div className="mt-10 text-lg">
                        Much more can be found on my{" "}
                        <span>
                            <Link
                                href="https://github.com/robiot"
                                target="_blank"
                                className="text-blue1 hover:underline"
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
