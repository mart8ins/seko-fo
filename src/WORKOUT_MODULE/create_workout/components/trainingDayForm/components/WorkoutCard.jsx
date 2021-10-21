import React from 'react';
import "./workoutCard.css";

const WorkoutCard = ({ workout }) => {
    return (
        <div className="training__day__form__bottom__sessions__workout__card">
            {workout.name}
        </div>
    )
}

export default WorkoutCard
