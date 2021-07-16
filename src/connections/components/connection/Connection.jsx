import React from "react";
import "./connection.css";
import ConnectionCard from "../connectionCard/ConnectionCard";

const Connection = (props) => {
    const connected = props.data.type === "connected" ? props.data.connected : props.data.explore;

    const renderConnectionCards = (user) => {
        return <ConnectionCard user={user} />
    }
    return (
        <div className="connection__cards__container">
            {connected.map(renderConnectionCards)}
        </div>
    )
}

export default Connection;