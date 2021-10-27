import React from 'react'
import { Link } from "react-router-dom";
import "./workoutCard.css";


const WorkoutCard = ({ workout, deleteWorkoutCard, hoover, asLink }) => {

    let totalWeight = 0;
    let totalReps = 0;

    workout.sets.forEach((work) => {
        totalWeight = totalWeight + (Number(work.weight) * Number(work.reps));
        totalReps = totalReps + Number(work.reps);
    })

    return (
        <div>
            {!asLink ?
                <div className={`training__day__form__bottom__sessions__workout__card ${hoover && "card__on__hoover"}`}>
                    {
                        deleteWorkoutCard
                        &&
                        <button onClick={() => deleteWorkoutCard(workout.id)} className="training__day__form__bottom__sessions__workout__card__delete">Delete</button>
                    }

                    <img src={`/images/workout_images/${workout.imageName}.jpg`} alt={workout.nameName} />
                    <div className="training__day__form__bottom__sessions__workout__card__meta">
                        <div className="training__day__form__bottom__sessions__workout__card__title">
                            {workout.name}
                        </div>
                        <div className="training__day__form__bottom__sessions__workout__card__sets">
                            <p>Total sets: <span>{workout.sets.length}</span></p>
                            <p>Total weight: <span>{totalWeight}</span></p>
                            <p>Total reps: <span>{totalReps}</span></p>
                        </div>
                    </div>
                </div>
                :
                <Link to={`/about/workout/${workout.wID}`}>
                    <div className={`training__day__form__bottom__sessions__workout__card ${hoover && "card__on__hoover"}`}>
                        {
                            deleteWorkoutCard
                            &&
                            <button onClick={() => deleteWorkoutCard(workout.id)} className="training__day__form__bottom__sessions__workout__card__delete">Delete</button>
                        }

                        <img src={`/images/workout_images/${workout.imageName}.jpg`} alt={workout.nameName} />
                        <div className="training__day__form__bottom__sessions__workout__card__meta">
                            <div className="training__day__form__bottom__sessions__workout__card__title">
                                {workout.name}
                            </div>
                            <div className="training__day__form__bottom__sessions__workout__card__sets">
                                <p>Total sets: <span>{workout.sets.length}</span></p>
                                <p>Total weight: <span>{totalWeight}</span></p>
                                <p>Total reps: <span>{totalReps}</span></p>
                            </div>
                        </div>
                    </div>
                </Link>
            }
        </div>

    )
}

export default WorkoutCard
