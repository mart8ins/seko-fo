import React, { useState, useEffect, useContext } from "react";
import "./messageSend.css";
import useSendMessage from "../../../hooks/useSendMessage";
import { ConnectionsContext } from "../../../context/connections-context";

import socket from "../../../socket/socket";


const MessageSend = ({ userId, firstName, lastName, feedOpen }) => {
    // hook for sending message
    const { sendMessage } = useSendMessage(userId, firstName, lastName);

    const { usersOnline, setUsersOnline } = useContext(ConnectionsContext);

    // message text state
    const [text, setText] = useState("");

    // actual/latest logged users socket from backend before sending message
    // const [sockets, setSockets] = useState([]);

    useEffect(() => {
        socket.emit("GET USERS ONLINE", (data) => {
            setUsersOnline(data)
        })
    }, []);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const send = () => {
        const exploredUserSocketId = usersOnline.find((user) => user.userId === userId);
        const socketId = exploredUserSocketId.socketId;
        sendMessage(text, feedOpen, socketId);
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