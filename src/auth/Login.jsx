import React, { useState, useContext } from "react";
import "./signup.css";
import Input from "../utils/formComponents/Input";
import loginUser from "../fetch/auth/Login";
import { AuthContext } from "../context/auth-context";
import { ConnectionsContext } from "../context/connections-context";

import socket from "../socket/socket";

const Login = () => {
    const [serverDownError, setServerDownError] = useState("");
    const [formError, setFormError] = useState("");
    const [loginForm, setLoginForm] = useState({});

    const { authData, setAuthData } = useContext(AuthContext);
    const { setUsersOnline } = useContext(ConnectionsContext);

    const handleChange = (e) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const response = await loginUser(loginForm);
            if (response && response.status === 200) {
                setFormError("");
                const tokenExpirationDate = new Date(new Date().getTime() + 1000 * 60 * 60);

                setTimeout(() => {
                    logoutUser();
                }, 1000 * 60 * 60);

                const objectToStore = {
                    token: response.data.token,
                    userId: response.data.userId,
                    email: response.data.email,
                    isLoggedIn: true,
                    expiration: tokenExpirationDate,
                    fullName: response.data.fullName,
                    about: response.data.about,
                    profilePhoto: response.data.photo ? response.data.photo : undefined,
                };

                localStorage.setItem("authData", JSON.stringify(objectToStore));
                setAuthData(objectToStore); // set auth status context for the app

                socket.emit("USER IS ONLINE", { userId: String(response.data.userId) }, (users) => {
                    setUsersOnline(users);
                });
            } else {
                setServerDownError("Something went wrong, please try again later.");
            }
        } catch (e) {
            if (e.response) {
                setFormError(e.response.data.message);
            } else {
                setServerDownError("Server is down, please try again later.");
            }
        }
    };

    // to logout user
    const logoutUser = () => {
        socket.emit("USER IS OFFLINE", { userId: authData.userId }, (users) => {
            setUsersOnline(users);
        });
        setAuthData({
            token: null,
            userId: null,
            email: null,
            isLoggedIn: false,
        });
        localStorage.removeItem("authData");
    };

    return (
        <div className="signup__container">
            <div>
                {formError ? <p className="signupError">{formError}</p> : <p className="greeting">We missed you!</p>}
                {serverDownError && <p className="serverError">{serverDownError}</p>}
            </div>
            <form onSubmit={handleSubmit}>
                <Input onChange={handleChange} type="email" name="email" id="email" placeholder="E-mail" required />

                <Input onChange={handleChange} type="password" name="password" id="password" placeholder="Password" required />

                <button className="signup__btn">Login</button>
            </form>
        </div>
    );
};

export default Login;
