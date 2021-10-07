import React, { useState, useContext, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./authNavigation.css";
import AuthModal from "../utils/modals/authModal/AuthModal";
import { AuthContext } from "../context/auth-context";
import { ConnectionsContext } from "../context/connections-context";

import socket from "../socket/socket";


function AuthNavigation() {
    // context for auth
    const { authData, setAuthData } = useContext(AuthContext);
    const { setUsersOnline } = useContext(ConnectionsContext);

    const [date, setDate] = useState(new Date().toDateString());
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    })

    // states for choosen option for authentification SIGNUP OR LOGIN
    const [wantsLogin, setWantsLogin] = useState(false);

    // function to open modal with Signup component
    const openAuthModalWithSignup = () => {
        setAuthData({
            ...authData,
            showAuthModal: true
        })
        setWantsLogin(false);
    }
    // function to open modal with Login component
    const openAuthModalWithLogin = () => {
        setAuthData({
            ...authData,
            showAuthModal: true
        })
        setWantsLogin(true);
    }

    const logoutUser = () => {
        socket.emit("USER IS OFFLINE", { userId: authData.userId }, (users) => {
            setUsersOnline(users)
        });
        setAuthData({
            token: null,
            userId: null,
            email: null,
            isLoggedIn: false,
            showAuthModal: false
        })
        localStorage.removeItem("authData");

    }

    return <div className="auth-container">
        {authData.showAuthModal && <AuthModal authOption={wantsLogin} />}
        {!authData.isLoggedIn ? <div className="not-logged-in">
            <Link onClick={openAuthModalWithLogin} style={wantsLogin && authData.showAuthModal ? { color: "rgb(204, 245, 110)" } : null} to="">Login</Link>
            <Link onClick={openAuthModalWithSignup} style={!wantsLogin && authData.showAuthModal ? { color: "rgb(204, 245, 110)" } : null} to="">Signup</Link>
        </div>
            :
            <div className="logged-in">
                <div className="user__data">
                    <div className="current__time">{date} <span>{time}</span></div>
                    <div className="user__name">Logged as <span>{authData.fullName}</span></div>
                </div>
                <NavLink onClick={logoutUser} exact to="/">Logout</NavLink>
            </div>
        }
    </div>
}

export default AuthNavigation;