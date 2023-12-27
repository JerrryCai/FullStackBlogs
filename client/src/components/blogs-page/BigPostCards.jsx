import React from 'react';
import styles from './BigPostCards.module.css';

import imagePlaceholder from '../../assets/images/Image-Placeholder.png';
import PostStatus from './PostStatus';
import ReadMoreButton from './ReadMoreButton';
/**
 * The post cards with image category title and description
 * @return {React.Component}
 */
export default function BigPostCards() {
  return (
    <div>
      <img
        src={imagePlaceholder}
        alt="image placeholder"
        className={styles.image}
      />
      <div className="md:my-6">
        <div className="mb-4">
          <PostStatus category="CATEGORY" readingTime={5} />
        </div>
        <h1 className={styles.title}>BLOG TITLE HEADING WILL GO HERE</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros.
        </p>
      </div>
      <ReadMoreButton />
    </div>
  );
}
