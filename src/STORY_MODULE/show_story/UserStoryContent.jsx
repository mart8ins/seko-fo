import React, { useState, useEffect, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { AuthContext } from "../../context/auth-context";
import { getAllUserStories } from "../../fetch/story";
import NoContentToShow from "../../utils/noContentToShow/NoContentToShow";
import globalVariables from '../../globalvar';
import StatsHeaderForContent from "../../utils/statsHeaderForContent/StatsHeaderForContent";
import "./userStoryContent.css";

import LinkToStory from "./components/linkToStory/LinkToStory";

const UserStoryContent = ({ user }) => {
    const { authData } = useContext(AuthContext);
    const [userStories, setUserStories] = useState();
    const [userStoriesStats, setUserStoriesStats] = useState([]);

    const fetchUserStories = async () => {
        const res = await getAllUserStories(authData.token, user._id);
        const rev = res.data.stories.reverse();
        setUserStoriesStats(res.data.stats);
        setUserStories(rev);
    }

    useEffect(() => {
        if (user) {
            fetchUserStories();
        }
    }, [user]);

    return (
        <div>
            {user && String(user._id) === authData.userId && <StatsHeaderForContent contentStats={userStoriesStats} title="My stories" />}

            {userStories && userStories.reverse().map((story) => {
                const storyId = story._id;
                const image = story.image ? `${globalVariables.server}${story.image}` : "/images/no_image.png";
                const date = new Date(story.date).toLocaleDateString();

                if (story.private && authData.userId !== story.author.userId) {
                    return null
                } else {
                    return <LinkToStory
                        key={uuid()}
                        storyId={storyId}
                        title={story.title}
                        image={image}
                        date={date}
                        author={`${story.author.firstName} ${story.author.lastName}`}
                        authorId={story.author.userId}
                        privateStory={story.private}
                        comments={story.comments_allowed} />
                }
            })}

            {userStories && !userStories.length && user &&
                <NoContentToShow contentType={"stories"} linkToContent={"story"} loggedUserID={authData.userId} userID={String(user._id)} />
            }
        </div>
    )
}

export default UserStoryContent
