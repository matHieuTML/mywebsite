'use client';

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './page.module.css'

interface Project {
  id: number
  title: string
  image: string
  tags: { icon: string; text: string }[]
  description: string
  longDescription: string
  url: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Créatif",
    image: "/images/projets/site-13.jpeg",
    tags: [
      { icon: "⚛️", text: "React" },
      { icon: "🎨", text: "Tailwind" },
      { icon: "🚀", text: "Next.js" }
    ],
    description: "Site portfolio moderne et responsive",
    longDescription: "Un site portfolio moderne conçu pour mettre en valeur les projets créatifs. Utilisant les dernières technologies web pour une expérience utilisateur fluide et engageante.",
    url: "https://projet1.com"
  },
  {
    id: 2,
    title: "E-commerce Artisanal",
    image: "/images/projets/site-7.jpeg",
    tags: [
      { icon: "🛍️", text: "E-commerce" },
      { icon: "⚛️", text: "React" },
      { icon: "💳", text: "Stripe" }
    ],
    description: "Plateforme de vente pour artisans",
    longDescription: "Une plateforme e-commerce complète permettant aux artisans de vendre leurs créations. Intégration de paiements sécurisés et gestion des stocks en temps réel.",
    url: "https://projet2.com"
  },
  {
    id: 3,
    title: "Application Web Progressive",
    image: "/images/projets/site-4.jpeg",
    tags: [
      { icon: "📱", text: "PWA" },
      { icon: "🅰️", text: "Angular" },
      { icon: "🔥", text: "Firebase" }
    ],
    description: "Application web progressive performante",
    longDescription: "Une application web progressive offrant une expérience native sur mobile et desktop. Synchronisation en temps réel et fonctionnalités hors ligne.",
    url: "https://projet3.com"
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.header}>
        <h1 className={styles.title}>Mes Projets</h1>
      </div>

      <motion.div 
        className={styles.grid}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={styles.projectCard}
            onClick={() => setSelectedProject(project)}
          >
            <div className={styles.imageContainer}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.overlay}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <div className={styles.tags}>
                {project.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag.icon} {tag.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      <div 
        className={`${styles.modalOverlay} ${selectedProject ? styles.active : ''}`}
        onClick={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <motion.div 
            className={styles.modal}
            onClick={e => e.stopPropagation()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
              <button 
                className={styles.closeButton}
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
            </div>
            <div className={styles.modalContent}>
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={800}
                height={400}
                className={styles.modalImage}
              />
              <div className={styles.tags}>
                {selectedProject.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag.icon} {tag.text}
                  </span>
                ))}
              </div>
              <p className={styles.description}>
                {selectedProject.longDescription}
              </p>
              <a 
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
              >
                Voir le projet
                <span>→</span>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
