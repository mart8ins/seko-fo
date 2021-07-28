import React, { useState, useEffect, useContext } from "react";
import "./connections.css";
import ExploreConnections from "./exploreConnections/ExploreConnections";
import MyConnections from "./myConnections/MyConnections";
import Request from "./request/Request";
import { AuthContext } from "../../context/auth-context";
import { getUsersConnections } from "../../fetch/users/users";
import { getAllUsers } from "../../fetch/users/users";


function Connections() {
    const { authData } = useContext(AuthContext); // logged users data
    const [connectedWith, setConnectedWith] = useState([]); // logged users actual connections/connected people

    /* connectionRequests ir objekts ar 2 array - recieved un sent, to vēlāk jāapdomā un jānodod kompinentē pareizi */
    const [connectionRequests, setConnectionRequests] = useState({});

    const [explore, setExplore] = useState([]); // all users in database
    console.log(explore, "explored iekš Connections.jsx")
    // explore needs to be except users what im connected with


    // EXPLORE 
    useEffect(() => {
        fetchAllUsers();
        fetchLoggedUserConnections();
    }, [])

    const fetchLoggedUserConnections = async () => {
        const responseData = await getUsersConnections(authData.userId, authData.token);
        setConnectedWith(responseData.data.connections.connected);
        setConnectionRequests(responseData.data.connections.requests)
    }

    const fetchAllUsers = async () => {
        const usersResponseData = await getAllUsers(authData.token);
        setExplore(usersResponseData.data.users)
    }

    return <div className="connections__feed__container">
        {connectedWith.length ?
            <div className="connections__feed__block">
                <h4>Your connections: {connectedWith.length}</h4>
                <div className="connections__feed__block__items">
                    <MyConnections connected={connectedWith} />
                </div>
            </div>
            :
            null
        }

        <div className="connections__feed__block">
            <h4>Explore and get connected with new people!</h4>
            <div className="connections__feed__block__items">
                {explore.length ? <ExploreConnections explore={explore} setExplore={setExplore} setConnectedWith={setConnectedWith} /> : <div style={{ textAlign: "center" }}>Currently there are no active connection options</div>}
            </div>
        </div>

        <div className="connections__feed__block">
            <h4>Requests for connection</h4>
            <div className="connections__feed__block__items">
                {connectionRequests.recieved && connectionRequests.recieved.length ? <Request requests={connectionRequests} /> : <div style={{ textAlign: "center" }}>There are no pending requests</div>}
            </div>
        </div>
    </div>
}

export default Connections;