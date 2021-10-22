import React from 'react';
import "./workoutCard.css";

const WorkoutCard = ({ workout }) => {
    console.log(workout.sets)

    let totalWeight = 0;
    let totalReps = 0;

    workout.sets.forEach((work) => {
        totalWeight = totalWeight + (Number(work.weight) * Number(work.reps));
        totalReps = totalReps + Number(work.reps);
    })

    return (
        <div className="training__day__form__bottom__sessions__workout__card">
            <button className="training__day__form__bottom__sessions__workout__card__delete">Delete</button>
            <img src={`/images/workout_images/${workout.image}.jpg`} alt={workout.name} />
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
            <div>delete</div>
        </div>
    )
}

export default WorkoutCard
