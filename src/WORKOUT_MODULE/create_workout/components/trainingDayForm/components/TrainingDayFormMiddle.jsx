import React, { useRef, useEffect } from 'react';
import "./trainingDayFormMiddle.css";
import { v4 as uuidv4 } from 'uuid';
import { workoutsSeed } from "../../../../../utils/workouts/workouts";
import { dumbbell } from "../../../../../utils/appIcons/appIcons";


const TrainingDayFormMiddle = ({ workoutHandler, workout, workoutImage, setWorkoutInputReset }) => {
    const workoutInputRef = useRef();

    useEffect(() => {
        setWorkoutInputReset(workoutInputRef);
    }, [])

    return (
        <div className="training__day__form__middle">
            <div className="training__day__form__middle__workout">
                <select onChange={workoutHandler} value={workout}>
                    <option ref={workoutInputRef} value="" selected disabled hidden>Select workout</option>
                    {workoutsSeed.map((w) => {
                        return <option data-wid={w.wID} key={uuidv4()} value={w.name}>{w.name}</option>
                    })}
                </select>
            </div>

            <div className="training__day__form__middle__workout__image">
                {workoutImage ?
                    <img src={`/images/workout_images/${workoutImage}.jpg`} alt={workoutImage} />
                    :
                    <div className="training__day__form__middle__workout__image__dumbbell__icon">{dumbbell}</div>
                }
            </div>
        </div>
    )
}

export default TrainingDayFormMiddle
