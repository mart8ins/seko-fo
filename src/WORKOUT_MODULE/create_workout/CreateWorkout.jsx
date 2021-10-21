import React, { useState } from 'react';
import "./createWorkout.css";
import CreateTrainingDay from "./components/createTrainingDay/CreateTrainingDay";
import TrainingDayForm from './components/trainingDayForm/TrainingDayForm';

const CreateWorkout = () => {
    const [newTrainingDay, setNewTrainingDay] = useState(false);
    const [trainingDate, setTrainingDate] = useState(undefined)

    const createTrainingDay = (date) => {
        setTrainingDate(date);
        setNewTrainingDay(true);
    }
    return (
        <div className="create__workout__main__container">
            <CreateTrainingDay createTrainingDay={createTrainingDay} newTrainingDay={newTrainingDay} />

            {newTrainingDay && <TrainingDayForm trainingDate={trainingDate} />}
        </div>
    )
}

export default CreateWorkout;