import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const BlogsContext = createContext();

export const BlogsProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
    <BlogsContext.Provider value={blogs}>{children}</BlogsContext.Provider>
  );
};

export default BlogsContext;

BlogsProvider.propTypes = {
  children: PropTypes.node,
};
