import React from 'react';
import "./trainingDayFormTop.css";


const TrainingDayFormTop = ({ sessionTitleHandler, feelingHandler, feeling, canSaveSession, saveSession }) => {

    return (
        <div className="training__day__form__top">
            <div className="training__day__form__top__title__and__rate">
                <div className="training__day__form__top__title">
                    <input onChange={sessionTitleHandler} type="text" placeholder="Write sessions title" />
                </div>

                <div className="training__day__form__top__rate">
                    <select onChange={feelingHandler} value={feeling}>
                        <option value="" selected disabled hidden>Felt?</option>
                        <option value="Hard">Hard</option>
                        <option value="Moderate">Moderate</option>
                        <option value="Easy">Easy</option>
                    </select>
                </div>
            </div>

            <div className="training__day__form__top__session__save">
                {canSaveSession ?
                    <button onClick={saveSession}>Save session</button>
                    :
                    <button disabled>Save session</button>
                }
            </div>
        </div>
    )
}

export default TrainingDayFormTop
