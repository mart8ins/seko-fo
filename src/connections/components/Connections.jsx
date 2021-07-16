import React, { useState } from "react";
import "./connections.css";
import Connection from "./connection/Connection";
import Request from "./request/Request";

import { connections, explore } from "../seed";

function Connections() {
    // console.log(connections)
    // const [requests, setRequest] = useState({});
    // const [connections, setConnections] = useState({})
    // const [explore, setExplore] = useState({})
    /* 
    * FETCH RECIEVED USERS CONNECTION REQUESTS
    * FETCH FROM DB USERS CONNECTIONS
    * FETCH FROM DB ALL USERS FOR CONNECTION EXPLORE
    */
    return <div className="connections__feed__container">
        {connections.connected.length ?
            <div className="connections__feed__block">
                <h4>Your connections: {connections.connected.length}</h4>
                <div className="connections__feed__block__items">
                    <Connection data={{ type: "connected", connected: connections.connected }} />
                </div>
            </div>
            :
            null
        }

        <div className="connections__feed__block">
            <h4>Explore and get connected with new people!</h4>
            <div className="connections__feed__block__items">
                {explore.length ? <Connection data={{ type: "explore", explore: explore }} /> : <div style={{ textAlign: "center" }}>Currently there are no active connection options</div>}
            </div>
        </div>

        <div className="connections__feed__block">
            <h4>Requests for connection</h4>
            <div className="connections__feed__block__items">
                {connections.requests.length ? <Request requests={connections.requests} /> : <div style={{ textAlign: "center" }}>There are no pending requests</div>}
            </div>
        </div>
    </div>
}

export default Connections;