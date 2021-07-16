import React from "react";
import "./messageFeed.css";



function MessageFeed({ messages }) {
    // console.log(messages)
    const messageArray = [messages];

    const renderMessagesFeed = (msg) => {
        return (
            <div className="message__feed__container">
                {msg.type === "recieved" ?
                    <div className="message__feed__left">
                        <p>{msg.text}</p>
                        <p>{msg.date.toLocaleString()}</p>
                    </div>
                    :
                    <div className="message__feed__right">
                        <p>{msg.text}</p>
                        <p>{msg.date.toLocaleString()}</p>
                    </div>
                }
            </div>
        )
    }


    return <div>
        <div>
            {messageArray.map(renderMessagesFeed)}
        </div>
    </div>

}

export default MessageFeed;