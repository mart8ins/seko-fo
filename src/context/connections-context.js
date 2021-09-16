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

    // ONLY CONNECTED USERS
    const [connectedWith, setConnectedWith] = useState([]);
    useEffect(()=> {
        let conn = [];
        explore.forEach((user) => {
            user.connections.connected.forEach((connected) => {
                if (String(connected.userId) === userId) {
                    conn.push(user);
                }
            });
        });
        setConnectedWith(conn)
    },[explore])

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
            connectedWith,
            usersOnline, setUsersOnline,
            getAllUsers
        }}>
        {children}
    </ConnectionsContext.Provider>
}

export default ConnectionsContextProvider;