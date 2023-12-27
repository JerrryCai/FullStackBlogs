import React from 'react';
import { Form, Link } from 'react-router-dom';
import styles from './SignUp.module.css';
import imagePlaceholder from '../assets/images/Image-Placeholder.png';
import logoImg from '/logo-no-background.png';
import AuthFormInput from '../components/AuthFormInput';
import { useFormInput } from '../hooks/useFormInput';
import AuthFormButton from '../components/AuthFormButton';
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
            <AuthFormButton>sign up</AuthFormButton>
          </Form>
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
