import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import { getAllUserStories } from "../../fetch/story";
import globalVariables from '../../globalVariables';
import UserStoryStatsHeader from "./components/UserStoryStatsHeader";
import "./userStoriesFeed.css";

import LinkToStory from "./components/linkToStory/LinkToStory";

const UserStoryContent = ({ user }) => {
    const { authData } = useContext(AuthContext);
    const [userStories, setUserStories] = useState();
    const [userStoriesStats, setUserStoriesStats] = useState();
    useEffect(() => {
        if (user) {
            fetchUserStories();
        }
    }, [user]);

    const fetchUserStories = async () => {
        const res = await getAllUserStories(authData.token, user._id);
        const rev = res.data.stories.reverse();
        setUserStoriesStats(res.data.stats);
        setUserStories(rev);
    }

    return (
        <div>
            {user && String(user._id) === authData.userId && <UserStoryStatsHeader userStoriesStats={userStoriesStats} />}


            {userStories && userStories.reverse().map((story) => {
                const storyId = story._id;
                const image = story.image ? `${globalVariables.server}${story.image}` : "/images/no_image.png";
                const date = new Date(story.date).toLocaleDateString();
                return <LinkToStory
                    storyId={storyId}
                    title={story.title}
                    image={image}
                    date={date}
                    author={`${story.author.firstName} ${story.author.lastName}`}
                    authorId={story.author.userId}
                    privateStory={story.privateStory}
                    comments={story.comments_allowed} />
            })}
            {userStories && !userStories.length &&
                <div className="user__no__stories">
                    <p>No stories to show</p>
                    {authData && authData.userId === user._id ? <Link to="/create/story">Add a story</Link> : null}
                </div>}
        </div>
    )
}

export default UserStoryContent
