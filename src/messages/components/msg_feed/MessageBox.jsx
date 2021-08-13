import React, { useState, useContext, useEffect } from "react";
import "./messageBox.css";
import { v4 as uuidv4 } from 'uuid';
// COMPONENTS
import MessageFeed from "./MessageFeed";
import MessageSend from "./MessageSend";
// HOOKS
import useConnectionStatus from "../../../hooks/useConnectionStatus";
// CONTEXT
import { AuthContext } from "../../../context/auth-context";
import { MessageContext } from "../../../context/message-context";
// FETCH
import { setAllMessagesAsRead, getAllMessages } from "../../../fetch/users/users";



function MessageBox({ userMessages }) {
    // userMessages is object {user: {}, messages: []}

    const { authData } = useContext(AuthContext);

    const { messages, setMessages } = useContext(MessageContext);

    // state for user message feed/conversation
    const [showFeed, setShowFeed] = useState(false);

    // messages is array with messages/conversation with unique user
    const [conversation, setConversation] = useState(userMessages.messages);

    // state for conversation unread messages and their count
    const [isAllMessagesRead, setIsAllMessagesRead] = useState({
        status: true,
        count: 0
    })

    // details for explored user for message box
    const userId = userMessages.user.userId;
    const firstName = userMessages.user.firstName;
    const lastName = userMessages.user.lastName;
    const photo = userMessages.user.photo;

    // connected status
    const { isConnected } = useConnectionStatus(userId, authData.userId, authData.token);

    /* loop throug messages to check if there is unread recieved messages */
    // set status of unread messages
    useEffect(() => {
        let s = true;
        let c = 0;
        for (let msg in conversation) {
            if (conversation[msg].isRead && conversation[msg].type === "recieved") {
                s = true;
                c = 0;
            }
            if (!conversation[msg].isRead && conversation[msg].type === "recieved") {
                s = false;
                c += 1;
            }
        }
        setIsAllMessagesRead({
            status: s,
            count: c
        })
    }, [])

    const renderMessages = (msg) => {
        return <MessageFeed key={uuidv4()} messages={msg} />
    }

    // to open / close message box with user, also update unreade message status and count
    const showMessageFeed = () => {
        setShowFeed(!showFeed);
        if (!isAllMessagesRead.status && !showFeed) {
            messagesAreRead();
            setIsAllMessagesRead({
                status: true,
                count: 0
            });
        }
    }

    // update all messages as read after message box is once opend
    const messagesAreRead = async () => {
        const res = await setAllMessagesAsRead(authData.token, userId);
        const res1 = await getAllMessages(authData.token);
        console.log(res1.data, "jeee")
        console.log(res.data, "ble")
        setConversation(res.data.updatedMessages);
        setMessages(res1.data.messages)// update context
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
                <div className="message__box__name">{firstName} {lastName}</div>
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
            {conversation.map(renderMessages)}
            <MessageSend userId={userId} firstName={firstName} lastName={lastName} />
        </div>
            :
            null}
    </div>

}

export default MessageBox;