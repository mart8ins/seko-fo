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
import { setAllMessagesAsRead, getMessageFeed } from "../../../fetch/users/users";


function MessageBox({ user }) {
    const { authData } = useContext(AuthContext);

    // explored users connected status
    const { isConnected } = useConnectionStatus(user.userId, authData.userId, authData.token);

    // state for showing user message feed/conversation window/box
    const [showFeed, setShowFeed] = useState(false);

    // state for conversation unread messages and their count
    const [isAllMessagesRead, setIsAllMessagesRead] = useState({
        status: true,
        count: 0
    });

    // all message feed
    const [messageFeed, setMessageFeed] = useState([]);

    /*
        MOST OF THIS LOGIC BELOW IS NOT TO DISPLAY MESSAGES IN FEED BUT SHOW UNREAD MESSAGE COUNT/STATUS 
        AND AFTER OPENING MESSAGE BOX FEED SET ALL MESSAGES AS READ AND UPDATE UI PERMANENTLY
    */

    useEffect(() => {
        fetchMessageFeed();
    }, [user])

    const fetchMessageFeed = async () => {
        const res = await getMessageFeed(authData.token, user.userId);
        setMessageFeed(res.data.messages);
    }

    /* loop throug messages to check if there is unread recieved messages */
    // set status of unread messages and count
    useEffect(() => {
        let s = true;
        let c = 0;
        for (let msg in messageFeed) {
            if (messageFeed[msg].isRead && messageFeed[msg].type === "recieved") {
                s = true;
                c = 0;
            }
            if (!messageFeed[msg].isRead && messageFeed[msg].type === "recieved") {
                s = false;
                c += 1;
            }
        }
        setIsAllMessagesRead({
            status: s,
            count: c
        })
    }, [messageFeed])

    // to open / close message box with user, also update unreade message status and count
    const showMessageFeed = () => {
        setShowFeed(!showFeed);
        // && !showFeed
        if (!isAllMessagesRead.status) {
            messagesAreRead();
            setIsAllMessagesRead({
                status: true,
                count: 0
            });
        }
    }

    // update all messages as read after message box is once opend and fetch updated messages with read status true
    const messagesAreRead = async () => {
        await setAllMessagesAsRead(authData.token, user.userId);
        fetchMessageFeed();
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
                    {isAllMessagesRead.status ?
                        <div className="no__new__messages">No new messages</div>
                        :
                        <div className="is__new__messages">You got <span className="message__count">{isAllMessagesRead.count}</span> new message{isAllMessagesRead.count > 1 ? "s" : ""}!</div>}
                </div>
            </div>
        </div>
        {showFeed ? <div className="message__feed">
            <MessageFeed user={user} />
            <MessageSend userId={user.userId} firstName={user.firstName} lastName={user.lastName} />
        </div>
            :
            null}
    </div>

}

export default MessageBox;