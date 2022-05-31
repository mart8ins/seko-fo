import React, { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import "./landingPage.css";
import Login from "../auth/Login";
import Signup from "../auth/Signup";

function LandingPage() {
    const { authData, signin } = useContext(AuthContext);

    return (
        <div className="landing__main__container">
            {!authData.userId && <div className="authentification__container">{signin ? <Login /> : <Signup />}</div>}
        </div>
    );
}

export default LandingPage;
