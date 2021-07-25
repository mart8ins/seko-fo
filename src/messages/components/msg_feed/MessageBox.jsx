import React, { useState } from "react";
import "./messageBox.css";
import { v4 as uuidv4 } from 'uuid';
import MessageFeed from "./MessageFeed";
import MessageSend from "./MessageSend";



function MessageBox({ userMessages }) {
    // state for user message feed/conversation
    const [showFeed, setShowFeed] = useState(false);

    const photo = userMessages.user.photo;
    const userName = userMessages.user.name;
    const isConnected = userMessages.user.isConnected;
    const messages = userMessages.messages;


    /* loop throug messages to check if there is unread recieved messages */
    // set status of unread messages
    const isAllMessagesRead = {
        status: false,
        count: 0
    };
    for (let msg in messages) {
        // console.log(messages[msg])
        if (messages[msg].isRead) {
            isAllMessagesRead.status = true;
            isAllMessagesRead.count = 0;
        }
        if (!messages[msg].isRead && messages[msg].type === "recieved") {
            isAllMessagesRead.status = false;
            isAllMessagesRead.count = isAllMessagesRead.count + 1;
        }
    }

    const renderMessages = (msg) => {
        return <MessageFeed key={uuidv4()} messages={msg} />
    }

    const showMessageFeed = () => {
        !showFeed ? setShowFeed(true) : setShowFeed(false);

        /* NEED TO INTERACT TO DB TO SET ALL UNREAD MESSAGES AS READED IF THEY ARE  */
    }


    return <div>
        <div className="message__box" onClick={showMessageFeed}>
            <div className="message__box__photo__name">
                {isConnected ?
                    <div className="message__box__connected__status">Connected</div>
                    :
                    <div className="message__box__connected__status not__connected">Connected</div>
                }
                <img src={photo} alt="user" />
                <div className="message__box__name">{userName}</div>
            </div>
            <div className="message__box__right">
                <div>
                    {isAllMessagesRead.status ?
                        <div className="no__new__messages">No new messages</div>
                        :
                        <div className="is__new__messages">You got <span className="message__count">{isAllMessagesRead.count}</span> new message{isAllMessagesRead.count > 1 ? "s" : ""}!</div>}
                </div>
            </div>
        </div>
        {showFeed ? <div className="message__feed">
            {messages.map(renderMessages)}
            <MessageSend />
        </div>
            :
            null}
    </div>

}

export default MessageBox;