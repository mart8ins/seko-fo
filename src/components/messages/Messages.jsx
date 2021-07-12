import React from "react";
import MessageBox from "./msg_feed/MessageBox";
import "./messages.css";

// fetch all users messages with other users
const allMessagesWithUsers = [
    {
        messageWith: {
            name: "Toms",
            photo: "https://images.unsplash.com/photo-1624629769948-1eec367b8e64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
        }, // or user ID populated from db?
        feed: [
            {
                status: "recieved", // or "sent",
                date: new Date(),
                message: "Čau! ko labu dari?",
                isRead: true
            },
            {
                status: "sent", // or "sent",
                date: new Date(),
                message: "Čau! Neko jēdzīgu. Dzeru un pīpēju!",
                isRead: true
            }
        ]
    },
    {
        messageWith: {
            name: "Aiga",
            photo: "https://images.unsplash.com/photo-1625753655246-77e6ac110d3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80"
        },
        feed: [
            {
                status: "sent", // or "sent",
                date: Date.now(),
                message: "Eu, losi, ko dar lab?",
                isRead: true
            },
            {
                status: "recieved", // or "sent",
                date: Date.now(),
                message: "Fāk, anglija zaudēja!",
                isRead: true
            },
            {
                status: "recieved", // or "sent",
                date: Date.now(),
                message: "un ko tu?",
                isRead: true
            },
            {
                status: "sent", // or "sent",
                date: Date.now(),
                message: "es neko jēdzīgu. Aiga šodien prom. Skumstu!",
                isRead: false
            }
        ]
    }
];

const renderMessageBox = (userMessages) => {
    return <MessageBox userMessages={userMessages} />
}

function Messages() {
    const noMsg = <div className="no__messages">
        Currently you dont have any messages to show...
    </div>;

    return <div>
        <div className="messages_container">
            {!allMessagesWithUsers.length ? noMsg : allMessagesWithUsers.map(renderMessageBox)}
        </div>

    </div>

}

export default Messages;