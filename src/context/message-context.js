import { createContext, useState, useContext,useEffect } from "react";
import { getAllConversations } from "../fetch/users/users";
import { AuthContext } from "./auth-context";

export const MessageContext = createContext();

const MessageContextProvider = ({children}) => {
    const {authData} = useContext(AuthContext);

    // all existing conversations with users
    const [conversations, setConversations] = useState([]);

    // FETCH ALL USER CONVERSATIONS
    useEffect(() => {
        fetchConversations();
    }, [authData.token]);

    const fetchConversations = async () => {
        const res = await getAllConversations(authData.token);
        setConversations(res.data.conversations);
    }

    // MODAL SETTINGS
    // data for message modal to show modal/name for user in modal and for possibility to send message using id
    const [messageData, setMessageData] = useState({
        show: false,
        firstName: undefined,
        lastName: undefined,
        userId: undefined
    });

    return <MessageContext.Provider value={{
        messageData, setMessageData, 
        conversations, setConversations}}>
        {children}
    </MessageContext.Provider>

}

export default MessageContextProvider;