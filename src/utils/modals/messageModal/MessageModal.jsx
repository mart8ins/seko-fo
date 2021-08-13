import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import "./messageModal.css";
// HOOKS
import useSendMessage from "../../../hooks/useSendMessage";

const MessageModal = ({ userId, firstName, lastName }) => {
    const { sendMessage, setMessageText, messageData, setMessageData, messageSentSuccess } = useSendMessage(userId, firstName, lastName);

    // HANDLE MESSAGE SENDING
    const handleChange = (e) => {
        setMessageText(e.target.value);
    }

    const hideMessageModal = () => {
        setMessageData({
            ...messageData,
            show: false
        })
    }
    const content = <div>
        <div className="message__modal__overlay" onClick={hideMessageModal}></div>
        <div className="message__modal">
            <div>
                <h4 className="message__modal__name">{firstName} {lastName} <span onClick={hideMessageModal} className="message__modal__close">X</span></h4>
            </div>
            {!messageSentSuccess ?
                <div className="message__modal__send">
                    <textarea onChange={handleChange} name="message"></textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
                :
                <div className="message__sent__success">
                    <h2>Message sent</h2>
                    <Link to="/messages" onClick={hideMessageModal}>See full converstation</Link>
                </div>
            }

        </div>
    </div>



    return ReactDOM.createPortal(content, document.getElementById("modal"));
}

export default MessageModal;