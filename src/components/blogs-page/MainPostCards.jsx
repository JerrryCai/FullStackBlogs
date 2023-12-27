import React from 'react';
import styles from './MainPostCards.module.css';
import imagePlaceholder from '../../assets/images/Image-Placeholder.png';
import PostStatus from './PostStatus';
import ReadMoreButton from './ReadMoreButton';
/**
 * The main post cards in blogs page and categories
 * @return {React.Component}
 */
export default function MainPostCards() {
  return (
    <div>
      <img src={imagePlaceholder} alt="blog image" className={styles.image} />
      <div className={styles.container}>
        <div className={styles.status}>
          <PostStatus category="CATEGORY" readingTime={7} />
        </div>

        <h1 className={styles.title}>Blog title heading will go here</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros.
        </p>
      </div>
      <ReadMoreButton />
    </div>
  );
}
