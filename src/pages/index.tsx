"use client";
import { OthentLogin } from "@othent/react-components";
import styles from "./index.module.css";
import Head from "next/head";
import { env } from "../env.mjs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Othent React Components</h1>
          <OthentLogin apiid={env.NEXT_PUBLIC_APIID} />
        </div>
      </main>
    </>
  );
}
