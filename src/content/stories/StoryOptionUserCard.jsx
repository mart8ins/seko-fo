import React from 'react';
import { Link } from "react-router-dom";

const StoryOptionUserCard = ({ firstName, lastName, userProfileImage, authorId }) => {
    return (
        <div className="user__story__options__user__card">

            <div className="user__story__options__user__card__content">
                <p>Story author</p>
                <div className="user__story__options__user__card__name">
                    {firstName} {lastName}
                </div>
                <div className="user__story__options__user__card__image">
                    <img src={userProfileImage || "/images/no_image.png"} alt="" />
                </div>
                <div className="user__story__options__user__card__link">
                    <Link to={`/user/${authorId}/profile`}>View users profile</Link>
                </div>
            </div>

        </div>
    )
}

export default StoryOptionUserCard
