import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostStatus.module.css';
/**
 * PostStatus component displays the category
 * and estimated reading time of a post.
 * @param {string} category - the category of the post
 * @param {number} readingTime - the reading time of the post
 * @return {React.Component}
 */
export default function PostStatus({ category, readingTime }) {
  return (
    <div className={styles.container}>
      <p className={styles.category}>{category}</p>
      <p className={styles.readingTime}>{readingTime} MIN READ</p>
    </div>
  );
}

PostStatus.propTypes = {
  category: PropTypes.string,
  readingTime: PropTypes.number,
};
