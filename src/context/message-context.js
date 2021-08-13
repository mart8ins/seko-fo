import { createContext, useState, useContext,useEffect } from "react";
import { getAllMessages } from "../fetch/users/users";
import { AuthContext } from "./auth-context";

export const MessageContext = createContext();

const MessageContextProvider = ({children}) => {
    const {authData} = useContext(AuthContext);

    // messages all conversations with users
    const [messages, setMessages] = useState([]);
    console.log(messages)

    // data for message modal to show modal/name for user in modal and for possibility to send message using id
    const [messageData, setMessageData] = useState({
        show: false,
        firstName: undefined,
        lastName: undefined,
        userId: undefined
    });

    // FETCH ALL CONVERSATIONS with users/messages
    useEffect(() => {
        fetchMessages();
    }, [authData.token])
    const fetchMessages = async () => {
        const res = await getAllMessages(authData.token);
        setMessages(res.data.messages);
    }


    return <MessageContext.Provider value={{messageData, setMessageData, messages, setMessages}}>
        {children}
    </MessageContext.Provider>

}

export default MessageContextProvider;