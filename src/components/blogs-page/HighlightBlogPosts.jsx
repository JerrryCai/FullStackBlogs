import React from 'react';
import styles from './HighlightBlogPosts.module.css';
import BigPostCards from './BigPostCards';
import SmallPostCards from './SmallPostCards';
/**
 * The highlight blog posts which shows one big cards and several small cards
 * @return {React.Component}
 */
export default function HighlightBlogPosts() {
  return (
    <div className={styles.container}>
      <p className={styles.section}>Featured blog posts</p>
      <div className={styles.content}>
        <div className={styles.postContainer}>
          <BigPostCards />
        </div>
        <div className={`${styles.smallPostContainer} ${styles.postContainer}`}>
          {/* TODO: MAPPING FUNCTION, GET DATA FROM BACK-END */}
          <SmallPostCards />
          <SmallPostCards />
          <SmallPostCards />
        </div>
      </div>
    </div>
  );
}
