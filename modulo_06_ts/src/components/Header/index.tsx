import Image from "next/image"
import styles from "./styles.module.scss"
import logo from "./../../../public/images/logo.svg"
import { ActiveLink } from "../ActiveLink"

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <a href="">
                    <Image src={logo} alt="logo programação" />
                </a>

                <nav>
                    <ActiveLink href="/home" activeClassName={styles.active}>
                        <span>Home</span>
                    </ActiveLink>

                    <ActiveLink href="/posts" activeClassName={styles.active}>
                        <span>Conteúdos</span>
                    </ActiveLink>

                    <ActiveLink href="/sobre" activeClassName={styles.active}>
                        <span>Sobre</span>
                    </ActiveLink>
                </nav>
                <a href="/" type="button" className={styles.readyButton}> Começar</a>
            </div>
        </header>
    )
}