import React, { useContext } from 'react';
import "./myStories.css";
import LinkToStory from "../../../../../utils/stories/LinkToStory";
import { StoryContext } from '../../../../../context/story-context';
import globalVariables from '../../../../../globalVariables';


const date = "21.09.2021";

const MyStories = () => {
    const { userStories, fetchAllStories } = useContext(StoryContext);

    return (
        <div className="my__stories__container">
            <h2>My stories</h2>
            {userStories.map((story) => {
                const storyId = story._id;
                const image = story.image ? `${globalVariables.server}${story.image}` : "/images/no_image.png";
                const date = new Date(story.date).toLocaleDateString();

                return <LinkToStory
                    key={storyId}
                    storieId={storyId}
                    text={story.story}
                    image={image}
                    date={date}
                    author={story.author}
                    comments={story.comments_allowed}
                    privateStory={story.private} />
            })}
        </div>
    )
}

export default MyStories