import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link, useHistory } from "react-router-dom";
import "./workoutDay.css";
import TrainingSessionBox from "./TrainingSessionBox";
import { v4 as uuidv4 } from 'uuid';

import { AuthContext } from "../../../../context/auth-context";
import { getTrainingDay, deleteTrainingDay } from "../../../../fetch/workout";
import { fetchUser } from "../../../../fetch/connections";

const WorkoutDay = () => {
    const { workoutDayId } = useParams();
    const history = useHistory();
    const { authData } = useContext(AuthContext);
    const [confirmDayDeletion, setConfirmDayDeletion] = useState(false);
    const [workoutDay, setWorkoutDay] = useState();

    const [workoutAuthor, setWorkoutAuthor] = useState();

    // fetch workout day
    useEffect(() => {
        fetchTrainingDay(workoutDayId);
    }, [workoutDayId]);

    // fetch workout author data if its not logged use
    useEffect(() => {
        if (workoutDay && authData.userId !== workoutDay.userId) {
            getUser(authData.token, workoutDay.userId)
        }
    }, [workoutDay]);

    const fetchTrainingDay = async (workoutDayId) => {
        const res = await getTrainingDay(authData.token, workoutDayId);
        setWorkoutDay(res.data.day)
    }

    const getUser = async (token, userId) => {
        const res = await fetchUser(token, userId);
        setWorkoutAuthor(res.data.user);
    }

    const toggleDayDeletionState = () => {
        setConfirmDayDeletion(true);
        setTimeout(() => {
            setConfirmDayDeletion(false)
        }, 5000)
    }

    const deleteDayConfirmed = () => {
        deleteTrainingDay(authData.token, workoutDay._id);
        history.push("/userContentFeed?type=workout")
    }


    return (
        <div className="workoutDay__main__container">
            {workoutDay &&
                <div>
                    <div className="workoutDay__title__container">

                        {
                            workoutAuthor &&
                            <Link to={`/user/${workoutAuthor._id}/profile`}>
                                <p>{workoutAuthor.firstName} {workoutAuthor.lastName}</p>
                            </Link>
                        }
                        {
                            !workoutAuthor && !confirmDayDeletion && <button onClick={toggleDayDeletionState}>Delete training day</button>
                        }
                        {
                            confirmDayDeletion && <button onClick={deleteDayConfirmed} data-deleteconfirmed>Confirm deletion</button>
                        }


                        <h3>{workoutDay.date}</h3>
                    </div>

                    <div>
                        {workoutDay.sessions.map((session) => {
                            return <TrainingSessionBox key={uuidv4()} session={session} />
                        })}
                    </div>

                </div>
            }
        </div>
    )
}

export default WorkoutDay
