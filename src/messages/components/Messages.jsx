import React, { useState, useEffect, useContext } from "react";
import MessageBox from "./msg_feed/MessageBox";
import "./messages.css";
import { v4 as uuidv4 } from 'uuid';
import { getAllMessages } from "../../fetch/users/users";
// import messages from "../seed";
import { AuthContext } from "../../context/auth-context";


function Messages() {
    const { authData } = useContext(AuthContext);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetchMessages();
    }, [authData.token])

    const fetchMessages = async () => {
        const res = await getAllMessages(authData.token);
        setMessages(res.data.messages);
    }

    const renderMessageBox = (userMessages) => {
        return <MessageBox key={uuidv4()} userMessages={userMessages} />
    }

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