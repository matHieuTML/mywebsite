'use client';

import { motion } from 'framer-motion'
import styles from './page.module.css'
import Accordion from '../components/Accordion'

const PricingCard = ({ 
  title, 
  price, 
  features, 
  variant = 'starter',
  serviceType
}: { 
  title: string
  price: string
  features: string[]
  variant?: 'starter' | 'popular' | 'ecommerce' | 'custom'
  serviceType: string
}) => (
  <div className={`${styles.pricingCard} ${styles[variant]}`}>
    <div className={styles.cardHeader}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.price}>
        {price}
        <span className={styles.period}>/projet</span>
      </div>
    </div>
    <ul className={styles.features}>
      {features.map((feature, index) => (
        <li key={index} className={styles.feature}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.7 5.3c.4.4.4 1 0 1.4l-8 8c-.4.4-1 .4-1.4 0l-4-4c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l3.3 3.3 7.3-7.3c.4-.4 1-.4 1.4 0z"
              fill="currentColor"
            />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <a 
      href={`/contact?service=${serviceType}`}
      className={`${styles.ctaButton} ${styles[`${variant}Button`]}`}
    >
      Commencer un projet
    </a>
  </div>
)

export default function Tarifs() {
  const pricingPlans = [
    {
      title: "Site Vitrine",
      price: "À partir de 990€",
      features: [
        "Design moderne et personnalisé",
        "Responsive (mobile, tablette, desktop)",
        "Jusqu'à 5 pages",
        "Optimisation SEO de base",
        "Formulaire de contact",
        "Hébergement 1 an offert",
        "Formation utilisation basique"
      ],
      variant: 'starter' as const,
      serviceType: 'site-vitrine'
    },
    {
      title: "Site Premium",
      price: "À partir de 1990€",
      features: [
        "Tout du Site Vitrine +",
        "Jusqu'à 10 pages",
        "Animations avancées",
        "Blog intégré",
        "SEO avancé",
        "Maintenance 6 mois",
        "Analytics et rapports mensuels"
      ],
      variant: 'popular' as const,
      serviceType: 'site-sur-mesure'
    },
    {
      title: "Site E-commerce",
      price: "À partir de 2990€",
      features: [
        "Tout du Site Premium +",
        "Boutique en ligne complète",
        "Système de paiement sécurisé",
        "Gestion des stocks",
        "Panel administrateur",
        "Formation complète",
        "Support prioritaire 1 an"
      ],
      variant: 'ecommerce' as const,
      serviceType: 'site-ecommerce'
    },
    {
      title: "Sur Mesure",
      price: "Sur devis",
      features: [
        "Projet complexe ou spécifique",
        "Maintenance et mises à jour",
        "Fonctionnalités personnalisées",
        "Intégrations sur mesure",
        "Architecture spécifique",
        "Support dédié",
        "Accompagnement privilégié"
      ],
      variant: 'custom' as const,
      serviceType: 'autre'
    }
  ]

  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={styles.title}>Tarifs transparents, résultats garantis</h1>
        <p className={styles.subtitle}>
          Des solutions adaptées à vos besoins avec un accompagnement personnalisé tout au long de votre projet
        </p>
      </motion.div>

      <div className={styles.pricingGrid}>
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            variant={plan.variant}
            serviceType={plan.serviceType}
          />
        ))}
      </div>

      <motion.div
        className={styles.faqSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 0.5,
          ease: "easeOut"
        }}
      >
        <h2 className={styles.faqTitle}>Questions fréquentes</h2>
        <p className={styles.faqSubtitle}>
          Retrouvez les réponses aux questions les plus courantes sur mes services
        </p>
        <Accordion />
      </motion.div>
    </motion.div>
  )
}
