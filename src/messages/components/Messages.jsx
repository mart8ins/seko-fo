import React, { useContext, useEffect, useRef } from "react";
import MessageBox from "./message_feed/MessageBox";
import "./messages.css";
import { v4 as uuidv4 } from 'uuid';
import { MessageContext } from "../../context/message-context";
import { AuthContext } from "../../context/auth-context";

import socketClient from "socket.io-client";
const ENDPOINT = "http://localhost:3002/";
const socket = socketClient(ENDPOINT);

function Messages() {
    const { authData } = useContext(AuthContext);
    // conversations with users [{}]
    const { conversations } = useContext(MessageContext);

    // CONNECT USER TO SERVER SOCKET DATA, ARRAY WITH USERSids AND SOCKETids
    // useEffect(() => {
    //     socket.emit("User opened messages", { userId: authData.userId });
    // }, [authData]);

    // every rendered MessageBox is conversation with unique user
    const renderMessageBox = (userMessages) => {
        return <MessageBox key={uuidv4()} user={userMessages.user} messages={userMessages.messages} />
    }

    console.log(conversations)

    // if there is no conversations
    const noMsg = <div className="no__conversations">
        Currently you dont have any conversations to show...
    </div>;

    return <div>
        <div className="all__conversations__container">
            {!conversations.length ? noMsg : conversations.map(renderMessageBox)}
        </div>

    </div>

}

export default Messages;