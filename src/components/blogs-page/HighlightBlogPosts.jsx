import React from 'react';
import BigPostCards from './BigPostCards';
import SmallPostCards from './SmallPostCards';
/**
 * The highlight blog posts which shows one big cards and several small cards
 * @return {React.Component}
 */
export default function HighlightBlogPosts() {
  return (
    <div className="md:my-20">
      <p className="text-2xl font-bold leading-[140%] text-accent-100 md:mb-10">
        Featured blog posts
      </p>
      <div className="md:flex md:gap-8">
        <div className="md:w-1/2">
          <BigPostCards />
        </div>
        <div className="flex flex-col gap-8 md:w-1/2">
          {/* TODO: MAPPING FUNCTION, GET DATA FROM BACK-END */}
          <SmallPostCards />
          <SmallPostCards />
          <SmallPostCards />
        </div>
      </div>
    </div>
  );
}
