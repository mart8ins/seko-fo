import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../../context/auth-context";
import { ConnectionsContext } from "../../../../context/connections-context";

import ProfileOptionButtons from "./ProfileOptionButtons";
import socket from "../../../../socket/socket";

const AboutUser = ({ user, getUser }) => {
    const uId = String(user._id);
    const [userIsOnline, setUserIsOnline] = useState(false);

    const { authData } = useContext(AuthContext);
    const { usersOnline, setUsersOnline } = useContext(ConnectionsContext);

    useEffect(() => {
        const isOnline = usersOnline.some((user) => {
            return user.userId === uId;
        });
        setUserIsOnline(isOnline)
    }, [uId, userIsOnline]);

    // UPDATE ON EVERY NEW LOGIN IN THE APP
    socket.on("SEND UPDATE ON USERS ONLINE", (users) => {
        setUsersOnline(users);
    });


    const image = user.photo && user.photo.profile || "/images/no_image.png";
    const [status, setStatus] = useState({
        isConnected: false,
        isRequestRecieved: false,
        isRequestSent: false
    });

    useEffect(() => {
        let isConnected;
        let isRequestRecieved;
        let isRequestSent;

        if (user.connections) {
            if (user.connections.connected) {
                isConnected = user.connections.connected.some((user) => {
                    return user.userId === authData.userId;
                });
            } else {
                isConnected = false;
            }
            if (user.connections.requests.sent) {
                isRequestRecieved = user.connections.requests.sent.some((user) => {
                    return user.userId === authData.userId;
                })
            } else {
                isRequestRecieved = false;
            }
            if (user.connections.requests.recieved) {
                isRequestSent = user.connections.requests.recieved.some((user) => {
                    return user.userId === authData.userId;
                })
            } else {
                isRequestSent = false;
            }
        }
        setStatus({
            isConnected: isConnected,
            isRequestRecieved: isRequestRecieved,
            isRequestSent: isRequestSent
        })
    }, [user, authData.userId])


    return <div>
        <div className="user__profile">
            <div className="connected__status">
                {userIsOnline ? <p className="user__online__status__online">User is online</p> : <p className="user__online__status__offline">User is offline</p>}

                {status.isConnected ? <div className="connected__status__true">Connected with you</div> : <div className="connected__status__false">Not connected with you</div>}
            </div>
            <div className="user__profile__data">
                <div className="user__profile__header">
                    <div className="user__profile__photo__name">
                        <img alt="User" src={image} />
                        <h4>{`${user.firstName} ${user.lastName}`}</h4>
                    </div>
                </div>
                <div className="user__profile__bio">
                    <h3 className="about__me__heading">About me</h3>
                    <p className="about__me__text">{user.about}</p>
                </div>
            </div>
            <ProfileOptionButtons status={status} user={user} getUser={getUser} />
        </div>
    </div>
}

export default AboutUser;