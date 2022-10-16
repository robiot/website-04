import "nprogress/nprogress.css";

import { AppThemeProvider, useAppTheme } from "@context/themeContext";
import { DarkTheme, LightTheme } from "@lib/theme";
import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import { FC, ReactNode } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

// NProgress.configure({
//     easing: "ease",
//     speed: 800,
//     showSpinner: false,
// });

const GlobalStyle = createGlobalStyle`
    :root {
        color-scheme: ${({ theme }) => theme.theme};
    }

    * { 
        box-sizing: border-box;
    }

    html, body {
        padding: 0;

        margin: 0;
    }

    body {
        font-family: 'Noto Sans', sans-serif;

        background: linear-gradient(202deg, ${({ theme }) =>
            theme.palette.primary.bg.from} 3.15%, ${({ theme }) =>
    theme.palette.primary.bg.to} 121%), ${({ theme }) =>
    theme.palette.primary.bg.to}; 
    }

    html:focus-within {
        scroll-behavior: smooth;
    }

    #__next {
        /* position: relative; */
    }

    h1, h2, h3, h4, h5, h6 {
        padding: 0; 
        margin: 0;
    }

    /* Remove spinner */
    #nprogress .spinner, #nprogress .spinner-icon {
        display: none;
    }
`;

const CustomApp = (properties: AppProps) => {
    return (
        <AppThemeProvider>
            <Content>
                <properties.Component {...properties.pageProps} />
            </Content>
        </AppThemeProvider>
    );
};

const Content: FC<{ children?: ReactNode }> = (properties) => {
    const theme = useAppTheme();

    return (
        <ThemeProvider theme={theme.theme == "dark" ? DarkTheme : LightTheme}>
            <GlobalStyle />
            {properties.children}
        </ThemeProvider>
    );
};

export default CustomApp;
