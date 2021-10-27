import React from 'react';
import { Link } from "react-router-dom";
import "./noContentToShow.css";

const NoContentToShow = ({ contentType, linkToContent, loggedUserID, userID }) => {
    return (
        <div className="user__no__content__to__show">
            <p>No {contentType} to show</p>
            {loggedUserID === userID ? <Link to={`/create/${linkToContent}`}>Add a {linkToContent}</Link> : null}
        </div>
    )
}

export default NoContentToShow
