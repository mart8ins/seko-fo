import React from "react";
import "./connection.css";
import { v4 as uuidv4 } from 'uuid';
import ConnectionCard from "../connectionCard/ConnectionCard";

const ExploreConnections = ({ explore, setExplore, setConnectedWith }) => {
    const connections = explore;
    const renderConnectionCards = (user) => {
        return <ConnectionCard key={uuidv4()} user={user} setExplore={setExplore} setConnectedWith={setConnectedWith} />
    }
    return (
        <div className="connection__cards__container">
            {connections.map(renderConnectionCards)}
        </div>
    )
}

export default ExploreConnections;