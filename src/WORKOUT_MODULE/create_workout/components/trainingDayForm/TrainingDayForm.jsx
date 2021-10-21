import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";
import useWorkoutSession from "../../../../hooks/useWorkoutSession";
import "./trainingDayForm.css";
import { v4 as uuidv4 } from 'uuid';
import { workoutsSeed } from "../../../../utils/workouts/workouts";
import { dumbbell } from "../../../../utils/appIcons/appIcons";
import WorkoutCard from './components/WorkoutCard';

// "/userContentFeed?type=story"

const TrainingDayForm = ({ trainingDate }) => {
    const feelingInputRef = useRef();
    const workoutInputRef = useRef();
    const history = useHistory();

    const [canSaveSession, setCanSaveSession] = useState(false);

    // SESSION
    const [session, setSession] = useState({
        date: trainingDate,
        title: undefined,
        feeling: undefined
    });

    // ALL WORKOUTS FOR SESSION
    const [allWorkouts, setAllWorkouts] = useState([]);

    // CURRENT WORKOUT INPUTS
    const [workout, setWorkout] = useState(undefined);
    const [workoutImage, setWorkoutImage] = useState(undefined);

    // ALL SETS FOR WORKOUT
    const [allSets, setAllSets] = useState([]);

    // handler states for set inputs
    const [setsCount, setSetsCount] = useState(1);
    const [weight, setWeight] = useState(0);
    const [reps, setReps] = useState(0);


    // ACTIVATE SESSION SAVE BUTTON IF CONDITIONS TRUE
    useEffect(() => {
        if (allWorkouts.length > 0 && session.title && session.feeling && session.date) {
            setCanSaveSession(true);
        } else {
            setCanSaveSession(false);
        }
    }, [allWorkouts, session])


    // HANDLERS FOR INPUT VALUES
    const sessionTitleHandler = (e) => {
        setSession({
            ...session,
            title: e.target.value
        });
    };
    const feelingHandler = (e) => {
        setSession({
            ...session,
            feeling: e.target.value
        });
    };
    const workoutHandler = (e) => {
        setWorkout(e.target.value);
        const workoutImg = e.target.value.replace(/ /g, "_").toLowerCase();
        setWorkoutImage(workoutImg);
    }

    const setsInputHandler = (e) => {
        if (e.target.name === "weight") {
            setWeight(e.target.value)
        }
        if (e.target.name === "reps") {
            setReps(e.target.value)
        }
    }

    // BUTTON ONCLICK HANDLERS
    const saveSet = () => {
        // update all sets states array
        if (weight && reps > 0) {
            setAllSets([
                ...allSets,
                {
                    id: uuidv4(),
                    set: setsCount,
                    weight,
                    reps
                }
            ])
            // clear weight and reps states and add count for set
            setSetsCount(setsCount + 1);
            setWeight(0);
            setReps(0);
        }
    }


    const saveWorkout = () => {
        const workoutToSave = {
            id: uuidv4(),
            name: workout,
            image: workoutImage,
            sets: allSets
        }
        setAllWorkouts([
            ...allWorkouts,
            workoutToSave
        ]);
        setAllSets([]);
        setWorkout(undefined);
        setWorkoutImage(undefined);
        setSetsCount(1);
        workoutInputRef.current.selected = true;

        console.log(workoutToSave);
        console.log("Workout saved")
    }

    const saveSession = () => {
        const sessionToSave = {
            id: uuidv4(),
            ...session,
            workouts: allWorkouts
        }
        feelingInputRef.current.selected = true;
        setCanSaveSession(false);
        history.push("/userContentFeed?type=workout")

        console.log(sessionToSave);
        console.log("Session saved");
    }

    return (
        <div className="training__day__form__container">


            <div className="training__day__form__top">
                <div className="training__day__form__top__title__and__rate">
                    <div className="training__day__form__top__title">
                        <input onChange={sessionTitleHandler} type="text" placeholder="Write sessions title" />
                    </div>

                    <div className="training__day__form__top__rate">
                        <select onChange={feelingHandler}>
                            <option ref={feelingInputRef} value="" selected disabled hidden>Felt?</option>
                            <option value="Hard">Hard</option>
                            <option value="Moderate">Moderate</option>
                            <option value="Easy">Easy</option>
                        </select>
                    </div>
                </div>

                <div className="training__day__form__top__session__save">
                    {canSaveSession ?
                        <button onClick={saveSession}>Save session</button>
                        :
                        <button disabled>Save session</button>
                    }
                </div>
            </div>

            <div className="training__day__form__middle">
                <div className="training__day__form__middle__workout">
                    <select onChange={workoutHandler} value={workout}>
                        <option ref={workoutInputRef} value="" selected disabled hidden>Select workout</option>
                        {workoutsSeed.map((w) => {
                            return <option value={w.name}>{w.name}</option>
                        })}
                    </select>
                </div>

                <div className="training__day__form__middle__workout__image">
                    {workoutImage ?
                        <img src={`/images/workout_images/${workoutImage}.jpg`} />
                        :
                        <div className="training__day__form__middle__workout__image__dumbbell__icon">{dumbbell}</div>
                    }
                </div>
            </div>


            <div className="training__day__form__bottom">


                {allSets.map((set) => {
                    return <div key={uuidv4()} className="training__day__form__bottom__add">
                        <div className="training__day__form__bottom__set__inputs">
                            <div className="training__day__form__bottom__set__inputs__set__count">
                                {set.set}
                            </div>
                            <label htmlFor="weight">Weight</label>
                            <input disabled id="weight" name="weight" type="number" step="2.5" placeholder={set.weight} value={set.weight} />
                            <label htmlFor="reps">Repetitions</label>
                            <input disabled id="reps" name="reps" type="number" placeholder={set.reps} value={set.reps} />
                        </div>

                        <div className="training__day__form__bottom__set__options__buttons">
                            <button>Delete</button>
                        </div>
                    </div>
                })}


                <div className="training__day__form__bottom__add">
                    <div className="training__day__form__bottom__set__inputs">
                        <div className="training__day__form__bottom__set__inputs__set__count">
                            {setsCount}
                        </div>
                        <label htmlFor="weight">Weight</label>
                        <input onChange={setsInputHandler} id="weight" name="weight" type="number" step="2.5" min="2.5" placeholder={weight} value={weight} />
                        <label htmlFor="reps">Repetitions</label>
                        <input onChange={setsInputHandler} id="reps" name="reps" type="number" min="1" placeholder={reps} value={reps} />
                    </div>

                    <div className="training__day__form__bottom__set__options__buttons">
                        {workout && weight && reps ?
                            <button onClick={saveSet}>Save</button>
                            :
                            <button disabled>Save</button>}
                    </div>
                </div>


                <div className="training__day__form__bottom__workout__options__buttons">
                    {allSets.length > 0 ?
                        <button onClick={saveWorkout}>
                            Save workout
                        </button>
                        :
                        <button disabled>
                            Save workout
                        </button>
                    }
                </div>

                <div className="training__day__form__bottom__created__workouts">
                    <h4>Current workouts for session</h4>

                    <div className="training__day__form__bottom__sessions__workouts">
                        {allWorkouts.map((workout) => {
                            return <WorkoutCard workout={workout} />
                        })}
                    </div>
                </div>

            </div>


        </div>
    )
}

export default TrainingDayForm
