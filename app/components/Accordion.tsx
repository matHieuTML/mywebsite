'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Accordion.module.css'

interface AccordionItemProps {
  title: string
  content: string
  isOpen: boolean
  onClick: () => void
}

const AccordionItem = ({ title, content, isOpen, onClick }: AccordionItemProps) => {
  return (
    <div className={styles.item}>
      <button
        className={styles.header}
        onClick={onClick}
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        {title}
        <motion.div
          className={styles.icon}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, height: 0, width: "100%" }}
            animate={{ 
              opacity: 1,
              height: "auto",
              width: "100%",
              transition: {
                height: {
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                },
                opacity: { duration: 0.2 }
              }
            }}
            exit={{ 
              opacity: 0,
              height: 0,
              width: "100%",
              transition: {
                height: { duration: 0.2 },
                opacity: { duration: 0.2 }
              }
            }}
          >
            <div className={styles.contentInner}>
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const items = [
    {
      title: "Quels sont les délais de livraison ?",
      content: "Les délais varient selon la complexité du projet. En général, un site vitrine prend 3-4 semaines, un site premium 6-8 semaines, et un site e-commerce 8-12 semaines. Ces délais incluent les phases de design, développement, et révisions. Je vous fournis un planning détaillé au début du projet."
    },
    {
      title: "Proposes-tu un accompagnement après la livraison ?",
      content: "Oui, absolument ! Chaque projet inclut une période de support après la mise en ligne. Je reste disponible pour répondre à vos questions et effectuer des ajustements mineurs. Pour un suivi à plus long terme, des forfaits de maintenance sont disponibles pour garantir la performance et la sécurité de votre site."
    },
    {
      title: "Puis-je modifier mon site moi-même après sa mise en ligne ?",
      content: "Oui, tous les sites sont conçus avec une interface d'administration intuitive. Je vous forme à son utilisation pour que vous puissiez gérer votre contenu en toute autonomie. Pour les modifications plus techniques, je reste à votre disposition."
    },
    {
      title: "Comment se déroule le processus de création ?",
      content: "Le processus commence par une réunion de cadrage pour comprendre vos besoins. Ensuite, je crée des maquettes pour validation, puis développe le site. Vous êtes impliqué à chaque étape avec des points réguliers et des phases de révision. Le site n'est mis en ligne qu'après votre validation complète."
    },
    {
      title: "Quelles sont les options de paiement ?",
      content: "Je propose un échéancier en plusieurs versements : un acompte de 30% à la commande, 40% à la validation des maquettes, et le solde à la mise en ligne. Pour les projets sur mesure ou de grande envergure, nous pouvons établir un plan de paiement personnalisé."
    }
  ]

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  )
}
