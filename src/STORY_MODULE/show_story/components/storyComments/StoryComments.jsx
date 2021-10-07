import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../../context/auth-context';
import "./storyComments.css";

const StoryComments = ({ comments, storyAuthorId }) => {
    const { authData } = useContext(AuthContext);

    return (
        <div className="all__story__comments__container">
            {comments.map((comment) => {
                return <div className="story__comment">
                    <div className="story__comment__author">
                        {comment.author.userId === storyAuthorId ?
                            <p><span>story author</span> {comment.author.fullName}</p>
                            :
                            // <Link to={`/user/${comment.author.userId}/profile`}>
                            //     {comment.author.fullName}
                            // </Link>}
                            <Link to={comment.author.userId === authData.userId ? "/userContentFeed" : `/user/${comment.author.userId}/profile`}>
                                {comment.author.fullName}
                            </Link>}
                    </div>
                    <div className="story__comment__text">
                        <p>{comment.comment}</p>
                    </div>
                </div>
            })}
        </div>

    )
}

export default StoryComments
