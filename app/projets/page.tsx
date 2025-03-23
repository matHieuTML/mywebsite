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

// Importation des projets depuis le fichier JSON
import projectsData from '@/public/data/projects.json'
const projects: Project[] = projectsData.projects

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
                src={project.image === 'placeholder' ? '/images/placeholder.png' : project.image}
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
                src={selectedProject.image === 'placeholder' ? '/images/placeholder.png' : selectedProject.image}
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
              {selectedProject.url === 'coming_soon' ? (
                <div className={styles.comingSoon}>
                  ✨ Bientôt disponible
                </div>
              ) : (
                <a 
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaButton}
                >
                  Voir le projet
                  <span>→</span>
                </a>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
