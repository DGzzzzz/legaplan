import Image from "next/image"
import styles from './header.module.scss'
import globals from '../../styles/globals.module.scss'

interface HeaderProps {
    children: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ children }) => {
    return (
        <div className={globals.container}>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <div className={styles.logoContainer}>
                        <Image src="/assets/images/Logomark.png" alt="logo" width={32} height={32} />
                        <Image src="/assets/images/Logotype.png" alt="logo escrito" width={100} height={16} />
                    </div>
                    <h1 className={styles.title}>Bem-vindo de volta, Douglas</h1>
                    <p className={styles.date}>Segunda, 01 de dezembro de 2025</p>
                </nav>
            </header>
            {children}
        </div>
    )
}

export default Header