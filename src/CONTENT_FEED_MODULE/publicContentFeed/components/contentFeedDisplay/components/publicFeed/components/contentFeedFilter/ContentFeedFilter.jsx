import React from 'react';
import "./contentFeedFilter.css";

const ContentFeedFilter = ({ setFilterType, filterType }) => {

    const handleContentFilter = (e) => {
        setFilterType(e.target.id)
    }

    return (
        <div className="content__feed__filter__container">
            <button className={`content__feed__filter__button ${filterType === "all" && "active__filter__button"}`} onClick={handleContentFilter} id="all">All</button>
            <button className={`content__feed__filter__button ${filterType === "workout" && "active__filter__button"}`} onClick={handleContentFilter} id="workout">Workouts</button>
            <button className={`content__feed__filter__button ${filterType === "story" && "active__filter__button"}`} onClick={handleContentFilter} id="story">Stories</button>
        </div>
    )
}

export default ContentFeedFilter
