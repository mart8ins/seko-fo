import React from 'react';
import "../optionButtons.css";
import { Link } from "react-router-dom";

const ViewProfile = ({ userId }) => {
    return (
        <Link to={`/user/${userId}/profile`}>
            <button
                className="card__user__options__btns">
                View Profile
            </button>
        </Link>
    )
}

export default ViewProfile
