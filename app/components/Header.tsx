'use client'

import Image from 'next/image'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <Image
            src="/images/logo.avif"
            alt="Logo"
            width={48}
            height={48}
            className={styles.logo}
            priority
          />
        </div>
        
        <ul className={styles.navList}>
          {['Accueil', 'Tarifs', 'Projets', 'À propos', 'Contact'].map((item) => (
            <li
              key={item}
              className={styles.navItem}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
