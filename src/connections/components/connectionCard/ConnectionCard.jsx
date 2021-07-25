import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./connectionCard.css";
import { AuthContext } from "../../../context/auth-context";
import { useEffect } from "react/cjs/react.development";
import { requestConnection } from "../../../fetch/users/users";

const ConnectionCard = ({ user }) => {
    const { authData } = useContext(AuthContext); // logged users data
    const [requestIsSent, setRequestIsSent] = useState(false); // status if request for connection is sent to explored user
    const [recievedRequests, setRecievedRequests] = useState(user.connections.requests.recieved); // explored users recieved requests

    const [sentRequests, setSentRequests] = useState(user.connections.requests.sent); // to check if logged user recieved requst from explored user
    const [requestIsRecieved, setRequestIsRecieved] = useState(false);
    // check if explored user already sent invitation request for logged user


    // send request for connection to explored user, is status is 200 then request is successfully sent
    const sendRequestForConnection = async (e) => {
        e.preventDefault();
        const res = await requestConnection(user._id, authData.token);
        if (res.status === 200) {
            setRequestIsSent(true);
        }
    }

    // accept incoming connection request
    const acceptIncomingRequestForConnection = (e) => {
        e.preventDefault();
        console.log("Incoming accepted")
    }

    useEffect(() => {
        // check if explored user recieved request from logged user and set state (for page refresh)
        setRequestIsSent(recievedRequests.some((user) => user.user == authData.userId)) // return boolean
    }, [recievedRequests])
    useEffect(() => {
        // check if explored already sent request for logged user
        setRequestIsRecieved(sentRequests.some((user) => user.user == authData.userId)) // return boolean
    }, [sentRequests])

    return (
        <div>
            <div className="card__container">
                <div className="card__user__name">{user.firstName + " " + user.lastName}</div>
                <img className="card__user__photo" src={user.photo || "https://images.unsplash.com/photo-1514588645531-00b8822ad997?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"} />
                <div className="card__user__options__container">

                    <button className="card__user__options__btns"><Link to={`/user/${user._id}/profile`}>View Profile</Link></button>
                    <button className="card__user__options__btns">New msg</button>

                    {!user.connectedDate ?
                        // <form onSubmit={sendRequestForConnection}>
                        <div>
                            {requestIsSent ?
                                <button onClick={sendRequestForConnection} className="card__user__options__btns request__sent" disabled>Request sent</button>
                                :
                                !requestIsRecieved ?
                                    <button className="card__user__options__btns request__connection">Request connection</button>
                                    :
                                    <button onClick={acceptIncomingRequestForConnection} className="card__user__options__btns request__pending">Accept request</button>
                            }
                        </div>

                        // </form>
                        : null}

                </div>
            </div>
        </div>
    )
}

export default ConnectionCard;