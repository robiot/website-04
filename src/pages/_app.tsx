import "nprogress/nprogress.css";

import { LightTheme } from "@lib/theme";
import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import { createGlobalStyle, ThemeProvider } from "styled-components";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

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
        font-family: 'Open Sans', sans-serif;

        background: linear-gradient(202deg, ${({ theme }) =>
            theme.palette.primary.bg.from} 3.15%, ${({ theme }) =>
    theme.palette.primary.bg.to} 121%), ${({ theme }) =>
    theme.palette.primary.bg.to}; 
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
        <ThemeProvider theme={LightTheme}>
            <GlobalStyle />
            <properties.Component {...properties.pageProps} />
        </ThemeProvider>
    );
};

export default CustomApp;
