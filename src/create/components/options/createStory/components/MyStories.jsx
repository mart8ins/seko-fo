import React, { useContext } from 'react';
import "./myStories.css";
import LinkToStory from "../../../../../utils/stories/LinkToStory";
import { StoryContext } from '../../../../../context/story-context';
import globalVariables from '../../../../../globalVariables';

const MyStories = () => {
    const { userStories } = useContext(StoryContext);

    return (
        <div className="my__stories__container">
            <h2>My stories</h2>
            {userStories.map((story) => {
                const storyId = story._id;
                const image = story.image ? `${globalVariables.server}${story.image}` : "/images/no_image.png";
                const date = new Date(story.date).toLocaleDateString();
                return <LinkToStory
                    key={storyId}
                    storyId={storyId}
                    title={story.title}
                    text={story.story}
                    image={image}
                    date={date}
                    author={story.author.firstName}
                    comments={story.comments_allowed}
                    privateStory={story.private}
                    authorId={story.author.userId} />
            })}
        </div>
    )
}

export default MyStories