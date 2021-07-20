import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {

    // if there is no logged user avaliable in LS than default state is set
    const authDataFromLocalStorage = JSON.parse(localStorage.getItem("authData")) || {
            token: null,
            userId: null,
            email: null,
            isLoggedIn: false,
            showAuthModal: false
    };

    const [authData, setAuthData] = useState(authDataFromLocalStorage);

    return (
        <AuthContext.Provider value={{authData, setAuthData}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider;