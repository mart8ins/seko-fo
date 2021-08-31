import React, { useContext, useState } from "react";
import "./messageSend.css";
import useSendMessage from "../../../hooks/useSendMessage";
import { AuthContext } from "../../../context/auth-context";

import socketClient from "socket.io-client";
const ENDPOINT = "http://localhost:3002/";
const socket = socketClient(ENDPOINT);


const MessageSend = ({ userId, firstName, lastName, feedOpen }) => {
    const { authData } = useContext(AuthContext);
    const [text, setText] = useState("");

    const { sendMessage } = useSendMessage(userId, firstName, lastName);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const send = () => {
        sendMessage(text, feedOpen);
        socket.emit("user messages", { userId: authData.userId, exploredUserId: userId });
        socket.emit("conversation status", { userId: authData.userId, exploredUserId: userId });
        setText("");
    }

    return (
        <div className="message__feed__send__message">
            <textarea onChange={handleChange} value={text}></textarea>
            <button onClick={send}>Send</button>
        </div>
    )
}

export default MessageSend;