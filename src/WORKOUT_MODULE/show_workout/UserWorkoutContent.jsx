import React, { useEffect, useState, useContext } from 'react';
import "./userWorkoutContent.css";
import { v4 as uuidv4 } from 'uuid';
import NoContentToShow from "../../utils/noContentToShow/NoContentToShow";
import { getAllUserTrainingDays } from "../../fetch/workout";
import { AuthContext } from '../../context/auth-context';
import StatsHeaderForContent from "../../utils/statsHeaderForContent/StatsHeaderForContent";
import LinkToWorkout from "./components/linkToWorkout/LinkToWorkout";

const UserWorkoutContent = ({ user }) => {
    const { authData: { token, userId } } = useContext(AuthContext);
    const [trainingDays, setTrainingDays] = useState([]);

    useEffect(() => {
        if (user) {
            fetchAllUserSessions();
        }
    }, [user])

    const fetchAllUserSessions = async () => {
        const res = await getAllUserTrainingDays(token, user._id);
        setTrainingDays(res.data.userTrainingSessions)
    }

    return (
        <div>
            {user && String(user._id) === userId && <StatsHeaderForContent title="My workouts" contentStats={[]} />}

            <div className="container__for__links__to__workouts__days">
                {trainingDays.map((training) => {
                    return <LinkToWorkout key={uuidv4} training={training} />
                })}
            </div>

            {trainingDays && !trainingDays.length && user &&
                <NoContentToShow contentType={"workouts"} linkToContent={"workout"} loggedUserID={userId} userID={String(user._id)} />
            }

        </div>
    )
}

export default UserWorkoutContent
