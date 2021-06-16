import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./authNavigation.css";
import Modal from "../utils/modal/Modal";

function AuthNavigation({ showModal, setShowModal }) {
    /* showModal, setShowModal -> state from parent component - Header */

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
            <Link onClick={openAuthModalWithLogin} style={wantsLogin && showModal ? { color: "rgb(204, 245, 110)" } : null} to="">Login</Link>
            <Link onClick={openAuthModalWithSignup} style={!wantsLogin && showModal ? { color: "rgb(204, 245, 110)" } : null} to="">Signup</Link>
        </div>
        <div className="logged-in">
            <NavLink activeStyle={{ color: "rgb(204, 245, 110)" }} to="/profile">Profile</NavLink>
            <NavLink activeStyle={{ color: "rgb(204, 245, 110)" }} to="/settings">Settings</NavLink>
            <NavLink exact activeStyle={{ color: "rgb(204, 245, 110)" }} to="/">Logout</NavLink>
        </div>

    </div>
}

export default AuthNavigation;