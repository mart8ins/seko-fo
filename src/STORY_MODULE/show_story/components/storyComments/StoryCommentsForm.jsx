import React, { useState, useContext } from 'react';
import { AuthContext } from "../../../../context/auth-context";
import { postStoryComment } from "../../../../fetch/story";
import "./storyComments.css";

const StoryCommentsForm = ({ storyId, updateStory }) => {
    const { authData } = useContext(AuthContext);

    const [comment, setComment] = useState("");

    const textHandler = (e) => {
        setComment(e.target.value);
    }

    const submitComment = async () => {
        const commentObject = {
            comment,
            fullName: authData.fullName,
            userId: authData.userId,
            commented_story: storyId
        }
        const res = await postStoryComment(authData.token, commentObject);
        await updateStory();
        setComment("");
    }

    return (
        <div className="user__story__comments__form__container">
            <textarea onChange={textHandler} value={comment} name="leave_comment" id="leave_comment" placeholder="Leave comment..."></textarea>
            {comment.length > 0 ? <button onClick={submitComment}>Leave comment</button> : <button className="disabled__comments__button">Leave comment</button>}
        </div>
    )
}

export default StoryCommentsForm
