import "nprogress/nprogress.css";

import {
    AppThemeProvider,
    RawThemes,
    useAppTheme,
} from "@context/themeContext";
import { DarkTheme, LightTheme } from "@lib/theme";
import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import { FC, ReactNode } from "react";
import {
    createGlobalStyle,
    DefaultTheme,
    ThemeProvider,
} from "styled-components";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

// NProgress.configure({
//     easing: "ease",
//     speed: 800,
//     showSpinner: false,
// });

const GlobalStyle = createGlobalStyle`
    * { 
        box-sizing: border-box;
    }

    html, body {
        padding: 0;

        margin: 0;
    }

    body {
        font-family: 'Noto Sans', sans-serif;
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

    :root {
        color-scheme: ${({ theme }) => theme.theme};
    }

    body {
        background: linear-gradient(202deg, ${({ theme }) =>
            theme.palette.primary.bg.from} 3.15%, ${({ theme }) =>
    theme.palette.primary.bg.to} 121%), ${({ theme }) =>
    theme.palette.primary.bg.to} !important;
    }
`;

// background: linear-gradient(202deg, ${({ theme }) =>
// theme.palette.primary.bg.from} 3.15%, ${({ theme }) =>
// theme.palette.primary.bg.to} 121%), ${({ theme }) =>
// theme.palette.primary.bg.to};

const CustomApp = (properties: AppProps & { theme: RawThemes }) => {
    return (
        <>
            <AppThemeProvider>
                <ThemeProvider
                    theme={properties.theme == "dark" ? DarkTheme : LightTheme}
                >
                    <GlobalStyle />
                    {/* {theme.theme != undefined && <GlobalStyleAfterLoad />} */}
                </ThemeProvider>

                <Content initialTheme={properties.theme}>
                    <properties.Component {...properties.pageProps} />
                </Content>
            </AppThemeProvider>
        </>
    );
};

const Content: FC<{ children?: ReactNode; initialTheme: RawThemes }> = (
    properties
) => {
    const theme = useAppTheme();

    let themeToUse: DefaultTheme;

    if (theme.theme == undefined) {
        themeToUse = properties.initialTheme == "dark" ? DarkTheme : LightTheme;
    } else {
        themeToUse = theme.theme == "dark" ? DarkTheme : LightTheme;
    }

    return (
        <ThemeProvider theme={themeToUse}>
            <GlobalStyle />
            {/* {theme.theme != undefined && <GlobalStyleAfterLoad />} */}

            {properties.children}
        </ThemeProvider>
    );
};

export default CustomApp;
