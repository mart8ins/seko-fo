import React from 'react';
import { Link } from "react-router-dom";
import "./contentCreationTop.css";

const ContentCreationTop = () => {
    return (
        <div className="content__creation__container">
            <h3>Create your own content!</h3>

            <div className="content__creation__options__container">
                <Link to="/create/story">Story <span>+</span></Link>
                <Link to="/create/workout">Workout <span>+</span></Link>
            </div>

        </div>
    )
}

export default ContentCreationTop
