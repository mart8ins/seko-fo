import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import "./userProfile.css";
import { getUser, getUsersConnections } from "../../../fetch/users/users";
import { AuthContext } from "../../../context/auth-context";


function UserProfile() {
    const { authData } = useContext(AuthContext);

    // if user is connected with explored user
    const [isConnected, setIsConnected] = useState(false);

    // explored user
    let { userId } = useParams();
    const [exploredUser, setExploredUser] = useState({});

    // fetch logged users connections connected array
    const [logedUserConnections, setLogedUserConnections] = useState([]);
    const getUsersConnectionsData = async () => {
        const response = await getUsersConnections(authData.userId, authData.token);
        setLogedUserConnections(response.data.connections.connected);
    }
    // fetch explored user all data
    const getUserData = async () => {
        const response = await getUser(userId, authData.token);
        setExploredUser(response.data.user);
    }

    useEffect(() => {
        getUserData();
        getUsersConnectionsData();
    }, [userId])

    useEffect(() => {
        // to check if explored user is connected with logged user
        const checkConnection = logedUserConnections.filter((user) => {
            return String(user.userId) === String(userId);
        })
        checkConnection[0] ? setIsConnected(true) : setIsConnected(false);
    })


    return <div>
        <div className="user__profile">
            <div className="connected__status">
                {isConnected ? <div className="connected__status__true">Connected</div> : <div className="connected__status__false">Not connected</div>}
            </div>
            <div className="user__profile__header">
                <div>
                    <img alt="User" src={exploredUser.photo || "https://images.unsplash.com/photo-1514588645531-00b8822ad997?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"} />
                    <h4>{`${exploredUser.firstName} ${exploredUser.lastName}`}</h4>
                </div>
            </div>
        </div>


    </div>

}

export default UserProfile;