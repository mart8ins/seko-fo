import React, { useState, useEffect } from 'react';
import "./learnWorkouts.css";
import WorkoutManual from "../../utils/workouts/workoutManual/WorkoutManual";
import { workoutsSeed } from "../../utils/workouts/workouts";
import TrainingStatistics from "../training_statistics/TrainingStatistics";

const LearnWorkouts = () => {
    const [workoutData, setWorkoutData] = useState(workoutsSeed);

    const [activeBodyGroup, setActiveBodyGroup] = useState("Full body");
    const [activeBodyGroupWorkouts, setActiveBodyGroupWorkouts] = useState([]);

    const [activeWorkout, setActiveWorkout] = useState("");
    const [activeWorkoutData, setActiveWorkoutData] = useState();



    // set default workout for each body group
    useEffect(() => {
        const filtered = [];
        workoutData.forEach((workout) => {
            if (workout.body_part && workout.body_part === activeBodyGroup) {
                filtered.push(workout)
            }
        });

        setActiveWorkout(filtered[0].name);
        setActiveBodyGroupWorkouts(filtered);

        let selectedWorkout = activeBodyGroupWorkouts.filter((workout) => {
            return workout.name === activeWorkout
        })
        setActiveWorkoutData(selectedWorkout[0]);
    }, [activeBodyGroup])


    // set data for selected workout
    useEffect(() => {
        let selectedWorkout = activeBodyGroupWorkouts.filter((workout) => {
            return workout.name === activeWorkout
        })
        setActiveWorkoutData(selectedWorkout[0]);
    }, [activeWorkout]);


    // button handler for body group
    const chooseActiveBodyGroup = (e) => {
        setActiveBodyGroup(e.target.id)
    }
    // button handler for workout
    const chooseActiveWorkout = (e) => {
        setActiveWorkout(e.target.id);
    }

    return (
        <div className="learn__workouts__container">
            <div className="learn__workouts__top__navigation">
                <button
                    id="Full body"
                    onClick={chooseActiveBodyGroup}
                    style={activeBodyGroup === "Full body" ? { backgroundColor: "rgb(85, 211, 47)" } : null}>Full body</button>
                <button
                    id="Upper body"
                    onClick={chooseActiveBodyGroup}
                    style={activeBodyGroup === "Upper body" ? { backgroundColor: "rgb(85, 211, 47)" } : null}>Upper body</button>
                <button
                    id="Lower body"
                    onClick={chooseActiveBodyGroup}
                    style={activeBodyGroup === "Lower body" ? { backgroundColor: "rgb(85, 211, 47)" } : null}>Lower body</button>
            </div>

            <div className="learn__workouts__workout__navigation__description__container">
                <div className="learn__workouts__side__navigation">
                    {activeBodyGroupWorkouts && activeBodyGroupWorkouts.map((work) => {
                        return <button onClick={chooseActiveWorkout} id={work.name} className={`learn__workout__option ${work.name === activeWorkout && "active__workout"}`}>{work.name}</button>
                    })}
                </div>

                <div className="learn__workouts__description">
                    <WorkoutManual workoutData={activeWorkoutData} />
                </div>

            </div>

            <TrainingStatistics workoutData={activeWorkoutData} />
        </div>
    )
}

export default LearnWorkouts
