import React, { createContext, useState, useEffect, useContext } from "react";
import {getAllNotConnectedUsers,
        getUsersConnections} from "../fetch/users/users";
import {AuthContext} from "./auth-context";


export const ConnectionsContext = createContext();

const ConnectionsContextProvider = ({children})=> {
    const {authData: {token, userId}} = useContext(AuthContext);

    const [explore, setExplore] = useState([]);
    const [connectedWith, setConnectedWith] = useState([]);
    const [connectionRequests, setConnectionRequests] = useState({});

    useEffect(()=> {
            fetchNotConnectedUsers();
            fetchUserConnections();
    },[token])

    // fetch all users which is not connected and without logged user
    const fetchNotConnectedUsers = async () => {
        const res = await getAllNotConnectedUsers(token);
        setExplore(res.data.users);
    }
    // fetch user connections what includes connected [], requests {}
    const fetchUserConnections = async() => {
        const res = await getUsersConnections(userId, token);
        setConnectedWith(res.data.connections.connected);
        setConnectionRequests(res.data.connections.requests);
    }

    return <ConnectionsContext.Provider value={
        {
            explore, setExplore,
            connectedWith, setConnectedWith,
            connectionRequests, setConnectionRequests
        }}>
        {children}
    </ConnectionsContext.Provider>
}

export default ConnectionsContextProvider;