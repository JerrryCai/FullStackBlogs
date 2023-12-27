import React from 'react';
import Author from '../components/about-us-page/Author';
import styles from "./AboutUs.module.css"
/**
 * The about us page
 * @return {React.Component}
 */
export default function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Our Team</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className={styles.cardContainer}>
        <Author />
        <Author />
      </div>
    </div>
  );
}
