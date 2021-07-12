import React from "react";
import "./messageBox.css";



function MessageBox(props) {
    const messagesWithUser = props.userMessages;
    const user = messagesWithUser.messageWith;
    const feed = messagesWithUser.feed;

    // loop throug messages to check if last message ir read
    const allMessagesRead = {
        status: false,
        messagesNotRead: 1
    };

    console.log(feed)
    return <div>
        <div className="message__box">
            <div className="message__box__photo__name">
                <img src={user.photo} />
                <div className="message__box__name">Martins Skinkis</div>
            </div>
            <div className="message__box__right">
                <div>
                    {allMessagesRead.status ?
                        <div className="no__new__messages">No new messages</div>
                        :
                        <div className="is__new__messages">You got <span className="message__count">{allMessagesRead.messagesNotRead}</span> new message{allMessagesRead.messagesNotRead > 1 ? "s" : ""}!</div>}
                </div>
            </div>

        </div>

    </div>

}

export default MessageBox;