import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import { ServerStyleSheet } from "styled-components";

const criticalThemeCss = `
:root {
    color-scheme: var(--color-scheme);
}

body {
    background: linear-gradient(202deg, var(--background-from) 3.15%, var(--background-to) 121%), var(--background-to); 
}
`;

const initColorModeScript = `
// function body_loaded() {
//     const nextDataElement = document.getElementById("__NEXT_DATA__");
//     var elementContent = JSON.parse(nextDataElement.innerHTML);
//     elementContent.props.theme = ""
// }

// document.addEventListener("DOMContentLoaded", function(event) { 
//    body_loaded();
// });

// document.body = document.createElement("body");

const selectedColorTheme_init = localStorage.getItem("theme");

let themeRaw_init;

if (!selectedColorTheme_init || selectedColorTheme_init == "system") {
    themeRaw_init = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
} else {
    themeRaw_init = selectedColorTheme_init;
}

if (themeRaw_init == "light") {
    console.log("Setting initial theme to light. Hey, be careful with your eyes.")
    document.documentElement.style.setProperty("--background-from", "#F6F1F5")
    document.documentElement.style.setProperty("--background-to", "#ECEFF6")
    document.documentElement.style.setProperty("--color-scheme", "light")
} else if (themeRaw_init == "dark") {
    console.log("Setting initial theme to dark. Eyes are happy.")
    document.documentElement.style.setProperty("--background-from", "#000000")
    document.documentElement.style.setProperty("--background-to", "#000000")
    document.documentElement.style.setProperty("--color-scheme", "dark")
}

let props = Object.keys(window);
const check = () => {
    const currentProps = Object.keys(window);
    const newProps = currentProps.filter(item => props.indexOf(item) === -1);
    if (newProps.length) {
        if (newProps.includes("__NEXT_DATA__")) {
            console.log('Added these properties', newProps);
            window.__NEXT_DATA__.props.theme = themeRaw_init;
        }
        props = currentProps;
    }
    requestAnimationFrame(check);
};
requestAnimationFrame(check);




// var custom_next_data = document.createElement('script');

// custom_next_data.setAttribute("id", "__NEXT_DATA__");

// const inlineScript = document.createTextNode('{"props":{"pageProps":{},"theme":"dark"},"page":"/","query":{},"buildId":"0sVKgmmjvfDv7SbyG4KIu","isFallback":false,"appGip":true,"scriptLoader":[]}')
// custom_next_data.appendChild(inlineScript);

// document.head.appendChild(custom_next_data);
`;

// const selectedColorTheme_init = localStorage.getItem("theme");

// let themeRaw_init;

// if (!selectedColorTheme_init || selectedColorTheme_init == "system") {
//     themeRaw_init = window.matchMedia("(prefers-color-scheme: dark)").matches
//         ? "dark"
//         : "light";
// } else {
//     themeRaw_init = selectedColorTheme_init;
// }

// window.theme = themeRaw_init;

// if (themeRaw_init == "light") {
//     console.log("Setting initial theme to light. Hey, be careful with your eyes.")
//     document.documentElement.style.setProperty("--background-from", "#F6F1F5")
//     document.documentElement.style.setProperty("--background-to", "#ECEFF6")
//     document.documentElement.style.setProperty("--color-scheme", "light")
// } else if (themeRaw_init == "dark") {
//     console.log("Setting initial theme to dark. Eyes are happy.")
//     document.documentElement.style.setProperty("--background-from", "#000000")
//     document.documentElement.style.setProperty("--background-to", "#000000")
//     document.documentElement.style.setProperty("--color-scheme", "dark")
// }

const MainDocument = () => {
    return (
        <Html lang="en">
            <Head>
                <style dangerouslySetInnerHTML={{ __html: criticalThemeCss }} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin={"true"}
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body
                onLoad={() => {
                    console.log("load window?");

                    if (typeof window !== "undefined") {
                        (window as any).body_loaded;
                    }
                }}
            >
                <Script
                    id="theme_init"
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{ __html: initColorModeScript }}
                />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

MainDocument.getInitialProps = async (context: any) => {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = context.renderPage;

    try {
        context.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App: any) => (properties: any) =>
                    sheet.collectStyles(<App {...properties} />),
            });

        const initialProperties = await Document.getInitialProps(context);

        return {
            ...initialProperties,
            styles: (
                <>
                    {initialProperties.styles}
                    {sheet.getStyleElement()}
                </>
            ),
        };
    } finally {
        sheet.seal();
    }
};

export default MainDocument;
