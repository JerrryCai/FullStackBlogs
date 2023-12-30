import React, { useState } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import styles from './SignUp.module.css';
import imagePlaceholder from '../assets/images/Image-Placeholder.png';
import logoImg from '/logo-no-background.png';
import AuthFormInput from '../components/AuthFormInput';
import { useFormInput } from '../hooks/useFormInput';
import axios from 'axios';
/**
 * The sign up component
 * @return {React.component}
 */
export default function SignUp() {
  const [user, handleChange] = useFormInput({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  /**
   * Handle sign up submit
   * @param {*} event
   */
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:4000/api/v1/register',
        {
          email: user.email,
          password: user.password,
          firstName: user.firstName,
          lastName: user.lastName,
        },
      );
      console.log(response);
      navigate('/');
    } catch (error) {
      console.error('Registration error', error);
      // 检查错误类型并设置适当的错误消息
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data);
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img src={logoImg} alt="logo" className={styles.logo} />
          </Link>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Sign Up</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet adipiscing elit.
          </p>
          <Form onSubmit={handleSubmit} className={styles.form}>
            <AuthFormInput type="email" onChange={handleChange} />
            <AuthFormInput
              type="text"
              name="firstName"
              labelText="first name"
              onChange={handleChange}
            />
            <AuthFormInput
              type="text"
              name="lastName"
              labelText="last name"
              onChange={handleChange}
            />
            <AuthFormInput type="password" onChange={handleChange} />
            <button className={styles.button}>Sign Up</button>
          </Form>
          {errorMessage && (
            <p className={styles.errorMessage}>{errorMessage}</p>
          )}
          <div className={styles.cueWordContainer}>
            <hr className={styles.cueLine} />
            <p>
              Already have an account?
              <span className={styles.cueWord}>
                <Link to="/login" className={styles.loginLink}>
                  Log In
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <img
          src={imagePlaceholder}
          alt="sign up image"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
