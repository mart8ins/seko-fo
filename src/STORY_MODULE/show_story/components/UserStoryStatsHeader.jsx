import React from 'react';
import "./userStoryStatsHeader.css";

const UserStoryStatsHeader = ({ userStoriesStats }) => {
    return (
        <div className="story__header__container">
            <div className="left__side">
                <p>My stories</p>
            </div>
            {userStoriesStats &&
                <div className="right__side__stories__stats">
                    <div className="story__stat">
                        <div className="story__stat__title">Posted stories</div>
                        <div className="story__stat__result">{userStoriesStats.posted_stories}</div>
                    </div>
                    <div className="story__stat">
                        <div className="story__stat__title">Avarage rate for stories</div>
                        <div className="story__stat__result">{userStoriesStats.avarage_rate}</div>
                    </div>
                    <div className="story__stat">
                        <div className="story__stat__title">Stories viewed, times</div>
                        <div className="story__stat__result">{userStoriesStats.stories_viewed}</div>
                    </div>
                    <div className="story__stat">
                        <div className="story__stat__title">Stories commented, times</div>
                        <div className="story__stat__result">{userStoriesStats.stories_commented}</div>
                    </div>
                    <div className="story__stat">
                        <div className="story__stat__title">Best rated story</div>
                        <div className="story__stat__result">{userStoriesStats.best_rated || "No rated stories"}</div>
                    </div>
                    <div className="story__stat">
                        <div className="story__stat__title">Most commented story</div>
                        <div className="story__stat__result">{userStoriesStats.most_commented || "No comments recieved"}</div>
                    </div>
                </div>
            }

        </div>
    )
}

export default UserStoryStatsHeader
