import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./authModal.css";
import Signup from "../../../auth/components/Signup";
import Login from "../../../auth/components/Login";
import { AuthContext } from "../../../context/auth-context";


const ModalOverlay = (props) => {
    let authOption = props.authOption; // if true user choose login, false - signup

    const { authData, setAuthData } = useContext(AuthContext);

    // to close auth modal when clicking outside the signup/login form
    const closeModalOverlay = () => {
        setAuthData({
            ...authData,
            showAuthModal: false
        })
    }


    let content = <div className="modal__overlay">
        <div onClick={closeModalOverlay} className="toClose__modal__everlay"></div>
        {authOption ? <Login /> : <Signup />}
    </div>

    return ReactDOM.createPortal(content, document.getElementById("modal"))
}


const AuthModal = (props) => {
    return <ModalOverlay {...props} />
}

export default AuthModal;