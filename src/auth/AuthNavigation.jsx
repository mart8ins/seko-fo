import React, { useState, useContext, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./authNavigation.css";
import { AuthContext } from "../context/auth-context";
import { ConnectionsContext } from "../context/connections-context";

import socket from "../socket/socket";

function AuthNavigation() {
    // context for auth
    const { authData, setAuthData, signin, setSignin } = useContext(AuthContext);
    const { setUsersOnline } = useContext(ConnectionsContext);

    const [date, setDate] = useState(new Date().toDateString());
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    });

    const logoutUser = () => {
        socket.emit("USER IS OFFLINE", { userId: authData.userId }, (users) => {
            setUsersOnline(users);
        });
        setAuthData({
            token: null,
            userId: null,
            email: null,
            isLoggedIn: false,
            showAuthModal: false,
        });
        localStorage.removeItem("authData");
    };
    console.log(signin, "?????");
    return (
        <div className="auth-container">
            {!authData.isLoggedIn ? (
                <div className="not-logged-in">
                    <Link className={`authOptions ${!signin && " selectedAuth"}`} onClick={() => setSignin(true)} to="">
                        Login
                    </Link>
                    <Link className={`authOptions ${signin && " selectedAuth"}`} onClick={() => setSignin(false)} to="">
                        Signup
                    </Link>
                </div>
            ) : (
                <div className="logged-in">
                    <div className="user__data">
                        <div className="current__time">
                            {date} <span>{time}</span>
                        </div>
                        <div className="user__name">
                            Logged as <Link to="/settings">{authData.fullName}</Link>
                        </div>
                    </div>
                    <NavLink onClick={logoutUser} exact to="/">
                        Logout
                    </NavLink>
                </div>
            )}
        </div>
    );
}

export default AuthNavigation;
