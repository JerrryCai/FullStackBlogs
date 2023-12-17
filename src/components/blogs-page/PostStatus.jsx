import React from 'react';
import PropTypes from 'prop-types';
/**
 * PostStatus component displays the category
 * and estimated reading time of a post.
 * @param {string} category - the category of the post
 * @param {number} readingTime - the reading time of the post
 * @return {React.Component}
 */
export default function PostStatus({ category, readingTime }) {
  return (
    <div className="mt-4 flex items-center gap-4 md:m-0">
      <p className="bg-accent-200 px-2 py-1 text-text-100">{category}</p>
      <p className="text-sm text-text-100">{readingTime} MIN READ</p>
    </div>
  );
}

PostStatus.propTypes = {
  category: PropTypes.string,
  readingTime: PropTypes.number,
};
