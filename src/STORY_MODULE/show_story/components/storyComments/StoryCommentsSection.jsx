import React from 'react';
import StoryCommentsForm from "./StoryCommentsForm";
import StoryComments from "./StoryComments";
import "./storyComments.css";

const StoryCommentsSection = ({ comments_allowed, storyId, comments, updateStory, storyAuthorId }) => {
    return (
        <div className="user__story__comments__top__container">
            {comments_allowed ?
                <div className="user__story__comments__open">
                    <h4>Comments</h4>
                    <StoryComments comments={comments} updateStory={updateStory} storyAuthorId={storyAuthorId} />
                    <StoryCommentsForm storyId={storyId} updateStory={updateStory} />
                </div> :
                <div className="user__story__comments__locked">
                    Comments are locked for this Story
                </div>}
        </div>
    )
}

export default StoryCommentsSection
