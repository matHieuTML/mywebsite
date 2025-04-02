'use client';

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './page.module.css'
import Testimonials from './Testimonials'

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

const getProjectById = (id: number) => {
  return projects.find(p => p.id === id) || null;
};

const getRandomProject = (exclude?: number) => {
  const availableProjects = exclude ? projects.filter(p => p.id !== exclude) : projects;
  const randomIndex = Math.floor(Math.random() * availableProjects.length);
  return availableProjects[randomIndex];
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [featuredProject, setFeaturedProject] = useState<Project>(getRandomProject())

  useEffect(() => {
    // Récupérer l'ID depuis l'URL
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');
    
    if (projectId) {
      const project = getProjectById(parseInt(projectId));
      if (project) {
        setFeaturedProject(project);
      } else {
        setFeaturedProject(getRandomProject());
      }
    } else {
      setFeaturedProject(getRandomProject());
    }
  }, [])

  useEffect(() => {
    // Change le projet toutes les minutes
    const interval = setInterval(() => {
      setFeaturedProject(prev => getRandomProject(prev.id));
    }, 60000);

    return () => clearInterval(interval);
  }, []);

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

      {/* Projet vedette avec rotation */}
      <div className={styles.featuredContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={featuredProject.id}
            className={styles.featuredProject}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ 
              duration: 0.5,
              ease: "easeInOut"
            }}
          >
            <div className={styles.featuredContent}>
              <motion.h2 
                className={styles.featuredTitle}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {featuredProject.title}
              </motion.h2>
              <motion.div 
                className={styles.tags}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {featuredProject.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>{tag.icon} {tag.text}</span>
                ))}
              </motion.div>
              <motion.div 
                className={styles.featuredDescription}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p>{featuredProject.longDescription}</p>
                {featuredProject.id === 5 && (
                  <motion.div 
                    className={styles.awardBadge}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    ⭐ Coup de cœur du public
                  </motion.div>
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {featuredProject.url === 'coming_soon' ? (
                  <span className={styles.comingSoon}>Bientôt disponible</span>
                ) : (
                  <a 
                    href={featuredProject.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.link}
                  >
                    Voir le projet →
                  </a>
                )}
              </motion.div>
            </div>
            <div className={styles.featuredImage}>
              <Image
                src={featuredProject.url === 'coming_soon' ? '/images/placeholder.png' : featuredProject.image}
                alt={featuredProject.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
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
              <div className={styles.modalTagsContainer}>
                {selectedProject.tags.map((tag, index) => (
                  <span key={index} className={styles.modalTag}>
                    {tag.icon} {tag.text}
                  </span>
                ))}
              </div>
              {selectedProject.id === 5 && (
                <div className={styles.modalAwardContainer}>
                  <motion.div 
                    className={`${styles.awardBadge} ${styles.modalAwardBadge}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    ⭐ Coup de cœur du public
                  </motion.div>
                </div>
              )}
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
      <Testimonials />
    </motion.div>
  )
}
