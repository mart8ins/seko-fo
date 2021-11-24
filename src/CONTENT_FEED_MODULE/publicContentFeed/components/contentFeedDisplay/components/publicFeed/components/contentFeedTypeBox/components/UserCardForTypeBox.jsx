import React from 'react';
import { Link } from "react-router-dom";
import "./userCardForTypeBox.css";

const UserCardForTypeBox = ({ authorId, firstName, lastName, userProfilePhoto }) => {
    return (
        <div className="content__feed__type__box__bottom">
            <Link to={`/user/${authorId}/profile`}>
                {firstName + " " + lastName}
            </Link>
            <img src={userProfilePhoto} />
        </div>
    )
}

export default UserCardForTypeBox
