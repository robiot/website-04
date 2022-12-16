import { LanguagesData, OtherData, TechnologiesData } from "@utils/constants";
import { cx } from "@utils/cx";
import { FadeContainer, popUp } from "@utils/framerMotionVariants";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC, ReactNode } from "react";

const getItems = (itemtype: { name: string; image: string }[]) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={FadeContainer}
            viewport={{ once: true }}
        >
            {itemtype.map((item, index) => {
                return (
                    <motion.div
                        variants={popUp}
                        key={index}
                        className={cx(
                            "flex items-center gap-4 px-5 py-6 border-b-[1px] border-b-grey",
                            index == itemtype.length - 1 && "last"
                        )}
                    >
                        <Image
                            height={30}
                            width={30}
                            alt={item.name}
                            src={`/img/skills/${item.image}`}
                        />
                        {item.name}
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

const Column: FC<{ children: ReactNode }> = ({ children }) => {
    return <div className="flex-1">{children}</div>;
};

const ColumnTitle: FC<{ children: ReactNode }> = ({ children }) => {
    return <h4 className="text-xl text-center mb-10 text-grey3">{children}</h4>;
};

const Separator: FC = () => {
    return <div className="w-[1px] bg-grey mx-10 " />;
};

export const SkillsTable: FC = () => {
    return (
        <div className="flex justify-items-stretch -mt-10">
            <Column>
                <ColumnTitle>Languages</ColumnTitle>
                {getItems(LanguagesData)}
            </Column>

            <Separator />

            <Column>
                <ColumnTitle>Technologies</ColumnTitle>
                {getItems(TechnologiesData)}
            </Column>

            <Separator />

            <Column>
                <ColumnTitle>Others</ColumnTitle>
                {getItems(OtherData)}
            </Column>
        </div>
    );
};
