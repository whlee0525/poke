import type { AppProps } from "next/app";
import Head from "next/head";

import Layout from "../components/layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>거울아거울아</title>
        <meta name="description" content="Poke" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/heart-152.png" />
        {/* <link rel="apple-touch-icon" href="/icons/heart-152.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/heart-152.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/heart-167.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/heart-180.png" /> */}
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
