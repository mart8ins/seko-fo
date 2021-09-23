import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/auth-context';
import "./linkToStory.css";

const LinkToStory = ({ storieId, title, image, date, author, privateStory, comments }) => {
    const { authData: { userId } } = useContext(AuthContext)
    return (
        <Link to={`/story/${storieId}`}>
            <div className="to__story">
                <img className="link__image" src={image} />
                <div className="to__story__left">
                    <div className="story__title">{title}</div>
                    {author && author.userId !== userId ? <div className="story__author">Published by {author.firstName} {author.lastName}</div> : null}
                </div>

                <div className="to__story__right">
                    <div className="story__settings">
                        {comments ? <p>Comments allowed</p> : <p>Comments are locked</p>}
                        {privateStory ? <p>Story is private</p> : <p>Story is public</p>}
                    </div>
                    <div className="story__date">{date}</div>
                </div>
            </div>
        </Link>
    )
}

export default LinkToStory
