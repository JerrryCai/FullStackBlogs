import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogHeader from '../components/blogs-page/BlogHeader';
import HighlightBlogPosts from '../components/blogs-page/HighlightBlogPosts';
import MainBlogPosts from '../components/blogs-page/MainBlogPosts';

/**
 * Blogs component
 * @return {React.Component}
 */
export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('http://localhost:4000/api/v1/blogs')
      .then((response) => {
        setBlogs(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('There was a problem with the axios operation:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="px-8 py-14 md:px-16 md:py-28">
      <BlogHeader />
      {isLoading ? (
        <>
          <h1>content loading</h1>
        </>
      ) : (
        <>
          <HighlightBlogPosts blogs={blogs} />
          <MainBlogPosts />
        </>
      )}
    </div>
  );
}
