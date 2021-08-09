import { createContext, useState } from "react";

export const MessageContext = createContext();

const MessageContextProvider = ({children}) => {
    const [messageModalContext, setMessageModalContext] = useState({
        show: false,
        firstName: undefined,
        lastName: undefined,
        userId: undefined
    });


    return <MessageContext.Provider value={{messageModalContext, setMessageModalContext}}>
        {children}
    </MessageContext.Provider>

}

export default MessageContextProvider;