import React from 'react';
import { Link } from "react-router-dom";
import globalVariables from "../../../../../../globalvar";

const UserAvatar = ({ user }) => {
    const image = user.photo.profile ? `${globalVariables.server}${user.photo.profile}` : "./images/no_image.png";


    return (
        <div key={user._id} className="user__online">
            <div className="user__online__indicator">
                <p></p>
            </div>

            <Link to={`/user/${user._id}/profile`} className="user__online__avatar">
                <img src={image} alt="Users avatar" />
                <p>
                    {user.firstName + " " + user.lastName}
                </p>
            </Link>
        </div>
    )
}

export default UserAvatar
