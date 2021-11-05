import React from 'react';
import "./workoutManual.css";

const WorkoutManual = ({ workoutData }) => {
    return (
        <div className="workout__manual__container">


            <div className="workout__manual__start__movement__finish__container">
                <div className="workout__manual__movement">
                    <h4>Start position</h4>
                    <img src="/images/no_image.png" alt="" />
                </div>

                <div className="workout__manual__movement">
                    <h4>Movement</h4>
                    <img src="/images/no_image.png" alt="" />
                </div>

                <div className="workout__manual__movement">
                    <h4>End position</h4>
                    <img src="/images/no_image.png" alt="" />
                </div>
            </div>


            <div className="workout__manual__muscle__groups__container">

                <div className="workout__manual__muscles">
                    <h4>Trained muscles</h4>
                    <p>Biceps</p>
                    <p>Triceps</p>
                    <p>Triceps</p>
                    <p>Triceps</p>
                </div>
            </div>


            <div className="workout__manual__workout__description__container">
                <div className="workout__manual__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                    sapiente officiis modi at sunt excepturi expedita sint?
                </div>

                <div className="workout__manual__video">
                    <iframe src="https://www.youtube.com/embed/MHTXEACrjFM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

        </div>
    )
}

export default WorkoutManual
