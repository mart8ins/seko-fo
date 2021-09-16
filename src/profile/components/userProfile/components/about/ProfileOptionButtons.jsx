import React, { useContext } from 'react';
import { MessageContext } from '../../../../../context/message-context';
import { AuthContext } from "../../../../../context/auth-context";
import { ConnectionsContext } from '../../../../../context/connections-context';
import {
    fetchRequestConnection,
    fetchAcceptConnection,
    fetchRemoveConnection
} from "../../../../../fetch/users/connections";


const ProfileOptionButtons = ({ status, user, getUser }) => {
    const { authData: { token } } = useContext(AuthContext);
    const { getAllUsers } = useContext(ConnectionsContext)
    const { messageData, setMessageData } = useContext(MessageContext);

    const openMessageModal = () => {
        setMessageData({
            userId: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            show: !messageData.show
        })
    }
    const sendRequest = async () => {
        const res = await fetchRequestConnection(token, user._id);
        getAllUsers(token); // TO UPDATE CONNECTIONS CONTEXT FOR ALL APP
        getUser(); // TO UPDATE STATE FOR PROFILE
        console.log(res.data);
    }
    // accept incoming connection request
    const acceptRequest = async () => {
        const res = await fetchAcceptConnection(token, user._id);
        getAllUsers(token);
        getUser();
        console.log(res.data);
    }

    const removeConnection = async () => {
        const res = await fetchRemoveConnection(token, user._id);
        getAllUsers(token);
        getUser();
        console.log(res.data);
    }


    return (
        <div className="user__profile__options__btns__container">
            <button onClick={openMessageModal} className="user__profile__options__btns">Send message</button>
            {status.isConnected && <button onClick={removeConnection} className="user__profile__options__btns request__remove">Remove from connections</button>}

            {!status.isConnected && !status.isRequestRecieved && !status.isRequestSent ? <button onClick={sendRequest} className="user__profile__options__btns">Request connection</button> : null}
            {!status.isConnected && status.isRequestSent && <button className="user__profile__options__btns request__sent">Request sent</button>}
            {!status.isConnected && status.isRequestRecieved && <button onClick={acceptRequest} className="user__profile__options__btns request__pending">Accept connection</button>}
        </div>
    )
}

export default ProfileOptionButtons
