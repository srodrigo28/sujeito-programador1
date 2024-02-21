'use client'

import Link from 'next/link';
import styles from './styles.module.css';

export default function Header(){

    return(
        <header className={styles.header}>
            <section className={styles.content}>
                <nav className={styles.nav}>
                    <Link href="/principal"><h1 className={styles.logo}>Tarefas <span>+</span> </h1></Link>
                    <Link href="/dashbord" className={styles.link}>Meu Painel</Link>
                </nav>

                <Link href="/dashbord" className={styles.loginButton}>
                    Acessar
                </Link>
                    
            </section>
        </header>
    )
}