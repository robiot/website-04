import { FC, ReactNode } from "react";
import styled from "styled-components";

import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

export const Layout: FC<{ children: ReactNode; footerMarginTop?: boolean }> = (
    properties
) => {
    let footerMarginTop;

    if (properties.footerMarginTop == undefined) {
        footerMarginTop = true;
    }

    return (
        <>
            <Navbar />
            {properties.children}

            {footerMarginTop && <Margin />}
            <Footer />
        </>
    );
};

const Margin = styled.div`
    height: 100px;
`;
