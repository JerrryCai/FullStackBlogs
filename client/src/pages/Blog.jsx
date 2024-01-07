import React, {useEffect, useState} from 'react';
import BlogHeader from '../components/blog-page/BlogHeader';
import { useParams } from 'react-router-dom';
/**
 * The blog page which shows the articles
 * @return {React.Component}
 */
export default function Blog() {
  const {id} = useParams()
  const [blog, setBlog] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  async function fetchBlog() {
    const response = await fetch(`http://localhost:3000/api/v1/blogs/${id}`)
    const data = await response.json()
    setBlog(data)
    setIsLoading(false)
  }
  
  useEffect(() => {
    fetchBlog()
  }, [id])

  if(isLoading) {
    return <h1>Page Loading</h1>
  }
  console.log(blog);

  return (
    <div>
      <BlogHeader blog={blog}/>
    </div>
  );
}
