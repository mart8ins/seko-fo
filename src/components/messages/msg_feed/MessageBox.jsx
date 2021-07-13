import React from "react";
import "./messageBox.css";



function MessageBox({ userMessages }) {
    const photo = userMessages.user.photo;
    const userName = userMessages.user.name;
    const isConnected = userMessages.user.isConnected;
    const messages = userMessages.messages;
    console.log(messages)


    /* loop throug messages to check if there is unread recieved messages */
    // set status of unread messages
    const isAllMessagesRead = {
        status: true,
        count: 1
    };
    for (let msg in messages) {
        console.log(messages[msg])
        if (messages[msg].isRead) {
            isAllMessagesRead.status = true;
            isAllMessagesRead.count = 0;
        }
        if (!messages[msg].isRead && messages[msg].type === "recieved") {
            isAllMessagesRead.status = false;
            isAllMessagesRead.count = isAllMessagesRead.count + 1;
        }
    }


    return <div>
        <div className="message__box">
            <div className="message__box__photo__name">
                {isConnected ?
                    <div className="message__box__connected__status">Connected</div>
                    :
                    <div className="message__box__connected__status not__connected">Not connected</div>
                }
                <img src={photo} alt="users photo" />
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

    </div>

}

export default MessageBox;