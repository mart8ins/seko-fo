import React, { useState } from 'react'
import "./trainingSessionBox.css";
import { v4 as uuidv4 } from 'uuid';
import WorkoutCard from "../../../../utils/workouts/workoutCard/WorkoutCard";

const TrainingSessionBox = ({ session }) => {
    const [showData, setShowData] = useState(false);

    const openTab = () => {
        setShowData(!showData)
    }
    return (
        <div className="training__session__main__container">
            <div onClick={openTab} className="training__session__tab">
                <p>{session.title}</p>
                <div>
                    <p>Felt <span>{session.feeling}</span></p>
                    <p>Workouts <span>{session.workouts.length}</span></p>
                </div>
            </div>

            {
                showData &&
                <div className="training__session__tab__data">
                    {session.workouts.map((workout) => {
                        return <WorkoutCard key={uuidv4()} workout={workout} hover={true} asLink={true} data={true} />
                    })}
                </div>
            }

        </div>
    )
}

export default TrainingSessionBox
