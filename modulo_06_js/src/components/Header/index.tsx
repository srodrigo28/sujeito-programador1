import styles from './styles.module.scss'
import Image from 'next/image'
import logo from '../../../public/images/logo.svg'

import Link from 'next/link'

export function Header() {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <a>
                    <Image src={logo} alt='Logo' />
                </a>

                <nav>
                    <Link href="/">
                        <span>Home</span>
                    </Link>
                    <Link href="/posts">
                        <span>Conteúdos</span>
                    </Link>
                    <Link href="/sobre">
                        <span>Quem Somos?</span>
                    </Link>
                </nav>

                <a className={styles.readyButton} type='button' href="https://sujeitoprogramador.com">Começar</a>

            </div>
        </header>
    )
}