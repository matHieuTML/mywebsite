'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './page.module.css'

const skills = [
  { name: 'Next.js', level: 'Avancé' },
  { name: 'React', level: 'Avancé' },
  { name: 'CMS', level: 'Intermédiaire' },
  { name: 'Django', level: 'Avancé' },
  { name: 'Angular', level: 'Intermédiaire' },
  { name: 'Symfony', level: 'Intermédiaire' }
]

export default function About() {
  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.content}>
        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/mathieu.jpg"
            alt="Mathieu Gaucher"
            fill
            className={styles.image}
            priority
          />
        </motion.div>

        <motion.div 
          className={styles.textContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={styles.title}>À propos de moi</h1>
          <p className={styles.description}>
            Je suis un développeur web passionné avec 4 années d&apos;expérience dans la création de solutions digitales sur mesure. Actuellement étudiant à Digital Campus Paris, je combine mes études avec une activité de freelance pour offrir des services de développement web de qualité.
          </p>
          <p className={styles.description}>
            Ma passion pour le développement web et mon engagement constant dans l&apos;apprentissage de nouvelles technologies me permettent de proposer des solutions modernes et efficaces à mes clients.
          </p>

          <h2 className={styles.skillsTitle}>Mes compétences techniques</h2>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillCard}>
                <h3 className={styles.skillName}>{skill.name}</h3>
                <p className={styles.skillLevel}>{skill.level}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
