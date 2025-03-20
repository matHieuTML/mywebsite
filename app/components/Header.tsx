'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'

const Header = () => {
  const pathname = usePathname()

  const links = [
    { name: 'Accueil', path: '/' },
    { name: 'Tarifs', path: '/tarifs' },
    { name: 'Projets', path: '/projets' },
    { name: 'À propos', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logoContainer}>
          <Image
            src="/images/logo.avif"
            alt="Logo"
            width={48}
            height={48}
            className={styles.logo}
            priority
          />
          <div className={styles.logoText}>
            <p className={styles.firstName}>Mathieu</p>
            <p className={styles.lastName}>Gaucher</p>
          </div>
        </Link>
        
        <ul className={styles.navList}>
          {links.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`${styles.navItem} ${pathname === item.path ? styles.active : ''}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
