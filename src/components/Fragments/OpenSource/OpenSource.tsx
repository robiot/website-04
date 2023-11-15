import { Container } from "@components/Common/Container/Container";
import { Counter } from "@components/Common/Counter";
import { LinkButton } from "@components/Common/UI/LinkButton";
import { useQuery } from "@tanstack/react-query";
import { PrimaryTextCol2 } from "@utils/constants";
import { popUpFromBottomForText } from "@utils/framerMotionVariants";
import { motion } from "framer-motion";
import { FC } from "react";
import { FaGithub, FaStar } from "react-icons/fa6";

const TotalStars = () => {
    const user = "robiot";

    const totalStars = useQuery({
        queryKey: ["repos", user],
        queryFn: async () => {
            let page = 1;
            let allStars = 0;

            // eslint-disable-next-line no-constant-condition
            while (true) {
                const response = await fetch(
                    `https://api.github.com/users/${user}/repos?page=${page}`
                );

                if (!response.ok) {
                    break;
                }

                const json = (await response.json()) as {
                    stargazers_count: number;
                }[];

                // Check if the response is an empty array
                if (json.length === 0) {
                    break;
                }

                // Sum up the stars for the current page
                const starsOnPage = json.reduce(
                    (accumulator, repo) => accumulator + repo.stargazers_count,
                    0
                );

                allStars += starsOnPage;

                // Increment the page for the next request
                page++;
            }

            return {
                totalStars: allStars,
            };
        },
    });

    if (!totalStars.data) {
        return <span className="text-6xl font-bold text-black">0</span>;
    }

    return (
        <span className="text-6xl font-bold text-black">
            <Counter from={0} to={totalStars.data.totalStars} />
        </span>
    );
};

export const OpenSource: FC = () => {
    return (
        <Container className="py-28 relative gap-7 flex flex-col-reverse md:flex-row">
            <div className="flex flex-col gap-7 flex-1">
                <h3 className="text-5xl font-bold text-black">Open source</h3>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={popUpFromBottomForText}
                    className="flex flex-col gap-7"
                >
                    <p className="flex-1 leading-7">{PrimaryTextCol2}</p>
                    <LinkButton
                        href="https://github.com/robiot"
                        target="_blank"
                    >
                        <FaGithub />
                        View Github
                    </LinkButton>
                </motion.div>
            </div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={popUpFromBottomForText}
                className="flex flex-col flex-1 gap-7 items-center mb-16 md:items-end justify-center"
            >
                <TotalStars />
                <span className="flex items-center gap-2 text-xl font-bold text-black">
                    <FaStar />
                    Total stars
                </span>
            </motion.div>
        </Container>
    );
};
