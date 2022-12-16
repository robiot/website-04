import { LinksData, LinksDataType, LinksSection2Data } from "@utils/constants";
import { cx } from "@utils/cx";
import {
    FadeContainer,
    mobileNavItemSideways,
} from "@utils/framerMotionVariants";
import { motion } from "framer-motion";
import Link from "next/link";
import { Dispatch, FC, SetStateAction } from "react";

const getLinks = (
    links: LinksDataType,
    setDropdownActive: Dispatch<SetStateAction<boolean>>
): JSX.Element[] => {
    return links.map((link, index) => {
        return (
            <Link href={link.to} passHref key={`dropdown_link:${link.name}`}>
                <motion.button
                    variants={mobileNavItemSideways}
                    className={cx(
                        "py-4 px-7 text-5xl font-bold text-black hover:text-blue",
                        index == links.length - 1 && "last"
                    )}
                    onClick={() => {
                        setDropdownActive(false);
                    }}
                    tabIndex={0}
                >
                    {link.name}
                </motion.button>
            </Link>
        );
    });
};

export const Dropdown: FC<{
    dropdownActive: boolean;
    setDropdownActive: Dispatch<SetStateAction<boolean>>;
}> = (properties) => {
    return (
        <div
            className={cx(
                "fixed left-0 z-40 h-[calc(100%-4rem)] w-full bg-grey3 transition-[top] duration-200 ease-in-out",
                properties.dropdownActive ? "top-16" : "-top-full"
            )}
        >
            {properties.dropdownActive && (
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={FadeContainer}
                    animate="visible"
                    exit="hidden"
                    // viewport={{ once: true }}
                    className="pt-10 h-full flex flex-col items-start"
                >
                    {getLinks(LinksData, properties.setDropdownActive)}

                    {/* <Divider /> */}
                    {getLinks(LinksSection2Data, properties.setDropdownActive)}
                </motion.div>
            )}
        </div>
    );
};
