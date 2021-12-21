import React, { useState, useEffect, useContext } from 'react';
import "./connectionsOnline.css";
import { ConnectionsContext } from '../../../../../../context/connections-context';
import UserAvatar from "./UserAvatar";
import socket from "../../../../../../socket/socket";
import { v4 as uuidv4 } from 'uuid';

const ConnectionsOnline = () => {
    const { usersOnline, setUsersOnline, connectedWith } = useContext(ConnectionsContext);

    const [userFriendsOnline, setUserFriendsOnline] = useState([])

    // UPDATE ON EVERY NEW LOGIN IN THE APP
    socket.on("SEND UPDATE ON USERS ONLINE", (users) => {
        setUsersOnline(users);
        socket.emit("USERS ONLINE UPDATED");
    });

    // FILTER friends online
    useEffect(() => {
        const users1 = [];
        if (usersOnline.length && connectedWith.length) {
            usersOnline.forEach((userOnline) => {
                connectedWith.forEach((userFriend) => {
                    if (String(userFriend._id) === String(userOnline.userId)) {
                        users1.push(userFriend);
                    }
                })
            });
            setUserFriendsOnline(users1);
        }
    }, [usersOnline, connectedWith]);

    return (
        <div className="connections__online__container">

            <div className="connections__online__title">
                <p>Connections online</p>
            </div>

            <div className="connections__online">

                {!userFriendsOnline.length &&
                    <div className="connections__online__no__users">
                        All connected users are offline
                    </div>
                }

                {
                    userFriendsOnline.map((user) => {
                        return <UserAvatar key={uuidv4()} user={user} />
                    })
                }

            </div>
        </div>
    )
}

export default ConnectionsOnline
