import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import "./userProfile.css";
// COMPONENTS
import AboutUser from "./components/about/AboutUser";
// FETCH 
import { getUser } from "../../../fetch/users/users";
// CONTEXT
import { AuthContext } from "../../../context/auth-context";
// HOOKS
import useConnectionStatus from "../../../hooks/useConnectionStatus";
import useConnectPeople from "../../../hooks/useConnectPeople";


function UserProfile() {
    // explored users id
    let { userId } = useParams();
    // logged users data 
    const { authData } = useContext(AuthContext);

    // hook for accepting or requesting connection
    const { sendRequestForConnection, acceptIncomingRequestForConnection } = useConnectPeople(userId);

    // explored user data
    const [exploredUser, setExploredUser] = useState({});

    // local components state for connection status changes 
    const [isCon, setIsCon] = useState(false);
    const [isReqRecieved, setIsReqRecieved] = useState(false);
    const [isReqSent, setIsReqSent] = useState(false);

    // connection status hook for button status on page load
    let { isConnected, isRequestRecieved, isRequestSent } = useConnectionStatus(userId, authData.userId, authData.token);

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
    }, [userId])



    // send request for connection to explored user, is status is 201 then request is successfully created
    const sendRequest = () => {
        sendRequestForConnection();
        setIsReqSent(true);
    }
    // accept incoming connection request
    const acceptRequest = () => {
        acceptIncomingRequestForConnection();
        setIsCon(true);
    }

    return <div>
        <AboutUser
            exploredUser={exploredUser}
            isConnected={isCon}
            isRequestRecieved={isReqRecieved}
            isRequestSent={isReqSent}
            sendRequest={sendRequest}
            acceptRequest={acceptRequest} />

        <div className="user__profile__content">
            <div>Blogs</div>
            <div>Progress</div>
            <div>Laika josla</div>
        </div>


    </div>

}

export default UserProfile;