import React, { useContext } from 'react';
import styles from './HighlightBlogPosts.module.css';
import BigPostCards from './BigPostCards';
import SmallPostCards from './SmallPostCards';
import { BlogsContext } from '../../contexts/blogsContext';
/**
 * The highlight blog posts which shows one big cards and several small cards
 * @return {React.Component}
 */
export default function HighlightBlogPosts() {
  const blogs = useContext(BlogsContext)
  const bigPost = blogs[0]
  const smallPosts = blogs.slice(1, 4)

  const smallPostCards = smallPosts.map(smallPost => <SmallPostCards post={smallPost}/>)

  return (
    <div className={styles.container}>
      <p className={styles.section}>Featured blog posts</p>
      <div className={styles.content}>
        <div className={styles.postContainer}>
          <BigPostCards post={bigPost}/>
        </div>
        <div className={`${styles.smallPostContainer} ${styles.postContainer}`}>
          {smallPostCards}
        </div>
      </div>
    </div>
  );
}
