import React, { useEffect, useState } from "react";
import "./connection.css";
import { v4 as uuidv4 } from 'uuid';
import ConnectionCard from "../connectionCard/ConnectionCard";

const ExploreConnections = ({ explore }) => {
    const [exploreConnections, setExplore] = useState([])

    useEffect(() => {
        setExplore(explore);
    }, [explore])

    const renderConnectionCards = (user) => {
        return <ConnectionCard
            key={uuidv4()}
            user={user}
        />
    }
    return (
        <div className="connection__cards__container">
            {exploreConnections.map(renderConnectionCards)}
        </div>
    )
}

export default ExploreConnections;