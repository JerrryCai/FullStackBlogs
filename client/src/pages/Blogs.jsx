import React, {useEffect, useState} from 'react';
import BlogHeader from '../components/blogs-page/BlogHeader';
import HighlightBlogPosts from '../components/blogs-page/HighlightBlogPosts';
import MainBlogPosts from '../components/blogs-page/MainBlogPosts';
import styles from './Blogs.module.css';
import { BlogsContext } from '../contexts/blogsContext';
/**
 * Blogs component
 * @return {React.Component}
 */
export default function Blogs() {
  const [blogs, setBlogs] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  async function fetchBlogs() {
    const response = await fetch("http://localhost:3000/api/v1/blogs")
    const data = await response.json()
    setBlogs(data.blogs)
    setIsLoading(false)
  }
  
  useEffect(() => {
    fetchBlogs()
  }, [])

  if(isLoading) {
    return <h1>Page Loading</h1>
  }

  return (
    <div className={styles.container}>
      <BlogsContext.Provider value={blogs}>
        <BlogHeader />
        <HighlightBlogPosts />
        <MainBlogPosts />
      </BlogsContext.Provider>
    </div>
  );
}
