import React, { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import "./authNavigation.css";
import AuthModal from "../../utils/modals/authModal/AuthModal";
import { AuthContext } from "../../context/auth-context";


function AuthNavigation() {
    // context for auth
    const { authData, setAuthData } = useContext(AuthContext);

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
                <NavLink onClick={logoutUser} exact to="/">Logout</NavLink>
            </div>
        }
    </div>
}

export default AuthNavigation;