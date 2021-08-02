import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./connectionCard.css";
import { AuthContext } from "../../../context/auth-context";
import { ConnectionsContext } from "../../../context/connections-context";
import { useEffect } from "react/cjs/react.development";
import { requestConnection, acceptConnectionRequest } from "../../../fetch/users/users";

const ConnectionCard = ({ user, sent, recieved, setRecieved }) => {
    const { setExplore, setConnectedWith } = useContext(ConnectionsContext);
    /*
    {sent, recieved} ->>> params not state for setRecieved <<<<--- true or false for buttons for ConnectionRequests.jsx component
    to show Request sent or Accept request
    */
    const { authData } = useContext(AuthContext); // logged users data
    const [requestIsSent, setRequestIsSent] = useState(false); // status if request for connection is sent to explored user

    // explored users recieved requests and to check if logged user recieved requst from explored user
    const [recievedRequests, setRecievedRequests] = useState(user.connections ? user.connections.requests.recieved : []);
    const [sentRequests, setSentRequests] = useState(user.connections ? user.connections.requests.sent : []);
    // check if explored user already sent invitation request for logged user
    const [requestIsRecieved, setRequestIsRecieved] = useState(false);


    // send request for connection to explored user, is status is 201 then request is successfully created
    const sendRequestForConnection = async (e) => {
        e.preventDefault();
        const res = await requestConnection(user._id, authData.token);
        // const { updatedRequests } = res.data.data;
        if (res.status === 201) {
            setRequestIsSent(true);
        }
    }

    // accept incoming connection request
    const acceptIncomingRequestForConnection = async (e) => {
        e.preventDefault();
        const res = await acceptConnectionRequest(user._id || user.userId, authData.token);
        const { updatedExplore, updatedConnectedWith, updatedRecievedRequests } = res.data.data;
        // update UI with new data after connection request is accepted
        setExplore(updatedExplore);
        setConnectedWith(updatedConnectedWith);
        if (recieved) {
            setRecieved(updatedRecievedRequests);
        }
    }

    useEffect(() => {
        // check if explored user recieved request from logged user and set state (for page refresh)
        if (recievedRequests.length) {
            setRequestIsSent(recievedRequests.some((user) => user.userId == authData.userId)) // return boolean
        }
    }, [recievedRequests])
    useEffect(() => {
        // check if explored already sent request for logged user
        if (sentRequests.length) {
            setRequestIsRecieved(sentRequests.some((user) => user.userId == authData.userId)) // return boolean
        }
    }, [sentRequests])

    return (
        <div>
            <div className="card__container">
                <div className="card__user__name">{user.firstName + " " + user.lastName}</div>
                <img className="card__user__photo" src={user.photo || "https://images.unsplash.com/photo-1514588645531-00b8822ad997?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"} />
                <div className="card__user__options__container">

                    <div className="buttons__container">
                        <Link to={`/user/${user._id || user.userId}/profile`}>
                            <button
                                className="card__user__options__btns">
                                View Profile
                            </button>
                        </Link>
                        <button
                            className="card__user__options__btns">
                            New msg
                        </button>

                        {!user.connectedDate ?
                            <div>

                                {requestIsSent || sent ?
                                    <button
                                        className="card__user__options__btns request__sent"
                                        disabled>
                                        Request sent
                                    </button> : null}

                                {!requestIsRecieved && !requestIsSent && !recieved && !sent ? <button
                                    onClick={sendRequestForConnection}
                                    className="card__user__options__btns request__connection">
                                    Request connection
                                </button> : null}


                                {requestIsRecieved || recieved ? <button
                                    onClick={acceptIncomingRequestForConnection}
                                    className="card__user__options__btns request__pending">
                                    Accept request
                                </button> : null}
                            </div>
                            : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConnectionCard;