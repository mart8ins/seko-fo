import React, { useContext } from "react";
import MessageBox from "./message_feed/MessageBox";
import "./messages.css";
import { v4 as uuidv4 } from 'uuid';
import { MessageContext } from "../../context/message-context";


function Messages() {
    // conversations with users [{}]
    const { conversations } = useContext(MessageContext);

    // every rendered MessageBox is conversation with unique user
    const renderMessageBox = (userMessages) => {
        // user: {id, firstName, lastName, photo}]
        return <MessageBox key={uuidv4()} user={userMessages.user} />
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