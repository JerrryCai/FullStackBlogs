import React from 'react';
import { Form, Link } from 'react-router-dom';
import styles from './Login.module.css';
import logoImg from '/logo-no-background.png';
import AuthFormInput from '../components/AuthFormInput';
import { useFormInput } from '../hooks/useFormInput';
import AuthFormButton from '../components/AuthFormButton';

/**
 * The login component
 * @return {React.component}
 */
export default function Login() {
  const [user, handleChange] = useFormInput({
    email: '',
    password: '',
  });

  /**
   * handle submit function
   * @param {*} event
   */
  function handleSubmit(event) {
    event.preventDefault();
    console.log(user);
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
          <AuthFormButton>log in</AuthFormButton>
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
