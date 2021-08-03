import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./connectionCard.css";
import { AuthContext } from "../../../context/auth-context";
import { ConnectionsContext } from "../../../context/connections-context";
import { requestConnection, acceptConnectionRequest } from "../../../fetch/users/users";
import useConnectionStatus from "../../../hooks/useConnectionStatus";

const ConnectionCard = ({ user, sent, recieved }) => {
    /* {sent, recieved} ->>> params not state  <<<<--- true or false for buttons for ConnectionRequests.jsx component
   to show Request sent or Accept request */

    const { setExplore, setConnectedWith, setRequestRecieved, setRequestSent } = useContext(ConnectionsContext);
    const { authData } = useContext(AuthContext); // logged users data

    // connection status hook for button status
    let { isConnected, isRequestRecieved, isRequestSent } = useConnectionStatus(user.userId || user._id, authData.userId, authData.token);


    // send request for connection to explored user, is status is 201 then request is successfully created
    const sendRequestForConnection = async (e) => {
        e.preventDefault();
        const res = await requestConnection(user._id, authData.token);
        const { updatedRequests } = res.data.data;
        setRequestSent(updatedRequests.sent);
    }

    // accept incoming connection request
    const acceptIncomingRequestForConnection = async (e) => {
        e.preventDefault();
        const res = await acceptConnectionRequest(user._id || user.userId, authData.token);
        const { updatedExplore, updatedConnectedWith, updatedRecievedRequests } = res.data.data;
        // update UI with new data after connection request is accepted
        setExplore(updatedExplore);
        setConnectedWith(updatedConnectedWith);
        setRequestRecieved(updatedRecievedRequests);
    }

    return (
        <div>
            <div className="card__container">
                <div className="card__user__name">{user.firstName + " " + user.lastName}</div>
                <img className="card__user__photo" alt="User" src={user.photo || "https://images.unsplash.com/photo-1514588645531-00b8822ad997?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"} />
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



                        {!isConnected ?
                            <div>
                                {isRequestSent || sent ?
                                    <button
                                        className="card__user__options__btns request__sent"
                                        disabled>
                                        Request sent
                                    </button> : null}

                                {!isRequestRecieved && !isRequestSent ? <button
                                    onClick={sendRequestForConnection}
                                    className="card__user__options__btns request__connection">
                                    Request connection
                                </button> : null}


                                {isRequestRecieved || recieved ? <button
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