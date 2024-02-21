'use client'

import { useSession, signIn, signOut } from 'next-auth/react';

import Link from 'next/link';
import styles from './styles.module.css';

export default function Header(){

    const { data: session, status } = useSession();

    return(
        <header className={styles.header}>
            <section className={styles.content}>
                <nav className={styles.nav}>
                    <Link href="/principal"><h1 className={styles.logo}>Tarefas <span>+</span> </h1></Link>
                    <Link href="/dashbord" className={styles.link}>Meu Painel</Link>
                </nav>
                {
                    status === "loading" ? (
                        <></>
                    ) : session ? (
                    
                    <button className={styles.loginButton} onClick={ () => signOut}> 
                        olá {session?.user?.name}
                    </button>
                ) : (
                    <button className={styles.loginButton}  onClick={ () => signIn("google")}> 
                        Acessar
                    </button>
                )}
            </section>
        </header>
    )
}