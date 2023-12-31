import React, { createContext, useEffect, useState } from 'react';
import BlogHeader from '../components/blogs-page/BlogHeader';
import HighlightBlogPosts from '../components/blogs-page/HighlightBlogPosts';
import MainBlogPosts from '../components/blogs-page/MainBlogPosts';
import styles from './Blogs.module.css';
import axios from 'axios';

export const BlogsContext = createContext();

/**
 * Blogs component
 * @return {React.Component}
 */
export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null); // 新增错误状态
  const [isLoading, setIsLoading] = useState(true); // 新增加载状态

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4001/api/v1/blogs');
        setBlogs(response.data);
        setIsLoading(false); // 数据加载完毕
      } catch (error) {
        console.error('Error fetching data: ', error);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // 依赖项数组，如果有依赖可以加在这里

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={styles.container}>
      <BlogHeader />
      <BlogsContext.Provider value={blogs}>
        <HighlightBlogPosts />
        <MainBlogPosts />
      </BlogsContext.Provider>
    </div>
  );
}
