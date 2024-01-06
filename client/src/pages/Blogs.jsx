import React from 'react';
import BlogHeader from '../components/blogs-page/BlogHeader';
import HighlightBlogPosts from '../components/blogs-page/HighlightBlogPosts';
import MainBlogPosts from '../components/blogs-page/MainBlogPosts';
import styles from './Blogs.module.css';
import { BlogsProvider } from '../contexts/BlogsContext';

/**
 * Blogs component
 * @return {React.Component}
 */
export default function Blogs() {
  return (
    <div className={styles.container}>
      <BlogHeader />
      <BlogsProvider>
        <HighlightBlogPosts />
        <MainBlogPosts />
      </BlogsProvider>
    </div>
  );
}
