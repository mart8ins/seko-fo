import React, { useEffect, useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { ConnectionsContext } from "../context/connections-context";

import socket from "../socket/socket";

function LandingPage() {
    const { authData } = useContext(AuthContext);
    const { usersOnline, setUsersOnline } = useContext(ConnectionsContext);

    // AFTER AUTHENTIFICATION STORE USER ID AND SOCKET ID IN BACKEND, AND FRONT END USERONLINE ARRAY
    useEffect(() => {
        socket.emit("USER IS ONLINE", { userId: authData.userId }, (users) => {
            setUsersOnline(users)
        });
    }, [authData.userId])

    return <div>
        {authData.userId ? `USER IS LOGGED. ALSO THERE IS MORE LOGED USERS - COUNT ${usersOnline.length} ` : "ANONĪMS USERS"}
        <p>Landing.jsx</p>
    </div>

}

export default LandingPage;