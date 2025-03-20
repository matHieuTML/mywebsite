'use client'

import { motion } from 'framer-motion'
import styles from './page.module.css'

const PricingCard = ({ 
  title, 
  price, 
  features, 
  isPopular = false 
}: { 
  title: string
  price: string
  features: string[]
  isPopular?: boolean
}) => (
  <div className={`${styles.pricingCard} ${isPopular ? styles.popular : ''}`}>
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
    <button className={`${styles.ctaButton} ${isPopular ? styles.popularButton : ''}`}>
      Commencer un projet
    </button>
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
      ]
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
      isPopular: true
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
      ]
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
            isPopular={plan.isPopular}
          />
        ))}
      </div>
    </motion.div>
  )
}
