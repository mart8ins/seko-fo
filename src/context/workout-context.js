import { createContext, useState, useContext, useEffect } from "react";
import { AuthContext } from "./auth-context";

import {getAllUserTrainingSessions} from "../fetch/workout";

export const WorkoutContext = createContext();

const WorkoutContextProvieder = ({children}) => {
    const {authData: {token, userId}} = useContext(AuthContext);

    const [trainingSessions, setTrainingSessions] = useState([]);

    useEffect(()=> {
        fetchAllUserTrainingSessions();
    },[token])

    const fetchAllUserTrainingSessions = async () => {
        const res = await getAllUserTrainingSessions(token, userId);
        setTrainingSessions(res.data.userTrainingSessions)
    }

    console.log(trainingSessions)
    return (
        <WorkoutContext.Provider value={{
            trainingSessions, setTrainingSessions
        }}>
            {children}
        </WorkoutContext.Provider>
    )
}

export default WorkoutContextProvieder;