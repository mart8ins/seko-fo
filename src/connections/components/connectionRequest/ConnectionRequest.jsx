import React, { useState, useEffect } from "react";
import "./connectionRequest.css";
import { v4 as uuidv4 } from 'uuid';
import ConnectionCard from "../connectionCard/ConnectionCard";

const ConnectionRequest = ({ requestSent, requestRecieved }) => {
    const [recieved, setRecieved] = useState([]);
    const [sent, setSent] = useState([]);

    useEffect(() => {
        setRecieved(requestRecieved);
        setSent(requestSent);
    })

    const renderRecieved = (recieved) => {
        return <ConnectionCard
            key={uuidv4()}
            user={recieved}
            recieved
        />
    }
    const renderSent = (sent) => {
        return <ConnectionCard
            key={uuidv4()}
            user={sent}
            sent
        />
    }

    return (
        <div className="connection__request__container">
            {recieved && recieved.length ?
                <div className="connection__request__type__container type__recieved">
                    <h5>Recieved <span className="request__count">{recieved && recieved.length}</span> requests for connection</h5>
                    <div className="connection__request__recieved">
                        {recieved.map(renderRecieved)}
                    </div>
                </div> : null}


            {sent && sent.length ?
                <div className="connection__request__type__container type__sent">
                    <h5>Sent <span className="request__count">{sent && sent.length}</span> requests for connection</h5>
                    <div className="connection__request__sent">
                        {sent.map(renderSent)}
                    </div>
                </div> : null}


        </div>
    )
}

export default ConnectionRequest;