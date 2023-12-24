import React, { useState } from 'react';
import { Form, Link } from 'react-router-dom';
import logoImg from '/logo-no-background.png';

/**
 * The login component
 * @return {React.component}
 */

export default function Login() {
    const [loginUser, setLoginUser] = useState({ email: '', password: '' })

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
        <div className="flex items-center justify-center min-h-screen">
        <div className="px-16 md:h-screen">
            <h1 className="mb-1 py-12 md:mb-20">
                <Link to="/">
                    <img src={logoImg} alt="logo" className="h-20" />
                </Link>
            </h1>
            <div className="text-center">
                <h1 className="mb-4 text-[3rem] font-bold text-primary-100">
                    Log In
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
                Log In
                </button>
            </Form>
            <div className="mt-4 flex flex-col items-center">
                <hr
                className="my-4 w-[20rem] border-2
                border-primary-200 md:w-[30rem]"
                />
                <p>
                Don't have an account?
                <span className="ml-4">
                    <Link to="/sign-up" className="underline underline-offset-4">
                    Sign Up
                    </Link>
                </span>
                </p>
            </div>
            </div>
        </div>
        </div>
      );
}