import React, { useEffect, useState } from "react";
import "./connection.css";
import { v4 as uuidv4 } from 'uuid';
import ConnectionCard from "../connectionCard/ConnectionCard";

const MyConnections = ({ connectedWith }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [connected, setConnected] = useState([]);
    useEffect(() => {
        setConnected(connectedWith)
    }, [connectedWith])

    const renderConnectionCards = (user) => {
        return <ConnectionCard key={uuidv4()} user={user} />
    }
    return (
        <div className="connection__cards__container">
            {isLoading ?
                connected.map(renderConnectionCards) :
                <div>Loading...</div>
            }
        </div>
    )
}

export default MyConnections;