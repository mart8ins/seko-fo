import React, { useContext } from "react";
import { ConnectionsContext } from "../../../context/connections-context";
import "./connection.css";
import { v4 as uuidv4 } from 'uuid';
import ConnectionCard from "../connectionCard/ConnectionCard";

const ExploreConnections = () => {
    const { explore } = useContext(ConnectionsContext);

    const renderConnectionCards = (user) => {
        return <ConnectionCard
            key={uuidv4()}
            user={user}
        />
    }
    return (
        <div className="connection__cards__container">
            {explore.map(renderConnectionCards)}
        </div>
    )
}

export default ExploreConnections;