import React from 'react';
import "./day.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const Day = ({ day }) => {
    return (<div>
        {day.workoutDayId &&
            <Link key={uuidv4()} to={`workoutday/${day.workoutDayId}`} className={`month__day dayHasWorkout`} title="Click to see training data">
                {day.date}
            </Link>}
        {!day.workoutDayId &&
            <div key={uuidv4()} className={`month__day`} title="No training data registred on this day">
                {day.date}
            </div>}

    </div>
    )
}

export default Day
