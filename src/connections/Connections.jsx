import React, { useContext } from "react";
import "./connections.css";
import ExploreConnections from "./exploreConnections/ExploreConnections";
import MyConnections from "./myConnections/MyConnections";
import ConnectionRequest from "./connectionRequest/ConnectionRequest";
import { ConnectionsContext } from "../context/connections-context";

function Connections() {
    const { explore } = useContext(ConnectionsContext);


    return <div className="connections__feed__container">

        <div className="connections__feed__block">
            <h4>Explore and get connected with new people!</h4>
            <div className="connections__feed__block__items">
                <ExploreConnections explore={explore} />
            </div>
        </div>

        <div className="connections__feed__block">
            <div>
                <h4>Requests for connection </h4>
            </div>
            <div className="connections__feed__block__items">
                <ConnectionRequest
                    explore={explore} />
            </div>
        </div>

        <div className="connections__feed__block">
            <h4>Your connections</h4>
            <MyConnections explore={explore} />
        </div>



    </div>
}

export default Connections;