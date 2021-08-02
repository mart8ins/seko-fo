import React, { useContext } from "react";
import "./connection.css";
import { v4 as uuidv4 } from 'uuid';
import ConnectionCard from "../connectionCard/ConnectionCard";
import { ConnectionsContext } from "../../../context/connections-context";

const MyConnections = () => {
    const { connectedWith } = useContext(ConnectionsContext)

    const renderConnectionCards = (user) => {
        return <ConnectionCard key={uuidv4()} user={user} />
    }
    return (
        <div className="connection__cards__container">
            {connectedWith.map(renderConnectionCards)}
        </div>
    )
}

export default MyConnections;