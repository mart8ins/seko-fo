import React from "react";
import ReactDOM from "react-dom";
import "./authModal.css";
import Signup from "../../../auth/components/Signup";
import Login from "../../../auth/components/Login";


const ModalOverlay = (props) => {
    let authOption = props.authOption; // if true user choose login, false - signup

    let content = <div className="modal__overlay">
        {authOption ? <Login /> : <Signup />}
    </div>

    return ReactDOM.createPortal(content, document.getElementById("modal"))
}


const AuthModal = (props) => {
    return <ModalOverlay {...props} />
}

export default AuthModal;