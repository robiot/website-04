import "nprogress/nprogress.css";
import "../styles/index.css";

import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const CustomApp = (properties: AppProps) => {
    return <properties.Component {...properties.pageProps} />;
};

export default CustomApp;
