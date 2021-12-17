import React, { useState, useEffect, useContext } from 'react';
import "./connectionsOnline.css";
import { AuthContext } from "../../../../../../context/auth-context";
import { fetchAllUsers } from "../../../../../../fetch/connections";
import UserAvatar from "./UserAvatar";

const ConnectionsOnline = () => {
    const { authData } = useContext(AuthContext);

    // pagaidu varant pirms socket implementēšanas
    const [usersFromDb, setUsersFromDb] = useState([]);

    useEffect(() => {
        getUsersFromDB();
    }, [setUsersFromDb]);

    const getUsersFromDB = async () => {
        const res = await fetchAllUsers(authData.token);
        setUsersFromDb(res.data.allUsers)
    }

    return (
        <div className="connections__online__container">

            <div className="connections__online__title">
                <p>Connections online</p>
            </div>

            <div className="connections__online">

                {!usersFromDb.length &&
                    <div>
                        All conencted user are offline
                    </div>
                }

                {
                    usersFromDb.map((user) => {
                        return <UserAvatar user={user} />
                    })
                }

            </div>
        </div>
    )
}

export default ConnectionsOnline
