import React from 'react';
import BlogHeader from '../components/blogs-page/BlogHeader';
import HighlightBlogPosts from '../components/blogs-page/HighlightBlogPosts';
/**
 * Blogs component
 * @return {React.Component}
 */
export default function Blogs() {
  return (
    <div className="px-8 py-14 md:px-16 md:py-28">
      <BlogHeader />
      <HighlightBlogPosts />
    </div>
  );
}
