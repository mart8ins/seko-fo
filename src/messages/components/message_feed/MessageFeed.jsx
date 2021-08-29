import React, { useEffect, useState, useContext } from "react";
import "./messageFeed.css";
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from "../../../context/auth-context";

import socketClient from "socket.io-client";
const ENDPOINT = "http://localhost:3002/";
const socket = socketClient(ENDPOINT);

function MessageFeed({ user }) {
    // user = {userId, firstName, lastName, photo}
    const { authData } = useContext(AuthContext);

    // SOCKET.IO IMPLEMENTATION

    // messages retrieved from BE with socket
    const [messages, setMessages] = useState([]);

    // use socket to get all messages for user, emit event for current explored user
    useEffect(() => {
        socket.emit("user messages", { userId: authData.userId, exploredUserId: user.userId });
        socket.on("user messages", (messages) => {
            setMessages(messages)
        })
    });

    // RENDER MESSAGE FEED MESSAGES ACORDINGLY - RECIEVED / SENT
    const renderMessagesFeed = (msg) => {
        let n = msg.date;
        let date = new Date(Number(n)).toLocaleString();
        return (
            <div key={uuidv4()} className="message__feed__container">
                {msg.type === "recieved" ?
                    <div className="message__feed__left">
                        <p>{msg.text}</p>
                        <p>{date}</p>
                    </div>
                    :
                    <div className="message__feed__right">
                        <p>{msg.text}</p>
                        <p>{date}</p>
                    </div>
                }
            </div>
        )
    }

    return <div>
        <div>
            {messages && messages.map(renderMessagesFeed)}
        </div>
    </div>

}

export default MessageFeed;