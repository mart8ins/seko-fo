import React from "react";
import "./create.css";
import CreateOption from "./components/CreateOption";
import StatsHeaderForContent from "../utils/statsHeaderForContent/StatsHeaderForContent";

function Create() {
    const storyBackground = { backgroundImage: 'url("./images/create_options/story.jpg")' };
    const workoutBackground = { backgroundImage: 'url("./images/create_options/workout.jpg")' };

    return <div className="create__container">

        <StatsHeaderForContent title="My workplace" />

        <div className="create__options__container">
            <div>
                <CreateOption
                    createPath={"/create/story"}
                    viewPath={"/userContentFeed?type=story"}
                    name={"Story"}
                    background={storyBackground}
                />
            </div>
            <div>
                <CreateOption
                    createPath={"/create/workout"}
                    learnPath={1}
                    viewPath={"/userContentFeed?type=workout"}
                    name={"Workout"}
                    background={workoutBackground}
                />
            </div>
        </div>
    </div>

}

export default Create;