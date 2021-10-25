import React, { useEffect, useState, useContext } from 'react';
import { getAllUserTrainingSessions } from "../../fetch/workout";
import { AuthContext } from '../../context/auth-context';
import { WorkoutContext } from '../../context/workout-context';

const UserWorkoutContent = ({ user }) => {
    const { authData: { token } } = useContext(AuthContext);
    // const { userTrainingSessions } = useContext(WorkoutContext);
    const [trainingSessions, setTrainingSessions] = useState([]);

    useEffect(() => {
        if (user) {
            fetchAllUserSessions();
        }
    }, [user])

    const fetchAllUserSessions = async () => {
        const res = await getAllUserTrainingSessions(token, user._id);
        setTrainingSessions(res.data.userTrainingSessions)
    }

    console.log(trainingSessions)
    return (
        <div>
            UserWorkoutContent
        </div>
    )
}

export default UserWorkoutContent
