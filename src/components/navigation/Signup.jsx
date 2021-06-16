import React, { useState } from "react";
import Input from "../utils/formComponents/Input";
import "./signup.css";

const Signup = () => {

    return <div className="signup__container">
        <p className="greeting">Welcome new friend!</p>
        <form>
            <Input type="text" name="firstName" id="firstName" placeholder="First name" />

            <Input type="text" name="lastName" id="lastName" placeholder="Last name" />

            <Input type="email" name="email" id="email" placeholder="E-mail" />

            <Input type="password" name="password" id="password" placeholder="Password" />

            <Input type="button" name="button" id="button" value="Signup" />
        </form>
    </div>
}

export default Signup;