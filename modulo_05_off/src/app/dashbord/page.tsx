import { useState } from "react";
import styles from "./styles.module.css"
import Head from "next/head"
import Header from "@/components/header/page";



export default function Dashbord(){
     /***
    const [autorization, setAutorization] = useState<boolean>(true)

    const verificar = () => {
        if( autorization === true){
            console.log("Autorizado")
        }else if( autorization === false){
            console.log("Não autorizado fazer o login")
            setAutorization(false)
        }
    }
     */
    return(
        <div className={styles.container}>
            <Header />
            <Head>
                <title>Página Painel</title>
            </Head>
            <h1>Página Painel</h1>
        </div>
    );
}
/*** 
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    console.log("buscando dados server side");

    return {
        props: {},
    };
};
*/