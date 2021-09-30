import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/auth-context';
import "./linkToStory.css";

const LinkToStory = ({ storyId, title, image, date, author, privateStory, comments, authorId }) => {
    const { authData: { userId } } = useContext(AuthContext);

    return (
        <Link to={`/story/${storyId}`}>
            <div className="to__story">
                <img className="link__image" src={image} />
                <div className="to__story__left">
                    <div className="story__title">{title}</div>
                    {authorId !== userId ? <div className="story__author">Published by {author}</div> : null}
                </div>

                <div className="to__story__right">
                    {
                        authorId === userId ?
                            <div className="story__settings">
                                {comments ? <p>Comments allowed</p> : <p>Comments are locked</p>}
                                {privateStory ? <p>Story is private</p> : <p>Story is public</p>}
                            </div>
                            :
                            <div>

                            </div>
                    }

                    <div className="story__date">{date}</div>
                </div>
            </div>
        </Link>
    )
}

export default LinkToStory
