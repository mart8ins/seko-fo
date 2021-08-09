import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import "./userProfile.css";
import AboutUser from "./components/about/AboutUser";
import { getUser } from "../../../fetch/users/users";
import { AuthContext } from "../../../context/auth-context";
import { ConnectionsContext } from "../../../context/connections-context";
import useConnectionStatus from "../../../hooks/useConnectionStatus";
import { requestConnection, acceptConnectionRequest } from "../../../fetch/users/users";


function UserProfile() {
    let { userId } = useParams(); // explored users id
    const { authData } = useContext(AuthContext); // logged users data

    // explored user data
    const [exploredUser, setExploredUser] = useState({});

    // local components state for connection status changes 
    const [isCon, setIsCon] = useState(false);
    const [isReqRecieved, setIsReqRecieved] = useState(false);
    const [isReqSent, setIsReqSent] = useState(false);

    // connection status hook for button status on page load
    let { isConnected, isRequestRecieved, isRequestSent } = useConnectionStatus(userId, authData.userId, authData.token);

    // connections context for logged user. after accepting or requesting connection update context with request status
    const { setExplore,
        setConnectedWith,
        setRequestRecieved,
        setRequestSent,
        connectedWith,
        requestRecieved,
        requestSent } = useContext(ConnectionsContext);

    // use effect for local button status, thei changes
    useEffect(() => {
        setIsCon(isConnected);
        setIsReqRecieved(isRequestRecieved);
        setIsReqSent(isRequestSent);
    }, [isConnected, isRequestRecieved, isRequestSent])


    // fetch explored user all data
    const getUserData = async () => {
        const response = await getUser(userId, authData.token);
        setExploredUser(response.data.user);
    }
    // effect for fetching explored user data
    useEffect(() => {
        getUserData();
    }, [userId, connectedWith, requestRecieved, requestSent])


    // send request for connection to explored user, is status is 201 then request is successfully created
    const sendRequestForConnection = async (e) => {
        e.preventDefault();
        const res = await requestConnection(userId, authData.token);
        const { updatedRequests } = res.data.data;
        setRequestSent(updatedRequests.sent);
        setIsReqSent(true);
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
        setIsCon(true);
    }


    return <div>
        <AboutUser
            exploredUser={exploredUser}
            isConnected={isCon}
            isRequestRecieved={isReqRecieved}
            isRequestSent={isReqSent}
            sendRequestForConnection={sendRequestForConnection}
            acceptIncomingRequestForConnection={acceptIncomingRequestForConnection} />

        <div className="user__profile__content">
            <div>Blogs</div>
            <div>Progress</div>
            <div>Laika josla</div>
        </div>


    </div>

}

export default UserProfile;