import { useState, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from "../context/auth-context";
import { MessageContext } from "../context/message-context";
import { sendMessageToUser } from "../fetch/users/users";

const useSendMessage = (userId, firstName, lastName) => {
    const { authData } = useContext(AuthContext);
    const [messageSentSuccess, setMessageSentSuccess] = useState(false);
    const [messageText, setMessageText] = useState("");
    const { messageData, setMessageData } = useContext(MessageContext);

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
        const res = await sendMessageToUser(authData.token, messageObj);
        setMessageText("");
        setMessageSentSuccess(true);
    }


    return {
        sendMessage,
        setMessageText,
        messageData,
        setMessageData,
        messageSentSuccess
    }
}

export default useSendMessage;