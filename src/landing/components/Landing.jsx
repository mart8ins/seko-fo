import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../context/auth-context";
import { ConnectionsContext } from "../../context/connections-context";

import socketClient from "socket.io-client";
const ENDPOINT = "http://localhost:3002/";
const socket = socketClient(ENDPOINT);

function LandingPage() {
    const { authData } = useContext(AuthContext);
    const { usersOnline, setUsersOnline } = useContext(ConnectionsContext);

    /* AFTER SUCCESFUL AUTHENTIFICATION ADD USER TO SOCKETID/USERID ARRAY IN BACKEND
       ALSO RETURN ARRAY WITH ALL USERS WHO IS ONLINE
    */
    useEffect(() => {
        if (authData.userId) {
            socket.emit("USER IS ONLINE", { userId: authData.userId }, (users) => {
                setUsersOnline(users)
            });
        }
    }, [authData]);

    console.log(usersOnline)

    return <div>
        {authData.userId ? `USER IS LOGGED. ALSO THERE IS MORE LOGED USERS - COUNT ${usersOnline.length} ` : "ANONĪMS USERS"}
    </div>

}

export default LandingPage;