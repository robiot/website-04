import { FC, ReactNode } from "react";

import { Navbar } from "../Navbar/Navbar";

export const Layout: FC<{ children: ReactNode }> = (properties) => {
    return (
        <>
            <Navbar />
            {properties.children}
        </>
    );
};
