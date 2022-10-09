import { FC, ReactNode } from "react";

import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

export const Layout: FC<{ children: ReactNode }> = (properties) => {
    return (
        <>
            <Navbar />
            {properties.children}
            <Footer />
        </>
    );
};
