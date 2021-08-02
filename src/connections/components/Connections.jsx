import React, { useContext } from "react";
import "./connections.css";
import ExploreConnections from "./exploreConnections/ExploreConnections";
import MyConnections from "./myConnections/MyConnections";
import ConnectionRequest from "./connectionRequest/ConnectionRequest";
import { ConnectionsContext } from "../../context/connections-context";


function Connections() {
    const { explore,
        connectedWith,
        connectionRequests
    } = useContext(ConnectionsContext);

    return <div className="connections__feed__container">

        <div className="connections__feed__block">
            <div>
                <h4>Requests for connection </h4>
            </div>
            <div className="connections__feed__block__items">
                {connectionRequests.recieved || connectionRequests.sent ?
                    <ConnectionRequest />
                    :
                    <div style={{ textAlign: "center" }}>There are no pending requests</div>}
            </div>
        </div>

        {connectedWith.length ?
            <div className="connections__feed__block">
                <h4>Your connections: {connectedWith.length}</h4>
                <div className="connections__feed__block__items">
                    <MyConnections />
                </div>
            </div>
            :
            null
        }

        <div className="connections__feed__block">
            <h4>Explore and get connected with new people!</h4>
            <div className="connections__feed__block__items">
                {explore.length ? <ExploreConnections />
                    :
                    <div style={{ textAlign: "center" }}>Currently there are no active connection options</div>}
            </div>
        </div>
    </div>
}

export default Connections;