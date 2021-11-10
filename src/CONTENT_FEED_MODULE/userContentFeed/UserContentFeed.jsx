import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import queryString from 'query-string';
import "./userContentFeed.css";

import UserStoryContent from "../../STORY_MODULE/show_story/UserStoryContent";
import UserWorkoutContent from "../../WORKOUT_MODULE/show_workout/UserWorkoutContent";

const UserContentFeed = ({ user }) => {
    // IF AFTER READING CONTENT USER WHANTS TO SEE ALL SPECIFIC TYPE OF CONTENT, 
    // USING LINK REDIRECTS TO IT USING QUERY INSTEAD OF OPENING USER DEFAULT TYPE
    const history = useHistory();
    const location = useLocation();
    const queryValue = queryString.parse(history.location.search);

    const [feedToShow, setFeedToShow] = useState("story");

    const [workoutSavedMessage, setWorkoutSavedMessage] = useState(false);

    const chooseFeedHandler = (e) => {
        setFeedToShow(e.target.id);
        location.search = "";
        history.replace({
            search: ""
        })

    }

    useEffect(() => {
        if (queryValue.type) {
            setFeedToShow(queryValue.type);
        }
    }, [queryValue]);


    useEffect(() => {
        if (queryValue.type === "workout") {
            setWorkoutSavedMessage(true);
        }
        setTimeout(() => {
            setWorkoutSavedMessage(false);
        }, 5000);
    }, []);


    return (
        <div className="user__profile__content__container">
            {workoutSavedMessage && <p className="workout__is__saved">Workout is saved</p>}
            <div className="user__profile__button__container">
                <button onClick={chooseFeedHandler} id="story" className={`content__choose__button ${feedToShow === "story" && "choose__button__active"}`}>Story</button>
                <button onClick={chooseFeedHandler} id="workout" className={`content__choose__button ${feedToShow === "workout" && "choose__button__active"}`}>Workout</button>
            </div>



            {feedToShow === "story" && <UserStoryContent user={user} />}
            {feedToShow === "workout" && <UserWorkoutContent user={user} />}

        </div>
    )
}

export default UserContentFeed
