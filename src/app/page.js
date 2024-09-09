import Head from 'next/head';
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.splitScreen}>
          <a href="https://drive.google.com/file/d/1ZLKzZk_1hFa6L7agmhopodXfm8IfygYY/view?usp=share_link" className={`${styles.split} ${styles.cvSection}`}>
            <h1 className={styles.title}>ACCESS MY CV</h1>
          </a>
          <a href="/portfolio" className={`${styles.split} ${styles.portfolioSection}`}>
            <h1 className={styles.title}>ACCESS MY PORTFOLIO</h1>
          </a>
        </div>
      </main>
    </>
  );
}