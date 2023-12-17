import React from 'react';
import PropTypes from 'prop-types';
import imagePlaceholder from '../../assets/images/Image-Placeholder.png';
import PostStatus from './PostStatus';
import ReadMoreButton from './ReadMoreButton';
/**
 * The post cards with image category title and description
 * @return {React.Component}
 */
export default function BigPostCards({ blog }) {
  if (!blog) {
    return <>content loading...</>;
  }
  return (
    <div>
      <img
        src={imagePlaceholder}
        alt=""
        className="w-full object-cover md:h-[25rem]"
      />
      <div className="md:my-6">
        <div className="mb-4">
          <PostStatus category={blog.category} readingTime={5} />
        </div>
        <h1 className="mb-2 text-2xl font-bold text-text-100 md:text-4xl">
          {blog.title}
        </h1>
        <p className="mb-4 text-base text-text-200 md:m-0">{blog?.content}</p>
      </div>
      <ReadMoreButton id={blog.id} />
    </div>
  );
}

BigPostCards.propTypes = {
  blog: PropTypes.object,
};
