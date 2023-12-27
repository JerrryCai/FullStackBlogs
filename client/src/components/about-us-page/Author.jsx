import React from 'react';
import { FaLinkedin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import imagePlaceholder from '../../assets/images/Image-Placeholder.png';
import styles from './Author.module.css';
/**
 * The author component in about us page
 * @return {React.Component}
 */
export default function Author() {
  return (
    <div className={styles.container}>
      <img src={imagePlaceholder} alt="avatar" className={styles.image} />
      <div className={styles.informationContainer}>
        <div className={styles.information}>
          <p className={styles.fullName}>FULL NAME</p>
          <p className={styles.jobTitle}>JOB TITLE</p>
        </div>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>
      <div className={styles.iconContainer}>
        <button>
          <FaLinkedin size={24} />
        </button>
        <button>
          <MdEmail size={28} />
        </button>
      </div>
    </div>
  );
}
