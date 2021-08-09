import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./messageModal.css";
import { MessageContext } from "../../../context/message-context";

const MessageModal = ({ userId, firstName, lastName }) => {
    const { messageModalContext, setMessageModalContext } = useContext(MessageContext);


    const hideMessageModal = () => {
        setMessageModalContext({
            ...messageModalContext,
            show: false
        })
    }

    const content = <div>
        <div className="message__modal__overlay" onClick={hideMessageModal}></div>
        <div className="message__modal">
            <div>
                <h4 className="message__modal__name">{firstName} {lastName} <span onClick={hideMessageModal} className="message__modal__close">X</span></h4>
            </div>
            <div className="message__modal__send">
                <textarea name="message"></textarea>
                <button>Send</button>
            </div>
        </div>
    </div>



    return ReactDOM.createPortal(content, document.getElementById("modal"));
}

export default MessageModal;