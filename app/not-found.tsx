'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './error.module.css'

export default function NotFound() {
  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Page introuvable</h2>
      <p className={styles.description}>
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link href="/" className={styles.button}>
        Retour à l&apos;accueil
      </Link>
    </motion.div>
  )
}
