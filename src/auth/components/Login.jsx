import React, { useState } from "react";
import Input from "../../utils/formComponents/Input";
import loginUser from "../Login.js";
/* styles used from signup componente, from "./signup" */


const Login = () => {
    const [formError, setFormError] = useState("");
    const [loginForm, setLoginForm] = useState({});


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
            console.log(response)
            setFormError("");
        } catch (e) {
            setFormError(e.response.data.message);
        }
    }

    return <div className="signup__container">
        <div>
            {formError ? <p className="signupError">{formError}</p> : <p className="greeting">We missed you!</p>}
        </div>
        <form onSubmit={handleSubmit}>
            <Input onChange={handleChange} type="email" name="email" id="email" placeholder="E-mail" required />

            <Input onChange={handleChange} type="password" name="password" id="password" placeholder="Password" required />

            <button className="signup__btn">Login</button>
        </form>
    </div>
}

export default Login;