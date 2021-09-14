import React, { createContext, useState, useEffect, useContext } from "react";
import {fetchAllUsers} from "../fetch/users/connections";

import {AuthContext} from "./auth-context";


export const ConnectionsContext = createContext();

const ConnectionsContextProvider = ({children})=> {
    const {authData: {token, userId}} = useContext(AuthContext);

     // ALL USER ON MOMENT WHO IS ONLINE
    const [usersOnline, setUsersOnline] = useState([]);
     
    // ALL USERS
    const [explore, setExplore] = useState([]);
   

    /* *********************************************************
    GET ALL USERS EXEPT FOR LOGGED USER FOR EXPLOR USERS SECTION
    ********************************************************** */
    useEffect(()=> {
        getAllUsers(token);
    },[token]);

    const getAllUsers = async (token) => {
        const res = await fetchAllUsers(token);
        const {allUsers} = res.data;
        setExplore(allUsers);
    }
    

    return <ConnectionsContext.Provider value={
        {
            explore, setExplore,
            usersOnline, setUsersOnline,
            getAllUsers
        }}>
        {children}
    </ConnectionsContext.Provider>
}

export default ConnectionsContextProvider;