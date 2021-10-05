import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import queryString from 'query-string';
import "./userContentFeed.css";

import UserStoryContent from "./components/UserStoryContent/UserStoryContent";
import UserProgressContent from "./components/UserProgressContent/UserProgressContent";

const UserContentFeed = ({ user }) => {
    // IF AFTER READING CONTENT USER WHANTS TO SEE ALL SPECIFIC TYPE OF CONTENT, 
    // USING LINK REDIRECTS TO IT USING QUERY INSTEAD OF OPENING USER DEFAULT TYPE
    const history = useHistory();
    const location = useLocation();
    const queryValue = queryString.parse(history.location.search);

    const [feedToShow, setFeedToShow] = useState("story");

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


    return (
        <div className="user__profile__content__container">
            <div className="user__profile__button__container">
                <button onClick={chooseFeedHandler} id="story" className={`content__choose__button ${feedToShow === "story" && "choose__button__active"}`}>Story</button>
                <button onClick={chooseFeedHandler} id="progress" className={`content__choose__button ${feedToShow === "progress" && "choose__button__active"}`}>Progress</button>
            </div>

            {feedToShow === "story" && <UserStoryContent user={user} />}
            {feedToShow === "progress" && <UserProgressContent user={user} />}

        </div>
    )
}

export default UserContentFeed
