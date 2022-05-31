import React, { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { Redirect } from "react-router-dom";
import "./landingPage.css";
import Login from "../auth/Login";
import Signup from "../auth/Signup";

function LandingPage() {
    const { authData, signin } = useContext(AuthContext);

    return (
        <div className="landing__main__container">
            {!authData.userId && <div className="authentification__container">{signin ? <Login /> : <Signup />}</div>}
            {authData.userId && <Redirect to="/contentFeed" />}
        </div>
    );
}

export default LandingPage;
