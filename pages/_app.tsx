import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link href="https://fonts.googleapis.com/css2?family=Blaka&family=Kanit:ital,wght@1,700&display=swap" rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
        </Fragment>
    );
}

export default MyApp;
