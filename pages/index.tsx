import type { NextPage } from "next";
import dayjs from "dayjs";

import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const random = dayjs().second();
  return (
    <div className={styles.container}>
      <Head>
        <title>거울아거울아</title>
        <meta name="description" content="MirrorMirror" />
      </Head>
      <Link href={`/poketmon/${random}`}>
        거울아 거울아 나는 어떻게 생겼니?
      </Link>
    </div>
  );
};

export default Home;
