import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

const MainDocument = () => {
    return (
        <Html lang="en">
            <Head>
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
            <body>
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
