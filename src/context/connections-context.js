import React, { createContext, useState, useEffect, useContext } from "react";
import {fetchAllUsers} from "../fetch/connections";

import {AuthContext} from "./auth-context";
import socket from "../socket/socket";


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
                    conn.push({...user, isConnected: true});
                }
            });
        });
        setConnectedWith(conn);
    },[explore]);

    // USER WHO IS NOT CONNECTED BUT EXISTS MESSAGES
    const [notConnectedButMessages, setNotConnectedButMessages] = useState([]);
    useEffect(()=> {
        let notConn = [];
        explore.forEach((user)=> {
            user.messages.forEach((us)=> {
                  if(us.users.includes(user._id) && us.users.includes(userId) && user._id!== userId) {
                          let u = user.connections.connected.some((i)=> {
                            return i.userId === userId;
                          });
                          if(!u) {
                            notConn.push({...user, isConnected: false});
                          }
                  };
             });
          });
        setNotConnectedButMessages(notConn);
    },[explore, connectedWith]);


    

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
            notConnectedButMessages,
            usersOnline, setUsersOnline,
            getAllUsers
        }}>
        {children}
    </ConnectionsContext.Provider>
}

export default ConnectionsContextProvider;