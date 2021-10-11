import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../../context/auth-context';
import { rateStory } from '../../../../fetch/story';
import "./storyRater.css";

const StoryRater = ({ storyIsRated, userRated, storyRating, storyRatings, fetchStory, storyId }) => {
    const { authData } = useContext(AuthContext);
    const [rating, setRating] = useState(1);

    const changeHandler = (e) => {
        setRating(e.target.value)
    }

    const sendRate = async () => {
        const res = await rateStory(authData.token, storyId, rating);
        fetchStory();
    }

    return (
        <div>
            {storyIsRated ?
                <div className="user__story__rater">
                    <p className="user__story__rater__rating__left">Your rating -  <span>{userRated}</span></p>
                    <p className="user__story__rater__rating__total">Story total - <span>{storyRating}/10</span> from <span>{storyRatings && storyRatings.length || "0"}</span> users</p>
                </div>
                :
                <div className="user__story__rater">
                    <p>Rate this story</p>
                    <p className="user__story__rater__value">{rating}</p>
                    <input onChange={changeHandler} value={rating} id="rate" name="rate" type="range" step="1" min="1" max="10" />
                    <button onClick={sendRate}>Submit</button>
                </div>
            }

        </div>
    )
}

export default StoryRater
