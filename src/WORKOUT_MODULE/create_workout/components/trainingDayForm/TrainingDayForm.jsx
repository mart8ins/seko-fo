import React, { useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from "react-router-dom";
import { postTrainingSession } from "../../../../fetch/workout";

import { AuthContext } from "../../../../context/auth-context";

import TrainingDayFormTop from "./components/TrainingDayFormTop";
import TrainingDayFormMiddle from './components/TrainingDayFormMiddle';
import TrainingDayFormBottom from './components/TrainingDayFormBottom';


const TrainingDayForm = ({ trainingDate }) => {
    const { authData: { token } } = useContext(AuthContext);

    const history = useHistory();

    const [workoutInputReset, setWorkoutInputReset] = useState();

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
    }, [allWorkouts, session]);


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
            setWeight(Number(e.target.value))
        }
        if (e.target.name === "reps") {
            setReps(Number(e.target.value))
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
                    set: Number(setsCount),
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
            imageName: workoutImage,
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
        workoutInputReset.current.selected = true;

        console.log(workoutToSave);
        console.log("Workout saved")
    }

    const saveSession = async () => {
        const sessionToSave = {
            ...session,
            workouts: allWorkouts
        }
        const res = await postTrainingSession(token, sessionToSave);

        setCanSaveSession(false);
        history.push("/userContentFeed?type=workout")

        console.log(sessionToSave);
        console.log("Session saved");
        console.log(res)
    }

    // DELETE BUTTONS
    const deleteSet = (id) => {
        const setArr = allSets;
        const setToDelete = setArr.findIndex((set) => {
            return set.id === id;
        })
        setArr.splice(setToDelete, 1);
        setArr.forEach((set, index) => {
            if (set.set !== index + 1) {
                set.set = index + 1;
            }
        })
        setSetsCount(setArr.length + 1)
        setAllSets([...setArr]);
    }

    const deleteWorkoutCard = (id) => {
        const workArr = allWorkouts;
        const workoutToDelete = workArr.findIndex((workout) => {
            return workout.id === id;
        })
        workArr.splice(workoutToDelete, 1);
        setAllWorkouts([...workArr]);
    }


    return (
        <div className="training__day__form__container">

            <TrainingDayFormTop
                sessionTitleHandler={sessionTitleHandler}
                feelingHandler={feelingHandler}
                canSaveSession={canSaveSession}
                saveSession={saveSession}
            />

            <TrainingDayFormMiddle
                workoutHandler={workoutHandler}
                workout={workout}
                workoutImage={workoutImage}
                setWorkoutInputReset={setWorkoutInputReset}
            />

            <TrainingDayFormBottom
                allSets={allSets}
                setsCount={setsCount}
                weight={weight}
                reps={reps}
                workout={workout}
                setsInputHandler={setsInputHandler}
                saveSet={saveSet}
                saveWorkout={saveWorkout}
                allWorkouts={allWorkouts}
                deleteSet={deleteSet}
                deleteWorkoutCard={deleteWorkoutCard}
            />

        </div>
    )
}

export default TrainingDayForm
