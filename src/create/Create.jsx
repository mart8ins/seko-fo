import React from "react";
import "./create.css";
import CreateOption from "./components/CreateOption";

function Create() {
    const storyBackground = { backgroundImage: 'url("./images/create_options/story.jpg")' };
    const workoutBackground = { backgroundImage: 'url("./images/create_options/workout.jpg")' };
    const exchangeBackground = { backgroundImage: 'url("./images/create_options/exchange.jpg")' };

    return <div className="create__container">
        <div className="create__intro">
            <p>Create! Improve youself! </p>
        </div>

        <div className="create__options__container">
            <CreateOption path={"/create/story"} name={"Story"} background={storyBackground} />
            <CreateOption path={"/create/workout"} name={"Workout"} background={workoutBackground} />
            <CreateOption path={"/create/exchange"} name={"Exchange"} background={exchangeBackground} />
        </div>
    </div>

}

export default Create;