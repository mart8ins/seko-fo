import { useState, useEffect } from "react";
import { getUsersConnections, getUser } from "../fetch/users/connections";


const useConnectionStatus = (exploredId, loggedId, token) => {
    const [isConnected, setIsConnected] = useState(false);
    const [isRequestRecieved, setIsRequestRecieved] = useState(false);
    const [isRequestSent, setIsRequestSent] = useState(false);

    // explored user 
    // const [exploredUser, setExploredUser] = useState({});
    const [exploredUserRecievedRequests, setExploredUserRecievedRequests] = useState([]);
    const [exploredUserSentRequests, setExploredUserSentRequests] = useState([]);

    const getUserData = async () => {
        const response = await getUser(exploredId, token);
        // setExploredUser(response.data.user);
        setExploredUserRecievedRequests(response.data.user.connections.requests.recieved);
        setExploredUserSentRequests(response.data.user.connections.requests.sent);
    }

    // logged user
    const [logedUserConnections, setLogedUserConnections] = useState([]);
    const getUsersConnectionsData = async () => {
        const response = await getUsersConnections(loggedId, token);
        setLogedUserConnections(response.data.connections.connected);
    }
    useEffect(() => {
        getUserData();
        getUsersConnectionsData();
    }, [exploredId, loggedId, isConnected, isRequestRecieved, isRequestSent]);


    // to check if explored user is connected with logged user
    useEffect(() => {
        const checkConnection = logedUserConnections.filter((user) => {
            return String(user.userId) === String(exploredId);
        })
        checkConnection[0] ? setIsConnected(true) : setIsConnected(false);
        setIsRequestSent(exploredUserRecievedRequests.some((user) => String(user.userId) === String(loggedId)));
        setIsRequestRecieved(exploredUserSentRequests.some((user) => String(user.userId) === String(loggedId)));
    }, [logedUserConnections, exploredUserRecievedRequests, exploredUserSentRequests, exploredId, loggedId])

    return {
        isConnected,
        isRequestRecieved,
        isRequestSent
    }

}

export default useConnectionStatus;