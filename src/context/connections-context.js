import React, { createContext, useState, useEffect, useContext } from "react";
import {getAllNotConnectedUsers,
        getUsersConnections} from "../fetch/users/users";
import {AuthContext} from "./auth-context";


export const ConnectionsContext = createContext();

const ConnectionsContextProvider = ({children})=> {
    const {authData: {token, userId}} = useContext(AuthContext);

    const [explore, setExplore] = useState([]);
    const [connectedWith, setConnectedWith] = useState([]);
    const [requestRecieved, setRequestRecieved] = useState([]);
    const [requestSent, setRequestSent] = useState([]);

    // ALL USER ON MOMENT WHO IS ONLINE
    const [usersOnline, setUsersOnline] = useState([]);

    // fetch all users which is not connected and without logged user
    const fetchNotConnectedUsers = async () => {
        const res = await getAllNotConnectedUsers(token);
        setExplore(res.data.users);
    }

    // fetch user connections what includes connected [], requests {}
    const fetchUserConnections = async() => {
        const res = await getUsersConnections(userId, token);
        setConnectedWith(res.data.connections.connected);
        setRequestRecieved(res.data.connections.requests.recieved);
        setRequestSent(res.data.connections.requests.sent)
    }

        useEffect(()=> {
                fetchNotConnectedUsers();
                fetchUserConnections();
        },[token]);

        useEffect(()=> {
            fetchNotConnectedUsers();
        }, [requestSent])

    return <ConnectionsContext.Provider value={
        {
            explore, setExplore,
            connectedWith, setConnectedWith,
            requestRecieved, setRequestRecieved,
            requestSent, setRequestSent,
            usersOnline, setUsersOnline
        }}>
        {children}
    </ConnectionsContext.Provider>
}

export default ConnectionsContextProvider;