import React, { useContext } from "react";
import MessageBox from "./message_feed/MessageBox";
import "./messages.css";
import { v4 as uuidv4 } from 'uuid';
import { MessageContext } from "../../context/message-context";
import { useEffect } from "react/cjs/react.development";
// import { AuthContext } from "../../context/auth-context";

function Messages() {
    // const { authData } = useContext(AuthContext);
    // conversations with users [{}]
    const { conversations, fetchConversations } = useContext(MessageContext);

    useEffect(() => {
        // calling because of unread messages status change to read, update ui
        fetchConversations();
    }, []);


    // every rendered MessageBox is conversation with unique user
    const renderMessageBox = (userMessages) => {
        return <MessageBox key={uuidv4()} user={userMessages.user} messages={userMessages.messages} />
    }

    const noConversations = <div className="no__conversations">
        Currently you dont have any conversations to show...
    </div>;

    return <div>
        <div className="all__conversations__container">
            {!conversations.length ? noConversations : conversations.map(renderMessageBox)}
        </div>

    </div>

}

export default Messages;