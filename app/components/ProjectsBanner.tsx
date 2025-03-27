import React from 'react';
import { useTime } from 'framer-motion';
import InfiniteBanner from './InfiniteBanner';
import Image from 'next/image';
import styles from './ProjectsBanner.module.css';
import projectsData from '@/public/data/projects.json';

const allProjects = projectsData.projects;
const projects1 = allProjects.slice(0, Math.floor(allProjects.length / 2));
const projects2 = allProjects.slice(Math.floor(allProjects.length / 2));

const ProjectsBanner = () => {
  const time = useTime();

  return (
    <div className={styles.projectsSection}>
      <p className={styles.projectsOnTitle}>Projets</p>
      <h2 className={styles.projectsTitle}>Découvrez mes dernières réalisations</h2>
      <p className={styles.projectsText}>Des projets uniques et sur mesure pour chacun de mes clients</p>
      
      <div className={styles.bannersWrapper}>
        <div className={styles.bannerContainer}>
          <InfiniteBanner clock={time} loopDuration={30000}>
            <div className={styles.projectsRow}>
              {projects1.map((project) => (
                <div key={project.id} className={styles.projectCard}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={project.url === 'coming_soon' ? '/images/placeholder.png' : project.image}
                      alt={project.title}
                      width={300}
                      height={200}
                      className={styles.projectImage}
                    />
                  </div>
                  <h3>{project.title}</h3>
                </div>
              ))}
            </div>
          </InfiniteBanner>
        </div>

        <div className={styles.bannerContainer + ' ' + styles.reverseBanner}>
          <InfiniteBanner clock={time} loopDuration={30000}>
            <div className={styles.projectsRow}>
              {projects2.map((project) => (
                <div key={project.id} className={styles.projectCard}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={project.url === 'coming_soon' ? '/images/placeholder.png' : project.image}
                      alt={project.title}
                      width={300}
                      height={200}
                      className={styles.projectImage}
                    />
                  </div>
                  <h3>{project.title}</h3>
                </div>
              ))}
            </div>
          </InfiniteBanner>
        </div>
      </div>
    </div>
  );
};

export default ProjectsBanner;
