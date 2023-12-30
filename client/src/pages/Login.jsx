import React from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import logoImg from '/logo-no-background.png';
import AuthFormInput from '../components/AuthFormInput';
import { useFormInput } from '../hooks/useFormInput';
import axios from 'axios';

/**
 * The login component
 * @return {React.component}
 */
export default function Login() {
  const [user, handleChange] = useFormInput({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  /**
   * handle submit function
   * @param {*} event
   */
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/v1/login', {
        email: user.email,
        password: user.password,
      });
      console.log(response);
      const token = response.data.token;
      if (token) {
        // 将 token 保存到 localStorage
        localStorage.setItem('token', token);
        // 这里也可以进行其他登录后的操作，如更新用户状态等

        navigate('/'); // 登录成功后重定向到首页
      } else {
        // 处理没有收到 token 的情况
      }
    } catch (error) {
      console.error('Login error', error);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Link to="/" className="">
          <img src={logoImg} alt="logo" className={styles.logo} />
        </Link>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Log In</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet adipiscing elit.
        </p>
        <Form onSubmit={handleSubmit} className={styles.form}>
          <AuthFormInput type="email" onChange={handleChange} />
          <AuthFormInput type="password" onChange={handleChange} />
          <button className={styles.button}>Log In</button>
        </Form>
        <div className={styles.cueWordContainer}>
          <hr className={styles.cueLine} />
          <p>
            Not have an account?
            <span className={styles.cueWord}>
              <Link to="/sign-up" className={styles.signUpLink}>
                Sign Up
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
