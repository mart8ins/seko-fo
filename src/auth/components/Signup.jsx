import React, { useState } from "react";
import Input from "../../utils/formComponents/Input";
import "./signup.css";
import signupUser from "../Signup.js";

const Signup = () => {
    const [formError, setFormError] = useState("");
    const [signupForm, setSignupForm] = useState({})

    const handleChange = (e) => {
        setSignupForm({
            ...signupForm,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await signupUser(signupForm);
            console.log(response)
            setFormError("");
        } catch (e) {
            setFormError(e.response.data.message);
        }

    }


    return <div className="signup__container">
        <div>
            {formError ? <p className="signupError">{formError}</p> : <p className="greeting">Welcome new friend!</p>}
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