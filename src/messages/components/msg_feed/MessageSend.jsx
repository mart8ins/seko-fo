import React from "react";
import "./messageSend.css";
import useSendMessage from "../../../hooks/useSendMessage";


const MessageSend = ({ userId, firstName, lastName }) => {

    const { sendMessage, setMessageText } = useSendMessage(userId, firstName, lastName);

    // HANDLE MESSAGE SENDING
    const handleChange = (e) => {
        setMessageText(e.target.value);
    }

    return (
        <div className="message__feed__send__message">
            <textarea onChange={handleChange}></textarea>
            <button onClick={sendMessage}>Send</button>
        </div>
    )
}

export default MessageSend;