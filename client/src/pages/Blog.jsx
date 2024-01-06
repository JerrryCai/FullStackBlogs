import React, { useState, useEffect, createContext } from 'react';
import BlogHeader from '../components/blog-page/BlogHeader';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const BlogContext = createContext();
/**
 * The blog page which shows the articles
 * @return {React.Component}
 */
export default function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * 根据给定的ID异步获取博客详情。
   * @param {string} id - 博客的唯一标识符。
   * @return {Promise<Object>} 返回一个承诺，该承诺在解析时包含博客详情对象。
   * @throws {Error} 如果请求失败，则抛出错误。
   */
  async function fetchBlogById(id) {
    return await axios
      .get(`http://localhost:4001/api/v1/blogs/${id}`)
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  }

  useEffect(() => {
    fetchBlogById(id)
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching blog:', error);
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading blog.</div>;
  }

  return (
    <>
      <BlogContext.Provider value={blog}>
        <BlogHeader />
      </BlogContext.Provider>
    </>
  );
}
