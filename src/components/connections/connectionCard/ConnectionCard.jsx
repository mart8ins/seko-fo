import React from "react";
import { Link } from "react-router-dom";
import "./connectionCard.css"

const ConnectionCard = ({ user }) => {
    console.log(user)
    // {user.firstName}
    // {user.lastName}
    // <img src={user.photo} />
    return (
        <div>
            <div className="card__container">
                <div className="card__user__name">{user.firstName + " " + user.lastName}</div>
                <img className="card__user__photo" src={user.photo} />
                <div className="card__user__options__container">

                    <button className="card__user__options__btns"><Link to={"/user/" + user.id}>View Profile</Link></button>
                    <button className="card__user__options__btns">New msg</button>

                    {!user.connectedDate ? <button className="card__user__options__btns">Request connection</button> : null}

                </div>
            </div>
        </div>
    )
}

export default ConnectionCard;