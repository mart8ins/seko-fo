import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/auth-context";

const useWorkoutSession = () => {
    const [canSaveSession, setCanSaveSession] = useState(false);

    // SESSION
    const [session, setSession] = useState({
        // date: trainingDate,
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


    return {

    }
}

export default useWorkoutSession;