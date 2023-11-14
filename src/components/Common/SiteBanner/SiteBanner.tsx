import robot from "@assets/robot.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const SiteBanner = () => {
    return (
        <Link href="/" passHref>
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
                        height={50}
                        width={50}
                        alt="Site image"
                        className="rounded-full"
                    />
                </motion.div>
                <span className="text-lg">robiot</span>
            </button>
        </Link>
    );
};
