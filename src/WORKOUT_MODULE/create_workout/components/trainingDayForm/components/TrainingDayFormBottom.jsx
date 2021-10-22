import React from 'react';
import "./trainingDayFormBottom.css";
import { v4 as uuidv4 } from 'uuid';
import WorkoutCard from './WorkoutCard';

const TrainingDayFormBottom = ({ allSets, setsCount, weight, reps, workout, setsInputHandler, saveSet, saveWorkout, allWorkouts }) => {

    return (
        <div className="training__day__form__bottom">


            {allSets.map((set) => {
                return <div key={uuidv4()} className="training__day__form__bottom__add">
                    <div className="training__day__form__bottom__set__inputs">
                        <div className="training__day__form__bottom__set__inputs__set__count">
                            {set.set}
                        </div>
                        <label htmlFor="weight">Weight</label>
                        <input disabled id="weight" name="weight" type="number" step="2.5" placeholder={set.weight} value={set.weight} />
                        <label htmlFor="reps">Repetitions</label>
                        <input disabled id="reps" name="reps" type="number" placeholder={set.reps} value={set.reps} />
                    </div>

                    <div className="training__day__form__bottom__set__options__buttons">
                        <button>Delete</button>
                    </div>
                </div>
            })}


            <div className="training__day__form__bottom__add">
                <div className="training__day__form__bottom__set__inputs">
                    <div className="training__day__form__bottom__set__inputs__set__count">
                        {setsCount}
                    </div>
                    <label htmlFor="weight">Weight</label>
                    <input onChange={setsInputHandler} id="weight" name="weight" type="number" step="2.5" min="2.5" placeholder={weight} value={weight} />
                    <label htmlFor="reps">Repetitions</label>
                    <input onChange={setsInputHandler} id="reps" name="reps" type="number" min="1" placeholder={reps} value={reps} />
                </div>

                <div className="training__day__form__bottom__set__options__buttons">
                    {workout && weight && reps ?
                        <button onClick={saveSet}>Save</button>
                        :
                        <button disabled>Save</button>}
                </div>
            </div>


            <div className="training__day__form__bottom__workout__options__buttons">
                {allSets.length > 0 ?
                    <button onClick={saveWorkout}>
                        Save workout
                    </button>
                    :
                    <button disabled>
                        Save workout
                    </button>
                }
            </div>

            {
                allWorkouts.length > 0 &&
                <div className="training__day__form__bottom__created__workouts">
                    <h4>Current workouts for session</h4>
                    <div className="training__day__form__bottom__sessions__workouts">
                        {allWorkouts.map((workout) => {
                            return <WorkoutCard workout={workout} />
                        })}
                    </div>
                </div>
            }

        </div>
    )
}

export default TrainingDayFormBottom
