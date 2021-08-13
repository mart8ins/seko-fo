import { createContext, useState } from "react";

export const MessageContext = createContext();

const MessageContextProvider = ({children}) => {
    const [messageData, setMessageData] = useState({
        show: false,
        firstName: undefined,
        lastName: undefined,
        userId: undefined
    });


    return <MessageContext.Provider value={{messageData, setMessageData}}>
        {children}
    </MessageContext.Provider>

}

export default MessageContextProvider;