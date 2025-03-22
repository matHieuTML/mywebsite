'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './error.module.css'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={styles.title}>Une erreur est survenue</h1>
      <p className={styles.message}>{error.message || 'Une erreur inattendue s\'est produite.'}</p>
      <h2 className={styles.subtitle}>Une erreur est survenue</h2>
      <p className={styles.description}>
        Le serveur a rencontré une erreur temporaire. Veuillez réessayer dans quelques instants.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={reset} className={styles.button}>
          Réessayer
        </button>
        <Link href="/" className={styles.button}>
          Retour à l&apos;accueil
        </Link>
      </div>
    </motion.div>
  )
}
