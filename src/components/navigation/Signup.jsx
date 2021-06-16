import React, { useState } from "react";
import Input from "../utils/formComponents/Input";
import "./signup.css";

const Signup = () => {
    const [signupForm, setSignupForm] = useState({})

    const handleChange = (e) => {
        e.preventDefault();
        setSignupForm({
            ...signupForm,
            [e.target.name]: e.target.value
        })

    }
    console.log(signupForm)
    return <div className="signup__container">
        <p className="greeting">Welcome new friend!</p>
        <form>
            <Input onChange={handleChange} type="text" name="firstName" id="firstName" placeholder="First name" required />

            <Input onChange={handleChange} type="text" name="lastName" id="lastName" placeholder="Last name" required />

            <Input onChange={handleChange} type="email" name="email" id="email" placeholder="E-mail" required />

            <Input onChange={handleChange} type="password" name="password" id="password" placeholder="Password" required />

            <button className="signup__btn">Signup</button>

        </form>
    </div>
}

export default Signup;