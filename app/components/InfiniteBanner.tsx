import * as React from "react";
import {
  motion,
  MotionValue,
  useMotionTemplate,
  useTransform
} from "framer-motion";
import styles from './InfiniteBanner.module.css';

interface InfiniteBannerProps extends React.HTMLProps<HTMLDivElement> {
  clock: MotionValue<number>;
  loopDuration?: number;
  children: React.ReactNode;
}

const InfiniteBanner = ({
  clock,
  loopDuration = 22000,
  children,
  ...otherProps
}: InfiniteBannerProps) => {
  const progress = useTransform(
    clock,
    (time) => (time % loopDuration) / loopDuration
  );
  const percentage = useTransform(progress, (t) => t * 100);
  const translateX = useMotionTemplate`-${percentage}%`;
  return (
    <div
      {...otherProps}
      className={styles.bannerWrapper}
    >
      <motion.div style={{ translateX }} className={styles.bannerContent}>
        <div>{children}</div>
        <div className={styles.duplicateContent}>
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default InfiniteBanner;
