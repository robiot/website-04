import "@styles/index.css";

import { Footer } from "@components/Assembled/Footer/Footer";
import { Navbar } from "@components/Assembled/Navbar/Navbar";
import { PrimaryTextCol1 } from "@utils/constants";
import { cx } from "@utils/cx";
import { Outfit } from "next/font/google";
import { FC, ReactNode } from "react";

const prompt = Outfit({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
    title: "robiot - Home",
    description: PrimaryTextCol1,
    metadataBase: new URL("https://robiot.dev"),
    url: "https://robiot.dev",
    type: "image/png",
    site_name: "Robiot",
    twitter: {
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
    },
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={cx("scroll-smooth bg-grey3", prompt.className)}>
                <Navbar />

                {children}

                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
