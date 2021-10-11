import React, { useState, useContext } from "react";
import "./signup.css";
import Input from "../utils/formComponents/Input";
import loginUser from "../fetch/auth/Login";
import { AuthContext } from "../context/auth-context";
/* styles used from signup componente, from "./signup" */


const Login = () => {
    const [serverDownError, setServerDownError] = useState("");
    const [formError, setFormError] = useState("");
    const [loginForm, setLoginForm] = useState({});

    const { setAuthData } = useContext(AuthContext);

    const handleChange = (e) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await loginUser(loginForm);
            if (response && response.status === 200) {
                console.log(response, "pie logina")
                setFormError("");
                const tokenExpirationDate = new Date(new Date().getTime() + 1000 * 60 * 60);

                const objectToStore = {
                    token: response.data.token,
                    userId: response.data.userId,
                    email: response.data.email,
                    isLoggedIn: true,
                    showAuthModal: false,
                    expiration: tokenExpirationDate,
                    fullName: response.data.fullName,
                    about: response.data.about,
                    profilePhoto: response.data.photo ? response.data.photo : undefined
                }

                localStorage.setItem("authData", JSON.stringify(objectToStore))
                setAuthData(objectToStore) // set auth status context for the app
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
    }

    return <div className="signup__container">
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
}

export default Login;