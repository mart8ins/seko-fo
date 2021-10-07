import { useState, useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { MessageContext } from "../context/message-context";
import { sendMessageToUser } from "../fetch/messages";

const useSendMessage = (userId) => {
    const { authData } = useContext(AuthContext);
    const { messageData, setMessageData } = useContext(MessageContext);

    const [messageSentSuccess, setMessageSentSuccess] = useState(false); // for MessageModal

    const sendMessage = async (text) => {

        // CREATING MESSAGE OBJECT WITH MESSAGE AND USER DATA
        const messageObj = {
            message: {
                text: text
            },
            recieverId: userId
        }
        await sendMessageToUser(authData.token, messageObj);
        setMessageSentSuccess(true);
    }


    return {
        sendMessage,
        messageData,
        setMessageData,
        messageSentSuccess
    }
}

export default useSendMessage;