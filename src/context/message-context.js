import { createContext, useState } from "react";

export const MessageContext = createContext();

const MessageContextProvider = ({children}) => {

    // MODAL SETTINGS
    // data for message modal to show modal/name for user in modal and for possibility to send message using id
    const [messageData, setMessageData] = useState({
        show: false,
        firstName: undefined,
        lastName: undefined,
        userId: undefined
    });

    return <MessageContext.Provider value={{
        messageData, setMessageData}}>
        {children}
    </MessageContext.Provider>

}

export default MessageContextProvider;