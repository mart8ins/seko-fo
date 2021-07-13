import React from "react";
import MessageBox from "./msg_feed/MessageBox";
import "./messages.css";
import messages from "./seed";


const renderMessageBox = (userMessages) => {
    return <MessageBox userMessages={userMessages} />
}

function Messages() {
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