import React, { useState, useContext, useEffect, useRef } from "react";
import "./connection.css";
import { AuthContext } from "../../../context/auth-context";
import { v4 as uuidv4 } from 'uuid';
import ConnectionCard from "../connectionCard/ConnectionCard";

const MyConnections = ({ explore }) => {
    let containerRef = useRef();

    const [noConnections, setNoConnections] = useState(false);

    const [exploreConnections, setExplore] = useState([]);
    const { authData: { userId } } = useContext(AuthContext);

    useEffect(() => {
        setExplore(explore);
    }, [explore])


    const renderConnectionCards = (user) => {
        // render connection card only if user is not connected with logged user
        const userConnected = user.connections.connected.some((user) => {
            return user.userId === userId;
        });
        if (userConnected) {
            return <ConnectionCard
                key={uuidv4()}
                user={user}
                connected={true}
            />
        }
    }

    useEffect(() => {
        if (containerRef.current.childElementCount == 0) {
            setNoConnections(true)
        }
        if (containerRef.current.childElementCount > 1 && containerRef.current.children[1].className === "card__container") {
            setNoConnections(false)
        }
    })

    return (
        <div ref={containerRef} className="connection__cards__container">
            {
                noConnections && <div style={{ textAlign: "center", width: "100%", fontWeight: "bold", color: "grey" }}>Currently you dont have any connected people. Explore and connect!</div>
            }
            {exploreConnections.map(renderConnectionCards)}
        </div>
    )
}

export default MyConnections;