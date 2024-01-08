import React, { useState, useEffect } from 'react';
import { Form } from 'react-router-dom';
import styles from './SharePost.module.css';
/**
 * create post component
 * @return {React.Component}
 */
export default function SharePost() {
  const [username, setUsername] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
    author: { username },
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log(decoded);
        // 假设用户名存储在 JWT 的 'username' 字段中
        setUsername(decoded.firstName);
      } catch (error) {
        // 处理无法解码的 token 或其他错误
        console.error('Error decoding token:', error);
      }
    }
  }, []);

  useEffect(() => {
    // 假设username包含了当前登录用户的信息
    if (username) {
      setFormData((formData) => ({ ...formData, author: username }));
    }
  }, [username]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>create your blog here</h1>
      <Form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formInput}>
          <label className={styles.label}>Blog Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className={styles.inputContainer}
          />
        </div>
        <div className={styles.formInput}>
          <label className={styles.label}>Blog Content:</label>
          <textarea
            type="text"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Content"
            className={styles.textareaContainer}
          />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
