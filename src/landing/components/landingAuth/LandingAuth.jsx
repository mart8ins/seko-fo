import React, { useContext, useEffect } from 'react'
import "./landingAuth.css";
import { AuthContext } from '../../../context/auth-context';
import { ConnectionsContext } from '../../../context/connections-context';
import socket from "../../../socket/socket";

import MyCV from '../myCV/MyCV';

const LandingAuth = () => {
    const { authData } = useContext(AuthContext);
    const { usersOnline, setUsersOnline } = useContext(ConnectionsContext);


    // AFTER AUTHENTIFICATION STORE USER ID AND SOCKET ID IN BACKEND, AND FRONT END USERONLINE ARRAY
    useEffect(() => {
        socket.emit("USER IS ONLINE", { userId: authData.userId }, (users) => {
            setUsersOnline(users)
        });
    }, [authData.userId])

    return (
        <div>
            <MyCV />
        </div>
    )
}

export default LandingAuth
