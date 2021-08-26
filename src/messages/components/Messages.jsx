import React, { useContext } from "react";
import MessageBox from "./message_feed/MessageBox";
import "./messages.css";
import { v4 as uuidv4 } from 'uuid';
import { MessageContext } from "../../context/message-context";


function Messages() {
    // all conversations with users
    const { conversations } = useContext(MessageContext);

    // every rendered MessageBox is unique conversation with user(unique)
    // user with whom conversation exists
    const renderMessageBox = (userMessages) => {
        // to messages box is passed explored user messages and user data with logged user
        return <MessageBox key={uuidv4()} user={userMessages.user} messages={userMessages.messages} />
    }

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