import Head from "next/head";
import Image from "next/image";

import styles from "./page.module.css";
import heroImg from "./../../../public/assets/hero.png"
import Header from "@/components/header/page";

export default function Principal() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Head>
          <title>Tarefas+ | Organize suas tarefas de forma fácil</title>
        </Head>

        <main className={styles.main}>
          <div className={styles.logoContent}>
            <Image
              className={styles.hero}
              src={heroImg}
              alt="logo"
              priority
            />
          </div>

          <h1 className={styles.title}>
            Sistema feito para você organizar <br /> seus estudos e tarefas
          </h1>
          <div className={styles.infoContent}>
            <section className={styles.box}>
              <span>+12 posts</span>
            </section>
            <section className={styles.box}>
              <span>+90 comentários</span>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}