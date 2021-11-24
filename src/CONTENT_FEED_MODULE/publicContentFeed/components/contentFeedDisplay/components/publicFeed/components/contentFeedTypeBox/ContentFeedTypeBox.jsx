import React from 'react';
import { Link } from "react-router-dom";
import "./contentFeedTypeBox.css";

import StoryTemplate from "./components/StoryTemplate";
import WorkoutTemplate from "./components/WorkoutTemplate";
import UserCardForTypeBox from "./components/UserCardForTypeBox";


const ContentFeedTypeBox = ({ content }) => {
    //STORY
    const linkTo = content.type === "story" && `/story/${content.content.storyId}` || content.type === "workout" && `/workoutday/${content.content.workoutDayId}`
    const storyTitle = content.type === "story" ? content.content.title : "Story title is missing";
    const storyContent = content.type === "story" ? content.content.story : "Story is missing";
    const storyId = content.type === "story" ? content.content.storyId : "No story id found";

    // WORKOUT
    const sessionTitle = content.type === "workout" ? content.content.title : "Workout title is missing";
    const workoutDay = content.type === "workout" ? content.date : "Workout date is missing";
    const allWorkouts = content.type === "workout" ? content.content.workouts : [];
    // ALL
    const authorId = content.author.id;
    const userProfilePhoto = content.author.image || "/images/no_image.png";
    console.log(content, "dddddd")

    const blueStoryColor = {
        backgroundColor: "rgb(28, 133, 151)"
    };
    const brownWorkoutColor = {
        backgroundColor: "rgb(44, 180, 139)"
    };
    const activeBackgroundIdStyle = content.type === "story" ? blueStoryColor : brownWorkoutColor;

    return (
        <Link to={linkTo} className="content__feed__type__box">

            {content.type === "workout" ?
                <WorkoutTemplate
                    activeBackgroundIdStyle={activeBackgroundIdStyle}
                    workoutDay={workoutDay}
                    sessionTitle={sessionTitle}
                    allWorkouts={allWorkouts}
                />
                :
                <StoryTemplate
                    storyId={storyId}
                    storyTitle={storyTitle}
                    storyContent={storyContent}
                    activeBackgroundIdStyle={activeBackgroundIdStyle
                    } />
            }

            <UserCardForTypeBox
                authorId={authorId}
                firstName={content.author.firstName}
                lastName={content.author.lastName}
                userProfilePhoto={userProfilePhoto}
            />

        </Link>
    )
}

export default ContentFeedTypeBox
