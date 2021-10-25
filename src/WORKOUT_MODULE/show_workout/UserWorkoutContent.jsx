import React, { useEffect, useState, useContext } from 'react';
import "./userWorkoutContent.css";
import { getAllUserTrainingSessions } from "../../fetch/workout";
import { AuthContext } from '../../context/auth-context';
import StatsHeaderForContent from "../../utils/statsHeaderForContent/StatsHeaderForContent";
import LinkToWorkout from "./components/linkToWorkout/LinkToWorkout";

const UserWorkoutContent = ({ user }) => {
    const { authData: { token, userId } } = useContext(AuthContext);
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

            {user && String(user._id) === userId && <StatsHeaderForContent title="My workouts" contentStats={[]} />}

            {trainingSessions.map((session) => {
                return <LinkToWorkout />
            })}
        </div>
    )
}

export default UserWorkoutContent
