import React from "react";
import OptionButtons from "../optionButtons/OptionButtons";
import "./connectionCard.css";

const ConnectionCard = ({ user, connected, userSentRequest, userRecievedRequest }) => {
    const image = user.photo.profile || "./images/no_image.png";

    return (
        <div className="card__container">
            <div className="card__user__name">{user.firstName + " " + user.lastName}</div>
            <img className="card__user__photo" alt="User" src={image} />
            <div className="card__user__options__container">
                <OptionButtons
                    user={user}
                    connected={connected}
                    userSentRequest={userSentRequest}
                    userRecievedRequest={userRecievedRequest} />
            </div>
        </div>
    )
}

export default ConnectionCard;