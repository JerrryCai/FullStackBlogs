import React from 'react';
import styles from './BigPostCards.module.css';

import imagePlaceholder from '../../assets/images/Image-Placeholder.png';
import PostStatus from './PostStatus';
import ReadMoreButton from './ReadMoreButton';

/**
 * The post cards with image category title and description
 * @return {React.Component}
 */
export default function BigPostCards(props) {

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
        <h1 className={styles.title}>{props.post.title}</h1>
        <p className={styles.description}>
          {props.post.description}
        </p>
      </div>
      <ReadMoreButton />
    </div>
  );
}
