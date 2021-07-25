import React from "react";
import "./connection.css";
import { v4 as uuidv4 } from 'uuid';
import ConnectionCard from "../connectionCard/ConnectionCard";

const MyConnections = ({ connected }) => {
    const connections = connected;

    const renderConnectionCards = (user) => {
        return <ConnectionCard key={uuidv4()} user={user} />
    }
    return (
        <div className="connection__cards__container">
            {connections.map(renderConnectionCards)}
        </div>
    )
}

export default MyConnections;