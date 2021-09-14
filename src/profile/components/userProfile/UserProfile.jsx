import React, { useState, useContext } from "react";
import { useParams } from "react-router";
import "./userProfile.css";
// COMPONENTS
import AboutUser from "./components/about/AboutUser";
// FETCH 

// CONTEXT
import { AuthContext } from "../../../context/auth-context";



function UserProfile() {
    // explored users id
    let { userId } = useParams();
    // logged users data 
    const { authData } = useContext(AuthContext);


    // explored user data
    const [exploredUser, setExploredUser] = useState({});

    // local components state for connection status changes 
    const [isCon, setIsCon] = useState(false);
    const [isReqRecieved, setIsReqRecieved] = useState(false);
    const [isReqSent, setIsReqSent] = useState(false);



    // send request for connection to explored user, is status is 201 then request is successfully created
    const sendRequest = () => {
        console.log("request sent")
    }
    // accept incoming connection request
    const acceptRequest = () => {
        console.log("request accepted")
    }

    return <div>
        <AboutUser
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