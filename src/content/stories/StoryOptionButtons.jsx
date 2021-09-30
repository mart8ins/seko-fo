import React from 'react';
import { Link } from "react-router-dom";

const StoryOptionButtons = () => {
    return (
        <div className="user__story__options__btns">
            <Link to="">Delete</Link>
            <Link to="">Edit</Link>
            <Link to="/userContentFeed?type=story">View all my stories</Link>
        </div>
    )
}

export default StoryOptionButtons
