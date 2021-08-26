import React from "react";
import "./messageSend.css";
import useSendMessage from "../../../hooks/useSendMessage";

// import socketClient from "socket.io-client";
// const ENDPOINT = "http://localhost:3002/";
// const socket = socketClient(ENDPOINT);


const MessageSend = ({ userId, firstName, lastName, handleLiveMessage }) => {

    const { sendMessage, setMessageText, messageObj } = useSendMessage(userId, firstName, lastName);

    // HANDLE MESSAGE SENDING
    const handleChange = (e) => {
        // to server/db
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