import React from 'react';
import "./workoutManual.css";
import { v4 as uuidv4 } from 'uuid';

const WorkoutManual = ({ workoutData }) => {

    return (
        <div id={`${workoutData && workoutData.about.start_position}`} className="workout__manual__container">


            <div className="workout__manual__start__movement__finish__container">
                <div className="workout__manual__movement">
                    <h4>Start position</h4>
                    <div>
                        <img src={`/images/workout_images/${workoutData && workoutData.image}/${workoutData && workoutData.about.start_position}.jpg`} alt="" />
                    </div>
                </div>

                <div className="workout__manual__movement">
                    <h4>Movement</h4>
                    <div>
                        <img src={`/images/workout_images/${workoutData && workoutData.image}/${workoutData && workoutData.about.movement_position}.jpg`} alt="" />
                    </div>
                </div>

                <div className="workout__manual__movement">
                    <h4>End position</h4>
                    <div>
                        <img src={`/images/workout_images/${workoutData && workoutData.image}/${workoutData && workoutData.about.end_position}.jpg`} alt="" />
                    </div>
                </div>
            </div>


            <div className="workout__manual__muscle__groups__container">

                <div className="workout__manual__muscles">
                    <h4>Trained muscles</h4>
                    {workoutData && workoutData.about.muscle_groups.map((muscle) => {
                        return <p key={uuidv4}>{muscle}</p>
                    })}
                </div>
            </div>


            <div className="workout__manual__workout__description__container">
                <div className="workout__manual__description">
                    {workoutData && workoutData.about.instructions}
                </div>

                {workoutData && workoutData.video &&
                    <div className="workout__manual__video">
                        <iframe src={`${workoutData.video}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                }
            </div>

        </div>
    )
}

export default WorkoutManual
