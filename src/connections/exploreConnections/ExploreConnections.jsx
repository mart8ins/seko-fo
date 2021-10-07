import React, { useEffect, useState, useContext, useRef } from "react";
import "./connection.css";
import { v4 as uuidv4 } from 'uuid';
import ConnectionCard from "../connectionCard/ConnectionCard";
import { AuthContext } from "../../context/auth-context";

const ExploreConnections = ({ explore }) => {
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
        // check if explored user recieved or sent himself request for connection
        const userSentRequest = user.connections.requests.sent.some((user) => {
            return user.userId === userId;
        })
        const userRecievedRequest = user.connections.requests.recieved.some((user) => {
            return user.userId === userId;
        })


        if (!userConnected) {
            return <ConnectionCard
                key={uuidv4()}
                user={user}
                connected={false}
                userSentRequest={userSentRequest}
                userRecievedRequest={userRecievedRequest}
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
                noConnections && <div style={{ textAlign: "center", width: "100%", fontWeight: "bold", color: "grey" }}>Currently there are no active connection options!</div>
            }
            {exploreConnections.map(renderConnectionCards)}
        </div>
    )
}

export default ExploreConnections;