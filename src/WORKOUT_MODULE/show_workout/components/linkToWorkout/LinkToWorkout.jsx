import React from 'react';
import { Link } from "react-router-dom";
import "./linkToWorkout.css";

const LinkToWorkout = ({ training }) => {
    return (
        <Link to={`/workoutday/${training._id}`} className="link__to__workout">
            <div className="to__workout">
                <div className="to__workout__date">
                    <p>{training.date}</p>
                </div>
                <div className="to__workout__sessions__count">
                    <p>Training sessions</p>
                    <p className="sessions__count">{training.sessions.length}</p>
                </div>
            </div>
        </Link>
    )
}

export default LinkToWorkout
