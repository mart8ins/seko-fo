import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import "./workoutCard.css";


const WorkoutCard = ({ workout, deleteWorkoutCard, hover, asLink, data }) => {
    console.log(workout)

    // state for image depending what renders card, db data or workouts seed data
    const [image, setImage] = useState();
    const [totalWeight, setTotalWeight] = useState(0);
    const [totalReps, setTotalReps] = useState(0);

    useEffect(() => {
        const img = workout.imageName || workout.image;
        setImage(img)
    }, [])


    useEffect(() => {
        // stats for created workout
        let tW = 0;
        let tR = 0;
        if (data) {
            workout.sets.forEach((work) => {
                tW = tW + (Number(work.weight) * Number(work.reps));
                tR = tR + Number(work.reps);
            })
        }
        setTotalWeight(tW);
        setTotalReps(tR);
    }, [data])

    return (
        <div>
            {!asLink ?
                <div className={`training__day__form__bottom__sessions__workout__card ${hover && "card__on__hover"}`}>
                    {
                        deleteWorkoutCard
                        &&
                        <button onClick={() => deleteWorkoutCard(workout.id)} className="training__day__form__bottom__sessions__workout__card__delete">Delete</button>
                    }

                    <img src={`/images/workout_images/${image}.jpg`} alt={workout.name} />
                    <div className="training__day__form__bottom__sessions__workout__card__meta">
                        <div className="training__day__form__bottom__sessions__workout__card__title">
                            {workout.name}
                        </div>
                        {
                            data &&
                            <div className="training__day__form__bottom__sessions__workout__card__sets">
                                <p>Total sets: <span>{workout.sets.length}</span></p>
                                <p>Total weight: <span>{totalWeight}</span></p>
                                <p>Total reps: <span>{totalReps}</span></p>
                            </div>
                        }

                    </div>
                </div>
                :
                <Link to={`/about/workout/${workout.wID}`}>
                    <div className={`training__day__form__bottom__sessions__workout__card ${hover && "card__on__hover"}`}>
                        {
                            deleteWorkoutCard
                            &&
                            <button onClick={() => deleteWorkoutCard(workout.id)} className="training__day__form__bottom__sessions__workout__card__delete">Delete</button>
                        }

                        <img src={`/images/workout_images/${image}.jpg`} alt={workout.name} />
                        <div className="training__day__form__bottom__sessions__workout__card__meta">
                            <div className="training__day__form__bottom__sessions__workout__card__title">
                                {workout.name}
                            </div>
                            {data &&
                                <div className="training__day__form__bottom__sessions__workout__card__sets">
                                    <p>Total sets: <span>{workout.sets.length}</span></p>
                                    <p>Total weight: <span>{totalWeight}</span></p>
                                    <p>Total reps: <span>{totalReps}</span></p>
                                </div>
                            }
                        </div>
                    </div>
                </Link>
            }
        </div>

    )
}

export default WorkoutCard
