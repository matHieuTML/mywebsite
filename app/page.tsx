'use client'

import Header from './components/Header'
import Footer from './components/Footer'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <Header />
      <div className={styles.hero}>
        <span>
          <article className={styles.new}>
            NEW
          </article>
          <article>
          Voir les derniers projets
          </article>
        </span>
        <h1 >Créons ensemble Votre site web</h1>
        <p>Design et création de site web moderne et performant</p>
        <div className={styles.buttonContainer}>
          <button className={styles.button1}>Devis gratuit</button>
          <button className={styles.button2}>Voir les tarifs</button>
        </div>
      </div>
      <Footer />
    </main>
  )
}
