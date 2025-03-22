'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Header.module.css'

const Header = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
  }, [isOpen])

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
            src="/images/logo.webp"
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
        
        {isMobile ? (
          <>
            <motion.button 
              className={`${styles.burgerButton} ${isOpen ? styles.open : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className={styles.burgerLine}
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span 
                className={styles.burgerLine}
                animate={{ opacity: isOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span 
                className={styles.burgerLine}
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className={styles.mobileMenu}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                >
                  <motion.ul 
                    className={styles.mobileNavList}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {links.map((item) => (
                      <motion.li 
                        key={item.path}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.25 }}
                      >
                        <Link
                          href={item.path}
                          className={`${styles.mobileNavItem} ${pathname === item.path ? styles.active : ''}`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
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
        )}
      </nav>
    </header>
  )
}

export default Header
