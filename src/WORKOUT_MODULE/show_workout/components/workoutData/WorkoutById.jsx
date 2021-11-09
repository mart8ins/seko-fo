import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import "./workoutById.css";
import { workoutsSeed } from "../../../../utils/workouts/workouts";

import WorkoutManual from "../../../../utils/workouts/workoutManual/WorkoutManual";
import TrainingStatistics from "../../../training_statistics/TrainingStatistics";

const WorkoutById = () => {
    const { wID } = useParams();
    const [workoutData, setWorkoutData] = useState();
    useEffect(() => {
        workoutsSeed.forEach((workout) => {
            if (workout.wID === wID) {
                setWorkoutData(workout)
            }
        })
    }, [wID])

    return (
        <div className="workout__by__id__container">

            <div className="workout__by__id__top">
                <div className="workout__by__id__title">
                    {workoutData && workoutData.name}
                </div>

                <div className="workout__by__id__type">
                    {workoutData && workoutData.body_part} workout
                </div>
            </div>

            <WorkoutManual workoutData={workoutData} />


            <TrainingStatistics workoutData={workoutData} />
        </div>
    )
}

export default WorkoutById
