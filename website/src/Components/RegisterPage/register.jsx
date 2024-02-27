import React, { useState } from 'react';
import '../RegisterPage/register.css';
import loginImage from '../RegisterPage/logo.PNG';
import loginImage2 from '../RegisterPage/logo2.PNG';
import {FaFacebook, FaGoogle, FaApple} from 'react-icons/fa';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Logging in with username:', username, 'and password:', password);
    };

    return (
        <div className={"login-page-container"}>
            <img src={loginImage} alt="Login" className="login-image"/>
            <img src={loginImage2} alt="Login2" className="login-image2"/>
            <div className={"login-page"}>
                <h2>Create an account</h2>
                <form onSubmit={handleLogin}>
                    <div className={"form-group"}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className={"form-group"}>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                    <div className={"social-login"}>
                        <p>Or sign in with</p>
                        <div className={"social-icons"}>
                            <a href={"fb"} className={"social-icon1"}>
                                <FaFacebook/>
                            </a>

                            <a href={"google"} className={"social-icon2"}>
                                <FaGoogle/>
                            </a>

                            <a href={"apple"} className={"social-icon3"}>
                                <FaApple/>
                            </a>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
