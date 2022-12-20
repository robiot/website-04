import { FC, ReactNode } from "react";

import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

export const Layout: FC<{ children: ReactNode; footerMarginTop?: boolean }> = (
    properties
) => {
    return (
        <>
            <Navbar />
            {properties.children}

            {/* {footerMarginTop && <Margin />} */}
            <Footer />
        </>
    );
};
