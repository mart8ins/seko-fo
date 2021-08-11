import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from 'uuid';
import "./messageModal.css";
// CONTEXT
import { MessageContext } from "../../../context/message-context";
import { AuthContext } from "../../../context/auth-context";
// HOOKS
import useConnectionStatus from "../../../hooks/useConnectionStatus";
import { sendMessageToUser } from "../../../fetch/users/users";

const MessageModal = ({ userId, firstName, lastName }) => {
    const [messageSentSuccess, setMessageSentSuccess] = useState(false);
    const { authData } = useContext(AuthContext);
    const { messageModalContext, setMessageModalContext } = useContext(MessageContext);

    const [messageText, setMessageText] = useState("");

    // CREATING MESSAGE OBJECT WITH MESSAGE AND USER DATA
    const { isConnected } = useConnectionStatus(userId, authData.userId, authData.token);

    const messageObj = {
        message: {
            id: uuidv4(),
            text: messageText,
            date: Date.now(),
            type: "sent",
            isRead: false
        },
        user: {
            userId: userId,
            firstName,
            lastName,
            isConnected
        }
    }


    // HANDLE MESSAGE SENDING
    const handleChange = (e) => {
        setMessageText(e.target.value);
    }
    const sendMessage = async () => {
        const res = await sendMessageToUser(authData.token, messageObj);
        console.log(res.data)
        setMessageText("");
        setMessageSentSuccess(true);
    }
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