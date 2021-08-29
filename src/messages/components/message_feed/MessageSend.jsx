import React, { useContext } from "react";
import "./messageSend.css";
import useSendMessage from "../../../hooks/useSendMessage";
import { AuthContext } from "../../../context/auth-context";

import socketClient from "socket.io-client";
const ENDPOINT = "http://localhost:3002/";
const socket = socketClient(ENDPOINT);


const MessageSend = ({ userId, firstName, lastName }) => {
    const { authData } = useContext(AuthContext);

    const { sendMessage, setMessageText } = useSendMessage(userId, firstName, lastName);

    const handleChange = (e) => {
        setMessageText(e.target.value);
    }

    const send = () => {
        sendMessage();
        socket.emit("user messages", { userId: authData.userId, exploredUserId: userId });
    }

    return (
        <div className="message__feed__send__message">
            <textarea onChange={handleChange}></textarea>
            <button onClick={send}>Send</button>
        </div>
    )
}

export default MessageSend;