import React, { useContext, useState, useEffect } from "react";
import globalVariables from "../../../../globalVariables";
import { AuthContext } from "../../../../context/auth-context";

import ProfileOptionButtons from "./ProfileOptionButtons";

const AboutUser = ({ user, getUser }) => {
    const { authData } = useContext(AuthContext);

    const image = user.photo && user.photo.profile ? `${globalVariables.server}${user.photo.profile}` : "/images/no_image.png";
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
    }, [user])


    return <div>
        <div className="user__profile">
            <div className="connected__status">
                {status.isConnected ? <div className="connected__status__true">Connected</div> : <div className="connected__status__false">Not connected</div>}
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