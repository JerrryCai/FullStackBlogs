import React from 'react';
import styles from './SmallPostCards.module.css';
import imagePlaceholder from '../../assets/images/Image-Placeholder.png';
import PostStatus from './PostStatus';
import ReadMoreButton from './ReadMoreButton';
/**
 * small post cards contain status title and read more
 * @return {React.Component}
 */
export default function SmallPostCards(props) {
  return (
    <div>
      <div className={styles.container}>
        <img src={imagePlaceholder} alt="" className={styles.image} />
        <div>
          <PostStatus category="CATEGORY" readingTime={10} />
          <h1 className={styles.title}>{props.post.title}</h1>
          <ReadMoreButton />
        </div>
      </div>
    </div>
  );
}
