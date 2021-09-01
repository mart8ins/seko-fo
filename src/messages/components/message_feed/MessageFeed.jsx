import React, { useContext, useEffect, useState } from "react";
import "./messageFeed.css";
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from "../../../context/auth-context";
import { ConnectionsContext } from "../../../context/connections-context";

import socket from "../../../socket/socket";

function MessageFeed({ user }) {
    const [messages, setMessages] = useState([])
    // get users who is online
    const { authData } = useContext(AuthContext);
    const { usersOnline, setUsersOnline } = useContext(ConnectionsContext);


    // GET MESSAGE FEED
    useEffect(() => {
        socket.emit("GET MESSAGES", { userId: authData.userId, exploredUserId: user.userId }, (messages) => {
            setMessages(messages);
        })
    }, [user]);


    useEffect(() => {
        socket.on("SEND MESSAGE", ({ socketId, messageData }) => {

        })
    })

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