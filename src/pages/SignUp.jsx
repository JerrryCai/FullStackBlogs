import React, { useState } from 'react';
import { Form, Link } from 'react-router-dom';
import styles from "./SignUp.module.css";
import imagePlaceholder from '../assets/images/Image-Placeholder.png';
import logoImg from '/logo-no-background.png';
/**
 * The sign up component
 * @return {React.component}
 */
export default function SignUp() {
  const [user, setUser] = useState({ email: '', password: '' });
  /**
   * handle email change
   * @param {*} event
   */
  function handleEmailChange(event) {
    setUser((prevUser) => ({ ...prevUser, email: event.target.value }));
  }
  /**
   * handle password change
   * @param {*} event
   */
  function handlePasswordChange(event) {
    setUser((prevUser) => ({ ...prevUser, password: event.target.value }));
  }
  /**
   * Handle sign up submit
   * @param {*} event
   */
  function handleSubmit(event) {
    event.preventDefault();
    console.log(user);
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
          <h1 className={styles.title}>
            Sign Up
          </h1>
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
                required
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
              Sign Up
            </button>
          </Form>
          <div className={styles.cueWordContainer}>
            <hr className={styles.cueLine}/>
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
