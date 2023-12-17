import React from 'react';
import MainPostCards from './MainPostCards';
/**
 *
 * @return {React.Component}
 */
export default function MainBlogPosts() {
  return (
    <div>
      <p className="text-2xl font-bold leading-[140%] text-accent-100 md:mb-10">
        Featured blog posts
      </p>
      <div className="grid-cols-3 gap-8 md:grid">
        <MainPostCards />
        <MainPostCards />

        <MainPostCards />
        <MainPostCards />
        <MainPostCards />
      </div>
    </div>
  );
}
