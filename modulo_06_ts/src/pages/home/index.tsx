import Head from "next/head"
import styles from "./home.module.scss"
import Link from "next/link"
import techsImage from "./../../../public/images/techs.svg"
import Image from "next/image"

export default function Home(){
    return(
        <>
            <Head>
                <title>Apaixonado por tecnologia - Treina Dev</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.containerHeader}>
                    <section className={styles.ctaText}>
                        <h1>Levando você ao próximo nível</h1>
                        <span>venha conhecer nosso pacote, do ecomico inical com suporte remoto online direto com o professor.</span>
                        <Link href="/" >
                            <button>
                                COMEÇAR AGORA!
                            </button>
                        </Link>
                    </section>
                    <img src="/images/banner-conteudos.png" alt="não achei" />
                </div>

                <hr className={styles.divisor} />

                <div className={styles.sectionContent}>
                    <section>
                        <h2>Aprenda criar aplicativos para Android e IOS</h2>
                        <span>Vai descobrir uma maneira muito moderna de criar apps para seu dispositivo mobile</span>
                    </section>
                    <img src="/images/financasApp.png" alt="não achei conteúdo mobile" />
                </div>

                <hr className={styles.divisor} />

                <div className={styles.sectionContent}>
                    <img src="/images/webDev.png" alt="não achei conteúdo mobile" />
                    <section>
                        <h2>Aprenda criar sistemas web responsivos e criativos</h2>
                        <span>Vai descobrir uma maneira muito moderna de criar sistemas webs responsivos com o que tem de mais novo no mercado.</span>
                    </section>
                </div>

                <hr className={styles.divisor} />

                <div className={styles.nextLevelContent}>
                    <Image src={techsImage} alt="tecnologias rodape" />
                    <h2> Mais de <span className={styles.alunos}>800</span> pessoas já levaram sua carreira ao próximo nivel. </h2>
                    <span>E você vai perder a chance de evoluir de uma vez por todas?</span>
                    <Link href="/">
                        <button>AGENDAR AGORA</button>
                    </Link>
                </div>

            </main>
        </>
    )
}