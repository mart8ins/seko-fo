import { useContext } from "react";
import { ConnectionsContext } from "../context/connections-context";
import { AuthContext } from "../context/auth-context";
import { requestConnection, acceptConnectionRequest } from "../fetch/users/users";
import useConnectionStatus from "../hooks/useConnectionStatus";

const useConnectPeople = (userId) => {

    const { setExplore, setConnectedWith, setRequestRecieved, setRequestSent } = useContext(ConnectionsContext);
    const { authData } = useContext(AuthContext); // logged users data


    // send request for connection to explored user, is status is 201 then request is successfully created
    const sendRequestForConnection = async (e) => {
        e.preventDefault();
        const res = await requestConnection(userId, authData.token);
        const { updatedRequests } = res.data.data;
        setRequestSent(updatedRequests.sent);
    }

    // accept incoming connection request
    const acceptIncomingRequestForConnection = async (e) => {
        e.preventDefault();
        const res = await acceptConnectionRequest(userId, authData.token);
        const { updatedExplore, updatedConnectedWith, updatedRecievedRequests } = res.data.data;
        // update UI with new data after connection request is accepted
        setExplore(updatedExplore);
        setConnectedWith(updatedConnectedWith);
        setRequestRecieved(updatedRecievedRequests);
    }

    // connection status hook for button status
    let { isConnected, isRequestRecieved, isRequestSent } = useConnectionStatus(userId, authData.userId, authData.token);


    return {
        sendRequestForConnection,
        acceptIncomingRequestForConnection,
        isConnected, isRequestRecieved, isRequestSent
    }

}

export default useConnectPeople;