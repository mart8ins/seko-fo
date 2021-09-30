import React, { useState, useEffect, useContext } from 'react';

import { AuthContext } from "../../../../../context/auth-context";
import { getAllUserStories } from "../../../../../fetch/users/story";
import globalVariables from '../../../../../globalVariables';

import LinkToStory from "../../../../../utils/stories/LinkToStory";

const UserStoryContent = ({ user }) => {
    const { authData } = useContext(AuthContext);

    const [userStories, setUserStories] = useState();

    useEffect(() => {
        if (user) {
            fetchUserStories();
        }
    }, [user]);

    const fetchUserStories = async () => {
        const res = await getAllUserStories(authData.token, user._id);
        const rev = res.data.stories.reverse();
        setUserStories(rev);
    }

    return (
        <div>
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
                    User currently dosent have any added stories.
                </div>}
        </div>
    )
}

export default UserStoryContent
