import React, { useState } from 'react';
import "./createTrainingDay.css";

const CreateTrainingDay = ({ createTrainingDay, newTrainingDay }) => {
    const [handledDate, setHandledDate] = useState();
    const [choosenDate, setChoosenDate] = useState();

    const handleDateChange = (e) => {
        setHandledDate(e.target.value)
    }

    const submitTrainingDate = () => {
        createTrainingDay(handledDate);
        setChoosenDate(handledDate);
    }

    return (
        <div className="create__training__day__container">

            <div className="create__training__day__title">
                {!choosenDate ? <h1>Create training day</h1> : <h1>Training day</h1>}

                {choosenDate && <h4>{choosenDate}</h4>}
            </div>

            {!newTrainingDay &&
                <div className="create__training__day__add">
                    <div className="create__training__day__date">
                        <h4>Choose date</h4>
                        <input onChange={handleDateChange} type="date" />
                    </div>
                    <div className="create__training__day__date__button">
                        {handledDate && <button onClick={submitTrainingDate}>Add</button>}
                    </div>
                </div>
            }
        </div>
    )
}

export default CreateTrainingDay
