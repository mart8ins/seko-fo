import React, { useState, useContext, useEffect } from "react";
import "./messageBox.css";
// COMPONENTS
import MessageFeed from "./MessageFeed";
import MessageSend from "./MessageSend";
// HOOKS
import useConnectionStatus from "../../../hooks/useConnectionStatus";
// CONTEXT
import { AuthContext } from "../../../context/auth-context";
// FETCH
import { setAllMessagesAsRead } from "../../../fetch/users/users";

import socketClient from "socket.io-client";
const ENDPOINT = "http://localhost:3002/";
const socket = socketClient(ENDPOINT);


function MessageBox({ user }) {
    const { authData } = useContext(AuthContext);
    // explored users connected status
    const { isConnected } = useConnectionStatus(user.userId, authData.userId, authData.token);

    // state for showing user message feed/conversation window/box
    const [showFeed, setShowFeed] = useState(false);

    // keep track of read/unread messages, their count
    const [isRead, setIsRead] = useState({
        status: true,
        count: 0
    });


    // to open / close message box with user, also update unreade message status and count
    const showMessageFeed = () => {
        setShowFeed(!showFeed);
        if (!isRead.status) {
            messagesAreRead();
            setIsRead({
                status: true,
                count: 0
            });
        }
    }


    // update all messages as read after message box is once opend
    const messagesAreRead = async () => {
        await setAllMessagesAsRead(authData.token, user.userId);
    }

    return <div>
        <div className="message__box" onClick={showMessageFeed}>
            <div className="message__box__photo__name">
                {isConnected ?
                    <div className="message__box__connected__status">Connected</div>
                    :
                    <div className="message__box__connected__status not__connected">Connected</div>
                }
                <img src={user.photo} alt="user" />
                <div className="message__box__name">{user.firstName} {user.lastName}</div>
            </div>
            <div className="message__box__right">
                <div>
                    {isRead.status ?
                        <div className="no__new__messages">No new messages</div>
                        :
                        <div className="is__new__messages">You got <span className="message__count">{isRead.count}</span> new message{isRead.count > 1 ? "s" : ""}!</div>}
                </div>
            </div>
        </div>

        {showFeed ? <div className="message__feed">
            <MessageFeed user={user} />
            <MessageSend feedOpen={showFeed} userId={user.userId} firstName={user.firstName} lastName={user.lastName} />
        </div>
            :
            null}
    </div>
}

export default MessageBox;