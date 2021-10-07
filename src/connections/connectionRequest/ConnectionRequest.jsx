import React, { useContext, useRef, useState, useEffect } from "react";
import "./connectionRequest.css";
import { AuthContext } from "../../context/auth-context";
import { v4 as uuidv4 } from 'uuid';
import ConnectionCard from "../connectionCard/ConnectionCard";

const ConnectionRequest = ({ explore }) => {
    let containerRefForSent = useRef();
    let containerRefForRecieved = useRef();
    const [noSent, setNoSent] = useState(false);
    const [noRecieved, setNoRecieved] = useState(false);


    const { authData: { userId } } = useContext(AuthContext);

    const renderRecieved = (sent) => {
        const userRecievedRequest = sent.connections.requests.recieved.some(user => {
            return user.userId === userId;
        })
        if (userRecievedRequest) {
            return <ConnectionCard
                key={uuidv4()}
                user={sent}
                userRecievedRequest={userRecievedRequest}
            />
        }
    };
    useEffect(() => {
        if (containerRefForRecieved.current.childElementCount == 0) {
            setNoRecieved(true)
        }
        if (containerRefForRecieved.current.childElementCount > 1 && containerRefForRecieved.current.children[1].className === "card__container") {
            setNoRecieved(false)
        }
    })

    const renderSent = (recieved) => {
        const userSentRequest = recieved.connections.requests.sent.some(user => {
            return user.userId === userId;
        })
        if (userSentRequest) {
            return <ConnectionCard
                key={uuidv4()}
                user={recieved}
                userSentRequest={userSentRequest}
            />
        }
    };
    useEffect(() => {
        if (containerRefForSent.current.childElementCount == 0) {
            setNoSent(true)
        }
        if (containerRefForSent.current.childElementCount > 1 && containerRefForSent.current.children[1].className === "card__container") {
            setNoSent(false)
        }
    })

    return (
        <div className="connection__request__container">
            <div className="connection__request__type__container type__recieved">
                <h5>Sent requests for connection</h5>
                <div ref={containerRefForSent} className="connection__request__recieved">
                    {noSent && <div style={{ textAlign: "center", width: "100%", fontWeight: "bold", color: "grey" }}>Currently you dont have any sent connection requests</div>}
                    {explore.map(renderRecieved)}
                </div>
            </div>


            {true ?
                <div className="connection__request__type__container type__sent">
                    <h5>Recieved requests for connection</h5>
                    <div ref={containerRefForRecieved} className="connection__request__sent">
                        {noRecieved && <div style={{ textAlign: "center", width: "100%", fontWeight: "bold", color: "grey" }}>Currently you dont have any recieved connection requests</div>}
                        {explore.map(renderSent)}
                    </div>
                </div> : <div>No recieved requests</div>}
        </div>
    )
}

export default ConnectionRequest;