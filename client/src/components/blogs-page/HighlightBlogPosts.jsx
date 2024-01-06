import React, { useContext } from 'react';
import styles from './HighlightBlogPosts.module.css';
import BigPostCards from './BigPostCards';
import SmallPostCards from './SmallPostCards';
import BlogsContext from '../../contexts/BlogsContext';
/**
 * The highlight blog posts which shows one big cards and several small cards
 * @return {React.Component}
 */
export default function HighlightBlogPosts() {
  const blogs = useContext(BlogsContext);
  const smallPosts = blogs.slice(1, 4);

  return (
    <div className={styles.container}>
      <p className={styles.section}>Featured blog posts</p>
      <div className={styles.content}>
        <div className={styles.postContainer}>
          <BigPostCards />
        </div>
        <div className={`${styles.smallPostContainer} ${styles.postContainer}`}>
          {smallPosts.map((smallPost) => (
            <SmallPostCards
              key={smallPost.id}
              content={smallPost}
              id={smallPost.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
