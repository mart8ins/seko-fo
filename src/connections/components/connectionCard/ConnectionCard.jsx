import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./connectionCard.css";
// CONTEXT
import { AuthContext } from "../../../context/auth-context";
// HOOKS
import useConnectPeople from "../../../hooks/useConnectPeople";
import useConnectionStatus from "../../../hooks/useConnectionStatus";

const ConnectionCard = ({ user, sent, recieved }) => {
    /* {sent, recieved} ->>> params not state  <<<<--- true or false for buttons for ConnectionRequests.jsx component
   to show Request sent or Accept request */

    // logged users data
    const { authData } = useContext(AuthContext);

    // hook for accepting or requesting connection
    const { sendRequestForConnection, acceptIncomingRequestForConnection } = useConnectPeople(user.userId || user._id);

    // connection status hook for button status
    let { isConnected, isRequestRecieved, isRequestSent } = useConnectionStatus(user.userId || user._id, authData.userId, authData.token);


    const sendRequest = () => {
        sendRequestForConnection();
    }
    const acceptRequest = () => {
        acceptIncomingRequestForConnection()
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
                            Send message
                        </button>



                        {!isConnected ?
                            <div>
                                {!isRequestRecieved && !isRequestSent ?
                                    <button
                                        onClick={sendRequest}
                                        className="card__user__options__btns request__connection">
                                        Request connection
                                    </button>
                                    :
                                    isRequestSent || sent ?
                                        <button
                                            className="card__user__options__btns request__sent"
                                            disabled>
                                            Request sent
                                        </button>
                                        :
                                        <button
                                            onClick={acceptRequest}
                                            className="card__user__options__btns request__pending">
                                            Accept request
                                        </button>
                                }
                            </div>
                            : null}


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConnectionCard;