import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import "./messageModal.css";
// HOOKS
import useSendMessage from "../../../hooks/useSendMessage";
import { ConnectionsContext } from "../../../context/connections-context";
import { AuthContext } from "../../../context/auth-context";

// validator
import formsValidator from "../../../utils/formComponents/formsValidator";


const MessageModal = ({ userId, firstName, lastName }) => {
    const [text, setText] = useState("");
    const { sendMessage, messageData, setMessageData, messageSentSuccess } = useSendMessage(userId, firstName, lastName);
    const { getAllUsers } = useContext(ConnectionsContext); // after message sent to not connected user, update context to show user in messages
    const { authData } = useContext(AuthContext);

    // state for data validation
    const [validForm, setValidForm] = useState({
        valid: undefined,
        message: ""
    });

    // HANDLE MESSAGE SENDING
    const handleChange = (e) => {
        setText(e.target.value);
    }

    const hideMessageModal = () => {
        setMessageData({
            ...messageData,
            show: false
        })
    }

    const send = async () => {
        const { valid, message } = formsValidator([{ type: "message", payload: text }]);
        if (valid) {
            await sendMessage(text);
            getAllUsers(authData.token);
            setValidForm({
                valid: undefined,
                message: ""
            })
        } else {
            setValidForm({
                valid,
                message
            })
        }

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
                    <button onClick={send}>Send</button>
                    {!validForm.valid && <p class="message__invalid">{validForm.message}</p>}
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