'use client'

import { motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroScene from "./components/HeroScene";
import styles from "./page.module.css";
import Image from "next/image";

const maintenanceFiles = [
  { name: "Mise à jour de sécurité - v2.1", date: "14/03/2025" },
  { name: "Optimisation des performances", date: "12/03/2025" },
  { name: "Sauvegarde système - Mars", date: "10/03/2025" },
  { name: "Correctif SSL", date: "08/03/2025" },
  { name: "Mise à jour plugins", date: "05/03/2025" },
  { name: "Rapport analytics - Février", date: "28/02/2025" },
  { name: "Maintenance BDD", date: "25/02/2025" },
  { name: "Mise à jour WordPress 6.5", date: "22/02/2025" },
  { name: "Optimisation images", date: "20/02/2025" },
  { name: "Audit de sécurité", date: "18/02/2025" },
  { name: "Mise à jour thème", date: "15/02/2025" },
  { name: "Backup système - Février", date: "12/02/2025" },
  { name: "Correctif PHP 8.2", date: "10/02/2025" },
  { name: "Optimisation cache", date: "08/02/2025" },
  { name: "Rapport performances", date: "05/02/2025" },
  { name: "Mise à jour serveur", date: "02/02/2025" },
  { name: "Maintenance plugins", date: "30/01/2025" },
  { name: "Audit SEO - Janvier", date: "28/01/2025" },
  { name: "Optimisation Core Web Vitals", date: "25/01/2025" },
  { name: "Rapport sécurité - Q1", date: "22/01/2025" },
];

export default function Home() {
  return (
    <main>
      <Header />
      <div className={styles.hero}>
        <HeroScene />
        <div className={styles.content}>
          <span>
            <article className={styles.new}>
              NEW
            </article>
            <article>
              Voir les derniers projets
            </article>
          </span>
          <h1>Créons ensemble Votre site web</h1>
          <p>Design et création de site web moderne et performant</p>
          <div className={styles.buttonContainer}>
            <button className={styles.button1}>Devis gratuit</button>
            <button className={styles.button2}>Voir les tarifs</button>
          </div>
        </div>
      </div>
      <section className={styles.maquette}>
        <h2 className={styles.maquetteTitle}>Crééons ensemble le site qui vous correspond vraiment</h2>
        <Image src="/images/maquette.png" alt="Maquette" width={1000} height={1000} className={styles.maquetteImage} />
        <div className={styles.snippetContainer}>
          <Image src="/images/snipet1.png" alt="Logo" width={350} height={600} className={styles.snippet1} priority />
          <Image src="/images/snipet2.png" alt="Logo" width={350} height={600} className={styles.snippet2} priority />
        </div>
        <section className={styles.snippetTextContainer}>
          <article><strong>Design.</strong>À partir de vos besoins et de vos inspiration identifions et design votre solution digitale</article>
          <article><strong>Création.</strong>Je réalise votre projet avec  les outils et technologies les performants et adaptés à vous.</article>
          <article><strong>Maintenance.</strong>Je recupère votre solution et remets à jour les fonctionnalités et améliore la sécurité.</article>
        </section>
      </section>

      <section className={styles.serviceContainer}>
        <p className={styles.serviceOnTitle}>Services</p>
        <h2 className={styles.serviceTitle}>Tous les services dont vous avez besoin au meme endroit</h2>
        <p className={styles.serviceText}>À l’aide des outils les plus performants Développons ensemble votre projet.</p>


        <section className={styles.serviceList}>
          <article className={styles.serviceItem + ' ' + styles.serviceItem1}>
            <h3>Design</h3>
            <p>À l’aide de Figma, Framer et bien d’autre outils  donnons vie à votre vision </p>
            <section className={styles.DesignImgContainer}>
              <Image src="/images/figma3.png" alt="Design" width={350} height={600} className={styles.serviceImage} priority />
              <Image src="/images/figma2.png" alt="Design" width={350} height={600} className={styles.serviceImage} priority />
              <Image src="/images/figma1.png" alt="Design" width={350} height={600} className={styles.serviceImage} priority />
            </section>
          </article>
          <article className={styles.serviceItem + ' ' + styles.serviceItem2}>
            <h3>Intégration & fonctionnalités</h3>
            <p>C'est maintenant que le fun commence ! Et oui je vais donner vie à votre projet. avec tout mon coeur et mon savoir faire. </p>
            <Image src="/images/vs.png" alt="Intégration & fonctionnalités" width={467} height={235} className={styles.serviceImage} priority />
          </article>
          <article className={styles.serviceItem + ' ' + styles.serviceItem3}>
            <h3>Référencement de votre site web</h3>
            <p>Avec mes bonnes pratiques, ma connaissance du SEO et votre contenu de qualité, votre site web sera bien référencé sur les moteurs de recherche.</p>
            <article className={styles.statContainer}>
              <div>
                <span><Image src="/images/google.svg" alt="Google" width={10} height={10} className={styles.serviceImage} priority /><p>Google Lighthouse</p></span>
                <p>Audit</p>

              </div>
              <section className={styles.statContainerWithCircle}>
                <div className={styles.circleContainer}>
                  <div className={styles.circle}>
                    <svg width="90" height="90" viewBox="0 0 90 90">
                      <circle
                        cx="45"
                        cy="45"
                        r="40"
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="3"
                      />
                      <motion.circle
                        cx="45"
                        cy="45"
                        r="40"
                        fill="none"
                        stroke="rgb(0, 255, 157)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 0.98 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                      />
                    </svg>
                    <span className={styles.circleValue}>98</span>
                  </div>
                  <span className={styles.circleLabel}>Performance</span>
                </div>

                <div className={styles.circleContainer}>
                  <div className={styles.circle}>
                    <svg width="90" height="90" viewBox="0 0 90 90">
                      <circle
                        cx="45"
                        cy="45"
                        r="40"
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="3"
                      />
                      <motion.circle
                        cx="45"
                        cy="45"
                        r="40"
                        fill="none"
                        stroke="rgb(0, 255, 157)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                      />
                    </svg>
                    <span className={styles.circleValue}>100</span>
                  </div>
                  <span className={styles.circleLabel}>SEO</span>
                </div>

                <div className={styles.circleContainer}>
                  <div className={styles.circle}>
                    <svg width="90" height="90" viewBox="0 0 90 90">
                      <circle
                        cx="45"
                        cy="45"
                        r="40"
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="3"
                      />
                      <motion.circle
                        cx="45"
                        cy="45"
                        r="40"
                        fill="none"
                        stroke="rgb(0, 255, 157)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 0.97 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                      />
                    </svg>
                    <span className={styles.circleValue}>97</span>
                  </div>
                  <span className={styles.circleLabel}>Accessibilité</span>
                </div>
              </section>
            </article>
          </article>
          <article className={styles.serviceItem + ' ' + styles.serviceItem4}>
            <h3>Maintenance & gestion de votre site</h3>
            <p>Je vous propose un service de maintenance et de gestion de votre site web. Je m'occupe de tout !!
            </p>
            <div className={styles.filesContainer}>
              <div className={styles.filesContainerTitle}>
                <h4>Titre</h4>
                <p>Date</p>
              </div>
              <div className={styles.filesContainerList}>
                {maintenanceFiles.map((file, index) => (
                  <div key={index} className={styles.fileItem}>
                    <span>{file.name}</span>
                    <span>{file.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
          <article className={styles.serviceItem + ' ' + styles.serviceItem5}>
            <h3>Suivi client et devis gratuit</h3>
            <p>Je vous accompagne tout au long du processus de création de votre site web. Je vous conseille et vous guide dans vos choix. Et je reste à votre écoute pour toutes questions.
            </p>
          </article>

        </section>
      </section>
      <Footer />
    </main>
  )
}
