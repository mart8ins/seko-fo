import { createContext, useState } from "react";
export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {

    // if there is no logged user avaliable in LS than default state is set
    const authDataFromLocalStorage = JSON.parse(localStorage.getItem("authData")) || {
            token: null,
            userId: null,
            fullName: null,
            email: null,
            isLoggedIn: false,
            showAuthModal: false,
            expiration: undefined,
            profilePhoto: undefined
    };

    const [authData, setAuthData] = useState(authDataFromLocalStorage);

    if(authData.expiration) {
        const expirationDateCheck = new Date(authData.expiration).getTime() > new Date().getTime();
        if(!expirationDateCheck) {
            localStorage.removeItem("authData");
        }
    }

    return (
        <AuthContext.Provider value={{
            authData, setAuthData
            }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider;