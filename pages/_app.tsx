import type { AppProps } from "next/app";
import Head from "next/head";

import Layout from "../components/layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>거울아거울아</title>
        <meta name="description" content="MirrorMirror" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
