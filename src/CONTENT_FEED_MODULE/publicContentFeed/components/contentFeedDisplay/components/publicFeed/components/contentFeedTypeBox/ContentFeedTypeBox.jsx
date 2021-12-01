import React from 'react';
import { Link } from "react-router-dom";
import "./contentFeedTypeBox.css";

import StoryTemplate from "./components/StoryTemplate";
import WorkoutTemplate from "./components/WorkoutTemplate";
import UserCardForTypeBox from "./components/UserCardForTypeBox";


const ContentFeedTypeBox = ({ content }) => {
    //STORY
    const storyTitle = content.type === "story" ? content.content.title : "Story title is missing";
    const storyContent = content.type === "story" ? content.content.story : "Story is missing";
    const storyId = content.type === "story" ? content.content.storyId : "No story id found";

    // WORKOUT
    const sessionTitle = content.type === "workout" ? content.content.title : "Workout title is missing";
    const workoutDay = content.type === "workout" ? content.date : "Workout date is missing";
    const allWorkouts = content.type === "workout" ? content.content.workouts : [];

    // ALL
    const authorId = content.author.id;
    const linkTo = content.type === "story" && `/story/${content.content.storyId}` || content.type === "workout" && `/workoutday/${content.content.workoutDayId}`


    return (
        <Link to={linkTo} className="content__feed__type__box">

            {content.type === "workout" ?
                <WorkoutTemplate
                    workoutDay={workoutDay}
                    sessionTitle={sessionTitle}
                    allWorkouts={allWorkouts}
                />
                :
                <StoryTemplate
                    storyId={storyId}
                    storyTitle={storyTitle}
                    storyContent={storyContent}
                />
            }

            <UserCardForTypeBox
                authorId={authorId}
                firstName={content.author.firstName}
                lastName={content.author.lastName}
            />

        </Link>
    )
}

export default ContentFeedTypeBox
