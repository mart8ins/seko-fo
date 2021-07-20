import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {

    const [authData, setAuthData] = useState({
        token: "",
        isLoggedIn: false,
        showAuthModal: false
    });

    return (
        <AuthContext.Provider value={{authData, setAuthData}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider;