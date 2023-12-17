import React from 'react';

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
        alt=""
        className="w-full object-cover md:h-[25rem]"
      />
      <div className="md:my-6">
        <div className="mb-4">
          <PostStatus category="CATEGORY" readingTime={5} />
        </div>
        <h1 className="mb-2 text-2xl font-bold text-text-100 md:text-4xl">
          BLOG TITLE HEADING WILL GO HERE
        </h1>
        <p className="mb-4 text-base text-text-200 md:m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros.
        </p>
      </div>
      <ReadMoreButton />
    </div>
  );
}
