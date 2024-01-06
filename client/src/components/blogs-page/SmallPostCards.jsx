import React from 'react';
import PropTypes from 'prop-types';
import styles from './SmallPostCards.module.css';
import imagePlaceholder from '../../assets/images/Image-Placeholder.png';
import PostStatus from './PostStatus';
import ReadMoreButton from './ReadMoreButton';
/**
 * small post cards contain status title and read more
 * @return {React.Component}
 */
export default function SmallPostCards({ content, id }) {
  return (
    <div>
      <div className={styles.container}>
        <img src={imagePlaceholder} alt="" className={styles.image} />
        <div>
          <PostStatus category={content.category} readingTime={10} />
          <h1 className={styles.title}>{content.title}</h1>
          <ReadMoreButton id={id} />
        </div>
      </div>
    </div>
  );
}

SmallPostCards.propTypes = {
  content: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};
