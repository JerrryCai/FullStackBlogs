import React, { useState } from 'react';
import { Form, Link } from 'react-router-dom';
import styles from './Login.module.css';
import logoImg from '/logo-no-background.png';

/**
 * The login component
 * @return {React.component}
 */
export default function Login() {
  const [loginUser, setLoginUser] = useState({ email: '', password: '' });
  /**
   * handles the email
   * @param {*} event
   */
  function handleEmailChange(event) {
    setLoginUser((prevUser) => ({ ...prevUser, email: event.target.value }));
  }

  function handlePasswordChange(event) {
    setLoginUser((prevUser) => ({ ...prevUser, password: event.target.value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(loginUser);
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
        <Form
          onSubmit={handleSubmit}
          className={styles.form}
        >
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              placeholder="Email"
              onChange={handleEmailChange}
              className={styles.input}
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={handlePasswordChange}
              className={styles.input}
              required
            />
          </label>
          <button
            type="submit"
            className={styles.button}
          >
            Log In
          </button>
        </Form>
        <div className={styles.cueWordContainer}>
          <hr className={styles.cueLine}/>
          <p>
            Don't have an account?
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
