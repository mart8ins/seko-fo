import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import "./userProfile.css";
import { getUser, getUsersConnections } from "../../../fetch/users/users";
import { AuthContext } from "../../../context/auth-context";


function UserProfile() {
    // explored user
    let { userId } = useParams();
    const [exploredUser, setExploredUser] = useState({});
    const [isConnected, setIsConnected] = useState(true);

    // logged user
    // check if explored user is in logged users connections / connected array
    const { authData } = useContext(AuthContext);
    const [logedUserConnections, setLogedUserConnections] = useState([]);
    console.log(logedUserConnections)

    // store in local state logged users connections and set explored user connection status
    const getUsersConnectionsData = async () => {
        const response = await getUsersConnections(authData.userId, authData.token);
        await setLogedUserConnections(response.data.connections.connected);
        const checkConnection = logedUserConnections.find((user) => {
            return user.id == Number(userId);
        })
        checkConnection ? setIsConnected(true) : setIsConnected(false);
    }

    // get exlored users main data
    const getUserData = async () => {
        console.log(userId, "kooo?")
        const response = await getUser(userId, authData.token);
        await setExploredUser(response.data.user);
    }

    useEffect(() => {
        getUserData();
        getUsersConnectionsData();
    }, [])


    return <div>
        <div className="user__profile">
            <div className="connected__status">
                {isConnected ? <div className="connected__status__true">Connected</div> : <div className="connected__status__false">Not connected</div>}
            </div>
            <div className="user__profile__header">
                <div>
                    <img src={exploredUser.photo || "https://images.unsplash.com/photo-1514588645531-00b8822ad997?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"} />
                    <h4>{`${exploredUser.firstName} ${exploredUser.lastName}`}</h4>
                </div>
            </div>
        </div>


    </div>

}

export default UserProfile;