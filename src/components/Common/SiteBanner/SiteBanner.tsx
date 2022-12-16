import robot from "@assets/robot.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const SiteBanner = () => {
    return (
        <Link href="/" passHref>
            {/* eslint-disable-next-line styled-components-a11y/anchor-is-valid, styled-components-a11y/click-events-have-key-events */}
            <button
                tabIndex={0}
                className="flex h-fit items-center gap-4"
                onClick={() => {
                    document.querySelector("body")?.scrollTo(0, 0);
                }}
            >
                <motion.div
                    style={{
                        transitionDuration: ".1s",
                        backgroundColor: "#232f4b",
                        height: "50px",
                        width: "50px",
                        borderRadius: "50%",
                    }}
                    animate={{
                        scale: [1, 1.2, 1.2, 1, 1],
                        rotate: [0, 0, 60, 60, 0],
                    }}
                >
                    <Image
                        src={robot}
                        height="50px"
                        width="50px"
                        alt="Site image"
                        style={{ borderRadius: "9999px" }}
                    />
                </motion.div>
                <span>robiot</span>
            </button>
        </Link>
    );
};
