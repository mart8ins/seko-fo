import React, { useState, useContext } from "react";
import Input from "../utils/formComponents/Input";
import "./signup.css";
import signupUser from "../fetch/auth/Signup";

import { AuthContext } from "../context/auth-context";
import { ConnectionsContext } from "../context/connections-context";

import socket from "../socket/socket";

const Signup = () => {
    const [serverDownError, setServerDownError] = useState("");
    const [formError, setFormError] = useState("");
    const [signupForm, setSignupForm] = useState({});

    const { authData, setAuthData } = useContext(AuthContext);
    const { setUsersOnline } = useContext(ConnectionsContext);

    // handle signup form data change
    const handleChange = (e) => {
        setSignupForm({
            ...signupForm,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await signupUser(signupForm); // post data to backend
            if (response && response.status === 200) {
                setFormError("");
                const tokenExpirationDate = new Date(new Date().getTime() + 1000 * 60 * 60);

                setTimeout(() => {
                    logoutUser();
                }, (1000 * 60 * 60));

                const objectToStore = {
                    token: response.data.token,
                    userId: response.data.userId,
                    email: response.data.email,
                    isLoggedIn: true,
                    showAuthModal: false,
                    expiration: tokenExpirationDate,
                    fullName: response.data.fullName,
                    about: "",
                    profilePhoto: undefined
                }

                localStorage.setItem("authData", JSON.stringify(objectToStore))
                setAuthData(objectToStore);
            } else {
                setServerDownError("Something went wrong, please try again later.")
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
            setUsersOnline(users)
        });
        setAuthData({
            token: null,
            userId: null,
            email: null,
            isLoggedIn: false,
            showAuthModal: false
        })
        localStorage.removeItem("authData");
    };


    return <div className="signup__container">
        <div>
            {formError ? <p className="signupError">{formError}</p> : <p className="greeting">Welcome new friend!</p>}
            {serverDownError && <p className="serverError">{serverDownError}</p>}
        </div>


        <form onSubmit={submitHandler}>
            <Input onChange={handleChange} type="text" name="firstName" id="firstName" placeholder="First name" required />

            <Input onChange={handleChange} type="text" name="lastName" id="lastName" placeholder="Last name" required />

            <Input onChange={handleChange} type="email" name="email" id="email" placeholder="E-mail" required />

            <Input onChange={handleChange} type="password" name="password" id="password" placeholder="Password" required />

            <button className="signup__btn">Signup</button>

        </form>
    </div>
}

export default Signup;