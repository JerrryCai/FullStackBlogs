import React, { useState } from 'react';
import imagePlaceholder from '../assets/images/Image-Placeholder.png';
import { Form, Link } from 'react-router-dom';
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
    <div className="">
      <div className="md:flex">
        <div className="px-16 md:h-screen md:w-1/2">
          <h1 className="mb-1 py-12 md:mb-20">
            <Link to="/">
              <img src={logoImg} alt="logo" className="h-20" />
            </Link>
          </h1>
          <div className="text-center">
            <h1 className="mb-4 text-[3rem] font-bold text-primary-100">
              Sign Up
            </h1>
            <p className="mb-8 text-lg">
              Lorem ipsum dolor sit amet adipiscing elit.
            </p>
            <Form
              onSubmit={handleSubmit}
              className="flex flex-col items-center justify-center gap-4"
            >
              <label htmlFor="email">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  onChange={handleEmailChange}
                  className="
                  h-12 w-[20rem] border
                  border-primary-200 p-3 placeholder:text-text-100
                  md:w-[30rem]"
                  required
                />
              </label>
              <label htmlFor="password">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  onChange={handlePasswordChange}
                  className="
                  h-12 w-[20rem] border
                   border-primary-200 p-3 placeholder:text-text-100
                  md:w-[30rem]"
                  required
                />
              </label>
              <button
                type="submit"
                className="h-12 w-[20rem]
               bg-primary-200 p-3 md:w-[30rem]"
              >
                Sign Up
              </button>
            </Form>
            <div className="mt-4 flex flex-col items-center">
              <hr
                className="my-4 w-[20rem] border-2
               border-primary-200 md:w-[30rem]"
              />
              <p>
                Already have an account?
                <span className="ml-4">
                  <Link to="/log-in" className="underline underline-offset-4">
                    Log In
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 bg-slate-300 md:mt-0 md:h-screen md:w-1/2">
          <img
            src={imagePlaceholder}
            alt="sign up image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
