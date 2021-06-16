import React, { useState } from "react";
import Input from "../utils/formComponents/Input";

/* styles used from signup componente, from "./signup" */

const Login = () => {

    return <div className="signup__container">
        <p className="greeting">We missed you!</p>
        <form>
            <Input type="email" name="email" id="email" placeholder="E-mail" />

            <Input type="password" name="password" id="password" placeholder="Password" />

            <Input type="button" name="button" id="button" value="Signup" />
        </form>
    </div>
}

export default Login;