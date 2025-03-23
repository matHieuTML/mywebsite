import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './testimonials.module.css';

interface Avis {
  id: number;
  nom: string;
  titre: string;
  content: string;
  image: string;
}

export default function Testimonials() {
  const [avis, setAvis] = useState<Avis[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/data/avis.json')
      .then(res => res.json())
      .then(data => setAvis(data.avis));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % avis.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [avis.length]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  if (!avis.length) return null;

  return (
    <section className={styles.testimonials}>
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Témoignages
      </motion.h2>
      <motion.p
        className={styles.description}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Découvrez ce que mes collègues et collaborateurs disent de mon travail et de ma personnalité
      </motion.p>

      <div className={styles.container}>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            className={styles.testimonial}
            custom={(currentIndex - 1) % avis.length}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.5, ease: "easeInOut" },
              opacity: { duration: 0.5 }
            }}
          >
            <div className={styles.content}>
              {avis[currentIndex].content}
            </div>
            
            <div className={styles.author}>
              <div className={styles.imageContainer}>
                <Image
                  src={avis[currentIndex].image}
                  alt={avis[currentIndex].nom}
                  width={56}
                  height={56}
                  className={styles.image}
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>{avis[currentIndex].nom}</div>
                <div className={styles.titre}>{avis[currentIndex].titre}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles.navigation}>
        {avis.map((_, index) => (
          <motion.div
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </section>
  );
}
