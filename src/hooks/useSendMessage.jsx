import { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from "../context/auth-context";
import { MessageContext } from "../context/message-context";
import { sendMessageToUser } from "../fetch/users/users";

const useSendMessage = (userId, firstName, lastName) => {
    const { authData } = useContext(AuthContext);
    const { messageData, setMessageData, conversations, setConversations } = useContext(MessageContext);

    const [messageSentSuccess, setMessageSentSuccess] = useState(false); // for MessageModal

    const [messageText, setMessageText] = useState("");


    // CREATING MESSAGE OBJECT WITH MESSAGE AND USER DATA
    const messageObj = {
        message: {
            id: uuidv4(),
            text: messageText,
            date: new Date().getTime(),
            type: "sent"
        },
        user: {
            userId: String(userId),
            firstName,
            lastName
        }
    }

    const sendMessage = async () => {
        await sendMessageToUser(authData.token, messageObj);
        setMessageText("");
        setMessageSentSuccess(true);
    }


    return {
        sendMessage,
        setMessageText,
        messageText,
        messageData,
        setMessageData,
        messageSentSuccess,
        conversations, setConversations
    }
}

export default useSendMessage;