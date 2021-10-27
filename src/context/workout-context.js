import { createContext, useState, useContext, useEffect } from "react";
import { AuthContext } from "./auth-context";

import {getAllTrainingDays} from "../fetch/workout";

export const WorkoutContext = createContext();

const WorkoutContextProvieder = ({children}) => {
    const {authData: {token}} = useContext(AuthContext);

    const [allTrainingDays, setAllTrainingDays] = useState([]);

    // FETCH ALL TRAINING SESSIONS
    useEffect(()=> {
        fetchAllTrainingDays(token);
    },[token])

    const fetchAllTrainingDays = async (token) => {
        const res = await getAllTrainingDays(token);
        setAllTrainingDays(res.data.trainingSessions)
    }

    return (
        <WorkoutContext.Provider value={{
            allTrainingDays,
            fetchAllTrainingDays
        }}>
            {children}
        </WorkoutContext.Provider>
    )
}

export default WorkoutContextProvieder;