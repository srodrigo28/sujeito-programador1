import styles from "./styles.module.css"
import Head from "next/head"

export default function Dashbord(){
    return(
        <div className={styles.container}>
            <Head>
                <title>Página Painel</title>
            </Head>
        </div>
    )
}