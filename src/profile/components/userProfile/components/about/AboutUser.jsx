import React, { useContext, useState, useEffect } from "react";
import { MessageContext } from "../../../../../context/message-context";
import globalVariables from "../../../../../globalVariables";
import { AuthContext } from "../../../../../context/auth-context";


// 
const AboutUser = ({ acceptRequest, sendRequest, user }) => {
    const { authData } = useContext(AuthContext);
    const { messageData, setMessageData } = useContext(MessageContext);
    const image = user.photo && user.photo.profile ? `${globalVariables.server}${user.photo.profile}` : "/images/no_image.png";
    console.log(user)
    const openMessageModal = () => {
        setMessageData({
            userId: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            show: !messageData.show
        })
    }

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

            <div className="user__profile__options__btns__container">
                <button onClick={openMessageModal} className="user__profile__options__btns">Send message</button>
                {status.isConnected && <button className="user__profile__options__btns request__remove">Remove from connections</button>}

                {!status.isConnected && !status.isRequestRecieved && !status.isRequestSent ? <button onClick={sendRequest} className="user__profile__options__btns">Request connection</button> : null}
                {!status.isConnected && status.isRequestSent && <button className="user__profile__options__btns request__sent">Request sent</button>}
                {!status.isConnected && status.isRequestRecieved && <button onClick={acceptRequest} className="user__profile__options__btns request__pending">Accept request</button>}
            </div>
        </div>
    </div>
}

export default AboutUser;