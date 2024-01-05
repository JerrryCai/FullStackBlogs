import React from 'react';
import styles from './BlogHeader.module.css';

/**
 * The header of blog page
 * @return {React.Component}
 */
export default function BlogHeader() {

  return (
    <div className={styles.container}>
      <p className={styles.section}>Blog</p>
      <h1 className={styles.title}>Describe what your blog is about</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
}
