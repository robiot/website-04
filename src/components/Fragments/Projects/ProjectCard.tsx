import { LinkButton } from "@components/Common/UI/LinkButton";
import { useQuery } from "@tanstack/react-query";
import { ProjectsDataType } from "@utils/constants";
import { formatnumber } from "@utils/formatting";
import { popUp } from "@utils/framerMotionVariants";
import { motion } from "framer-motion";
import { FC } from "react";
import { FaGithub } from "react-icons/fa6";

const Stat: FC<{ stat: string; label: string }> = ({ stat, label }) => {
    return (
        <div className="flex flex-col gap-1">
            <span className="text-2xl font-bold">{stat}</span>
            <span>{label}</span>
        </div>
    );
};

const StarsStat: FC<{ project: ProjectsDataType[any] }> = ({ project }) => {
    const statsData = useQuery({
        queryKey: ["repo_data", project.identifier],
        queryFn: async () => {
            const response = await fetch(
                `https://api.github.com/repos/${project.identifier}`
            );

            return await response.json();
        },
    });

    if (!statsData.data) {
        return <></>;
    }

    return <Stat label="Stars" stat={statsData.data?.stargazers_count} />;
};

const DownloadsStat: FC<{ project: ProjectsDataType[any] }> = ({ project }) => {
    const statsData = useQuery({
        queryKey: ["repo_asset_downloads", project.identifier],
        queryFn: async () => {
            const response = await fetch(
                `https://api.github.com/repos/${project.identifier}/releases`
            );

            if (!response.ok) {
                return;
            }

            const json = await response.json();

            let count = 0;

            for (const release of json) {
                for (const asset of release.assets) {
                    count += asset.download_count;
                }
            }

            return { totalDownloads: formatnumber(count) + "+" };
        },
    });

    if (!statsData.data) {
        return <></>;
    }

    return <Stat label="Downloads" stat={statsData.data?.totalDownloads} />;
};

export const ProjectCard: FC<{
    project: ProjectsDataType[any];
}> = ({ project }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={popUp}
            viewport={{ once: true }}
            className={"flex flex-1"}
        >
            <div className="flex justify-between flex-col h-[22rem] flex-1 p-7 bg-white rounded-2xl shadow-lg border-2 border-grey2 lg:border-transparent">
                <div className="flex flex-col gap-6">
                    <h4 className="text-2xl font-semibold">{project.title}</h4>
                    <p>{project.description}</p>

                    <div className="flex gap-6">
                        <DownloadsStat project={project} />
                        <StarsStat project={project} />
                    </div>
                </div>
                <LinkButton
                    href={`https://github.com/${project.identifier}`}
                    target="_blank"
                    className="!w-full"
                >
                    <FaGithub />
                    Source code
                </LinkButton>
            </div>
        </motion.div>
    );
};
