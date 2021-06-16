import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";
import Signup from "../../navigation/Signup";
import Login from "../../navigation/Login";


const ModalOverlay = (props) => {
    let authOption = props.authOption; // if true user choose login, false - signup

    let content = <div className="modal__overlay">
        <div>
            {authOption ? <Login /> : <Signup />}
        </div>
    </div>

    return ReactDOM.createPortal(content, document.getElementById("modal"))
}


const Modal = (props) => {
    return <ModalOverlay {...props} />
}

export default Modal;