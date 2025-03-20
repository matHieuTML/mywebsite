import React from 'react';
import { useTime } from 'framer-motion';
import InfiniteBanner from './InfiniteBanner';
import Image from 'next/image';
import styles from './ProjectsBanner.module.css';

const projects1 = [
  { id: 1, image: '/images/projets/site-2.png', title: 'E-commerce Platform' },
  { id: 2, image: '/images/projets/site-4.jpeg', title: 'Portfolio Website' },
  { id: 3, image: '/images/projets/site-5.jpeg', title: 'Business Landing Page' },
  { id: 4, image: '/images/projets/site-7.jpeg', title: 'Restaurant Website' },
  { id: 5, image: '/images/projets/site-8.png', title: 'Tech Blog' },
  { id: 6, image: '/images/projets/site-10.jpeg', title: 'Agency Website' },
  { id: 7, image: '/images/projets/site-11.jpeg', title: 'Personal Blog' },
  { id: 8, image: '/images/projets/site-13.jpeg', title: 'Creative Portfolio' },
];

const projects2 = [
  { id: 1, image: '/images/projets/site-13.jpeg', title: 'Creative Portfolio' },
  { id: 2, image: '/images/projets/site-11.jpeg', title: 'Personal Blog' },
  { id: 3, image: '/images/projets/site-10.jpeg', title: 'Agency Website' },
  { id: 4, image: '/images/projets/site-8.png', title: 'Tech Blog' },
  { id: 5, image: '/images/projets/site-7.jpeg', title: 'Restaurant Website' },
  { id: 6, image: '/images/projets/site-5.jpeg', title: 'Business Landing Page' },
  { id: 7, image: '/images/projets/site-4.jpeg', title: 'Portfolio Website' },
  { id: 8, image: '/images/projets/site-2.png', title: 'E-commerce Platform' },
];

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
                      src={project.image}
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
                      src={project.image}
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
