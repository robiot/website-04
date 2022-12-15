import { FC, ReactNode } from "react";

export const Layout: FC<{ children: ReactNode; footerMarginTop?: boolean }> = (
    properties
) => {
    return (
        <>
            {/* <Navbar /> */}
            {properties.children}

            {/* {footerMarginTop && <Margin />} */}
            {/* <Footer /> */}
        </>
    );
};
