import React, { useContext } from 'react';
import styles from './BigPostCards.module.css';

import imagePlaceholder from '../../assets/images/Image-Placeholder.png';
import PostStatus from './PostStatus';
import ReadMoreButton from './ReadMoreButton';
import BlogsContext from '../../contexts/BlogsContext';
/**
 * The post cards with image category title and description
 * @return {React.Component}
 */
export default function BigPostCards() {
  const blogs = useContext(BlogsContext);
  const firstBlog = blogs[0];

  return (
    <div>
      <img
        src={imagePlaceholder}
        alt="image placeholder"
        className={styles.image}
      />
      <div className="md:my-6">
        <div className="mb-4">
          <PostStatus category={firstBlog.category} readingTime={5} />
        </div>
        <h1 className={styles.title}>{firstBlog.title}</h1>
        <p className={styles.description}>{firstBlog.content}</p>
      </div>
      <ReadMoreButton id={firstBlog.id} />
    </div>
  );
}
