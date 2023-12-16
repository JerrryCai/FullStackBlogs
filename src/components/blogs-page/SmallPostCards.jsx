import React from 'react';
import imagePlaceholder from '../../assets/images/Image-Placeholder.png';
import PostStatus from './PostStatus';
import ReadMoreButton from './ReadMoreButton';
/**
 * small post cards contain status title and read more
 * @return {React.Component}
 */
export default function SmallPostCards() {
  return (
    <div>
      <div className="mt-8 items-center gap-6 md:m-0 md:flex">
        <img
          src={imagePlaceholder}
          alt=""
          className="
          h-auto w-full object-cover md:h-[15.625rem] md:w-[15.625rem]"
        />
        <div>
          <PostStatus category="CATEGORY" readingTime={10} />
          <h1 className="my-4 text-2xl font-bold text-text-100">
            Blog title heading will go here
          </h1>
          <ReadMoreButton />
        </div>
      </div>
    </div>
  );
}
