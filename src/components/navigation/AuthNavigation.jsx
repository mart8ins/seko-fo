import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./authNavigation.css";
import Modal from "../utils/modal/Modal";

const openAuthModal = (p) => {
    console.log("yes", p)
}


function AuthNavigation() {
    // state for showing modal
    const [showModal, setShowModal] = useState(false);

    // states for choosen option for authentification
    const [wantsLogin, setWantsLogin] = useState(false);

    // function to open modal with Signup component
    const openAuthModalWithSignup = () => {
        if (showModal) return setWantsLogin(false);
        setShowModal(true);
        setWantsLogin(false);
    }
    // function to open modal with Login component
    const openAuthModalWithLogin = () => {
        if (showModal) return setWantsLogin(true);
        setShowModal(true);
        setWantsLogin(true);
    }

    return <div className="auth-container">
        {showModal && <Modal authOption={wantsLogin} />}
        <div className="not-logged-in">
            <NavLink onClick={openAuthModalWithLogin} activeStyle={{ color: "rgb(204, 245, 110)" }} to="/login">Login</NavLink>
            <NavLink onClick={openAuthModalWithSignup} activeStyle={{ color: "rgb(204, 245, 110)" }} to="/register">Register</NavLink>
        </div>
        <div className="logged-in">
            <NavLink activeStyle={{ color: "rgb(204, 245, 110)" }} to="/profile">Profile</NavLink>
            <NavLink activeStyle={{ color: "rgb(204, 245, 110)" }} to="/settings">Settings</NavLink>
            <NavLink exact activeStyle={{ color: "rgb(204, 245, 110)" }} to="/">Logout</NavLink>
        </div>

    </div>
}

export default AuthNavigation;