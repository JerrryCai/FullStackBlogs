import React from 'react';
import styles from './MainBlogPosts.module.css';
import MainPostCards from './MainPostCards';
/**
 *
 * @return {React.Component}
 */
export default function MainBlogPosts() {
  return (
    <div>
      <p className={styles.cueWords}>Featured blog posts</p>
      <div className={styles.postContainer}>
        <MainPostCards />
        <MainPostCards />

        <MainPostCards />
        <MainPostCards />
        <MainPostCards />
      </div>
    </div>
  );
}
