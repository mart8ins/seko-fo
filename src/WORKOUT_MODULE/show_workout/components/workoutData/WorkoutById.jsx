import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import "./workoutById.css";

import WorkoutManual from "../../../../utils/workouts/workoutManual/WorkoutManual";

const WorkoutById = () => {
    const { wID } = useParams();
    const [workoutData, setWorkoutData] = useState();
    console.log(wID)

    useEffect(() => {

    }, [wID])


    return (
        <div className="workout__by__id__container">

            <div className="workout__by__id__top">
                <div className="workout__by__id__title">
                    Bench press
                </div>

                <div className="workout__by__id__type">
                    Upperbody workout
                </div>
            </div>

            <WorkoutManual workoutData={workoutData} />
        </div>
    )
}

export default WorkoutById
