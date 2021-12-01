import React from 'react';
import "./workoutTemplate.css"

const WorkoutTemplate = ({ workoutDay, sessionTitle, allWorkouts }) => {

    const typeBackgroundColor = {
        backgroundColor: "rgb(44, 180, 139)"
    };

    return (
        <div className="content__feed__type__box__top">
            <p className="content__feed__type" style={typeBackgroundColor}>Training day</p>
            <div className="workout__box__top">
                <div></div>
                <div className="workout__box__top__date">
                    {workoutDay}
                </div>
            </div>
            <div className="workout__box__bottom">
                <div className="workout__box__session__title">
                    <p><span>Added session</span> {sessionTitle}</p>
                </div>
                <div className="workout__box__session__workouts">
                    <h5>Workouts in session</h5>

                    <div className="workout__box__session__workouts__container">
                        {allWorkouts.map((element) => {
                            return <p>{element.name}</p>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkoutTemplate
