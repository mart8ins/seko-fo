import React from "react";
import "./messageFeed.css";
import { v4 as uuidv4 } from 'uuid';

function MessageFeed({ messages }) {

    const renderMessagesFeed = (msg) => {
        let n = msg.date;
        let date = new Date(Number(n)).toLocaleString();

        return (
            <div key={uuidv4()} className="message__feed__container">
                {msg.type === "recieved" ?
                    <div className="message__feed__left">
                        <p>{msg.text}</p>
                        <p>{date}</p>
                    </div>
                    :
                    <div className="message__feed__right">
                        <p>{msg.text}</p>
                        <p>{date}</p>
                    </div>
                }
            </div>
        )
    }

    return <div>
        <div>
            {messages.map(renderMessagesFeed)}
        </div>
    </div>

}

export default MessageFeed;