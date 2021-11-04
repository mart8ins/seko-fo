import React from 'react';
import "./day.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const Day = ({ day }) => {
    console.log(day)
    return (


        <Link key={uuidv4()} to={`workoutday/${day.workoutDayId}`} className={`month__day dayHasWorkout`}>
            {day.date}
        </Link>

        // <div key={uuidv4()} className={`month__days__container__day`} title={`There is no workouts at this date`}>
        //         {day.date}
        // </div>



    )
}

export default Day
