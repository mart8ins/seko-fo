import { useState, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from "../context/auth-context";
import { MessageContext } from "../context/message-context";
import { sendMessageToUser } from "../fetch/users/messages";

const useSendMessage = (userId, firstName, lastName) => {
    const { authData } = useContext(AuthContext);
    const { messageData, setMessageData, conversations } = useContext(MessageContext);

    const [messageSentSuccess, setMessageSentSuccess] = useState(false); // for MessageModal

    const sendMessage = async (text, feedOpen, socketId) => {

        // CREATING MESSAGE OBJECT WITH MESSAGE AND USER DATA
        const messageObj = {
            message: {
                id: uuidv4(),
                text: text,
                date: new Date().getTime(),
                type: "sent",
                isRead: feedOpen ? true : false
            },
            user: {
                userId: String(userId),
                firstName,
                lastName
            }
        }
        await sendMessageToUser(authData.token, messageObj);
        setMessageSentSuccess(true);
    }


    return {
        sendMessage,
        messageData,
        setMessageData,
        messageSentSuccess,
        conversations
    }
}

export default useSendMessage;