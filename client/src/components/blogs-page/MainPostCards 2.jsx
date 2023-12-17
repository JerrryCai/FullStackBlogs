import React from 'react';
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
      <img
        src={imagePlaceholder}
        alt="blog image"
        className="h-[18.75rem] w-full object-cover"
      />
      <div className="my-6">
        <div className="mb-4">
          <PostStatus category="CATEGORY" readingTime={7} />
        </div>

        <h1 className="mb-2 text-2xl font-bold text-text-100">
          Blog title heading will go here
        </h1>
        <p className="text-base text-text-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros.
        </p>
      </div>
      <ReadMoreButton />
    </div>
  );
}
