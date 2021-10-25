import { createContext, useState, useContext, useEffect } from "react";
import { AuthContext } from "./auth-context";

import {getAllTrainingSessions} from "../fetch/workout";

export const WorkoutContext = createContext();

const WorkoutContextProvieder = ({children}) => {
    const {authData: {token}} = useContext(AuthContext);

    const [allTrainingSessions, setAllTrainingSessions] = useState([]);

    // FETCH ALL TRAINING SESSIONS
    useEffect(()=> {
        fetchAllTrainingSessions(token);
    },[token])

    const fetchAllTrainingSessions = async (token) => {
        const res = await getAllTrainingSessions(token);
        setAllTrainingSessions(res.data.trainingSessions)
    }

    return (
        <WorkoutContext.Provider value={{
            allTrainingSessions,
            fetchAllTrainingSessions
        }}>
            {children}
        </WorkoutContext.Provider>
    )
}

export default WorkoutContextProvieder;