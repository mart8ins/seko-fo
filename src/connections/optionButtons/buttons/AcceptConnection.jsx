import React, { useContext } from 'react'
import "../optionButtons.css";
import { fetchAcceptConnection } from "../../../fetch/connections";
import { AuthContext } from "../../../context/auth-context";
import { ConnectionsContext } from "../../../context/connections-context";

const AcceptConnection = ({ userId }) => {
    const { authData } = useContext(AuthContext);
    const { getAllUsers } = useContext(ConnectionsContext);

    const acceptRequest = async () => {
        await fetchAcceptConnection(authData.token, userId);
        getAllUsers(authData.token);
    }

    return (
        <button
            onClick={acceptRequest}
            className="card__user__options__btns request__pending">
            Accept request
        </button>
    )
}

export default AcceptConnection
