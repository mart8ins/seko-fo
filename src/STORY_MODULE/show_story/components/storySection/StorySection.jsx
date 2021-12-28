import React from 'react';
import StoryOptionButtons from "./StoryOptionButtons";
import StoryOptionUserCard from "./StoryOptionUserCard";
import StoryRater from "../storyRater/StoryRater";

import "./storySection.css";

const StorySection = ({
    backGroundImage,
    storyId,
    title,
    rating,
    ratings,
    story,
    date,
    authorId,
    userId,
    firstName,
    lastName,
    userProfileImage,
    storyIsRated,
    userRated,
    fetchStory
}) => {
    return (
        <div className="user__story__container">
            {backGroundImage && <img className="user__story__image__background" src={backGroundImage} alt="Background for users story" />}

            <div className="user__story__view">
                <div className="user__story__view__top">
                    <div className="user__story__view__top__title">{title}</div>

                    {userId === authorId ?
                        <div className="user__story__view__top__rate">
                            <div>Rating <span className="rating__story__rate">{rating}/10</span> <span>- {ratings && ratings.length ? ratings.length : "0"} users rated</span></div>
                        </div>
                        :
                        <StoryRater storyId={storyId} storyIsRated={storyIsRated} userRated={userRated} storyRating={rating} storyRatings={ratings} fetchStory={fetchStory} />
                    }


                </div>

                <div className="user__story__view__middle">
                    {story}
                </div>

                <div className="user__story__view__bottom">{date ? new Date(date).toLocaleDateString() : null}</div>

            </div>

            {userId === authorId ?
                <StoryOptionButtons storyId={storyId} />
                :
                <StoryOptionUserCard firstName={firstName} lastName={lastName} userProfileImage={userProfileImage} authorId={authorId} />
            }
        </div>
    )
}

export default StorySection
