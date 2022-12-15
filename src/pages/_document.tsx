import { Head, Html, Main, NextScript } from "next/document";

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
                    href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="font-body bg-grey3">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default MainDocument;
