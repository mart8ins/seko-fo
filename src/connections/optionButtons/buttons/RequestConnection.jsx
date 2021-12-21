import React, { useContext } from 'react';
import "../optionButtons.css";
import { AuthContext } from '../../../context/auth-context';
import { ConnectionsContext } from '../../../context/connections-context';
import { fetchRequestConnection } from "../../../fetch/connections";

// getAllUsers
const RequestConnection = ({ userId }) => {
    const { authData } = useContext(AuthContext);
    const { getAllUsers } = useContext(ConnectionsContext);

    const sendRequest = async () => {
        await fetchRequestConnection(authData.token, userId);
        getAllUsers(authData.token); // after connection request is sent fetch updated data / all users for connection context
    }

    return (
        <button
            onClick={sendRequest}
            className="card__user__options__btns request__connection">
            Request connection
        </button>
    )
}

export default RequestConnection
