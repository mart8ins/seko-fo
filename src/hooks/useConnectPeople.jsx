import { useContext } from "react";
import { ConnectionsContext } from "../context/connections-context";
import { AuthContext } from "../context/auth-context";
import { requestConnection, acceptConnectionRequest } from "../fetch/users/users";

const useConnectPeople = (userId) => {

    const { setExplore, setConnectedWith, setRequestRecieved, setRequestSent } = useContext(ConnectionsContext);
    const { authData } = useContext(AuthContext); // logged users data


    // send request for connection to explored user, is status is 201 then request is successfully created
    const sendRequestForConnection = async () => {
        const res = await requestConnection(userId, authData.token);
        const { updatedRequests } = res.data.data;
        setRequestSent(updatedRequests.sent);
    }

    // accept incoming connection request
    const acceptIncomingRequestForConnection = async () => {
        const res = await acceptConnectionRequest(userId, authData.token);
        const { updatedExplore, updatedConnectedWith, updatedRecievedRequests } = res.data.data;
        // update UI with new data after connection request is accepted
        setExplore(updatedExplore);
        setConnectedWith(updatedConnectedWith);
        setRequestRecieved(updatedRecievedRequests);
    }

    return {
        sendRequestForConnection,
        acceptIncomingRequestForConnection
    }

}

export default useConnectPeople;