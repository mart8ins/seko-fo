import React, { useState, useEffect, useContext } from "react";
import MessageBox from "./msg_feed/MessageBox";
import "./messages.css";
import { v4 as uuidv4 } from 'uuid';
import { MessageContext } from "../../context/message-context";


function Messages() {
    // all conversations with users
    const { messages } = useContext(MessageContext);

    // every rendered MessageBox is unique conversation with user(unique)
    const renderMessageBox = (userMessages) => {
        return <MessageBox key={uuidv4()} userMessages={userMessages} />
    }

    // is there is no conversations
    const noMsg = <div className="no__messages">
        Currently you dont have any messages to show...
    </div>;

    return <div>
        <div className="messages_container">
            {!messages.length ? noMsg : messages.map(renderMessageBox)}
        </div>

    </div>

}

export default Messages;