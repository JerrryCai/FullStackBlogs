import React, { useState } from 'react';
import { Form, Link } from 'react-router-dom';
import logoImg from '/logo-no-background.png';

/**
 * The login component
 * @return {React.component}
 */

export default function Login() {
    const [loginUser, setLoginUser] = useState({ email: '', password: '' })

    return (
        <div>
            <Link to="/">
                <img src={logoImg} alt="logo" className="h-20" />
            </Link>

                    
            <h1 className="mb-4 text-[3rem] font-bold text-primary-100">Log In</h1>
            <p className="mb-8 text-lg">Lorem ipsum dolor sit amet adipiscing elit.</p>

            <Form>
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    required
                />

                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                />

                <button type="submit">Log in</button>

            </Form>

            <div>
                <p>Don't have an account?</p>
                <Link to="/sign-up">Sign Up</Link>
            </div>
            


        </div>
    )
}