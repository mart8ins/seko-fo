import React from 'react';
import { Link } from "react-router-dom";
import "./contentFeedTypeBox.css";

const ContentFeedTypeBox = ({ content }) => {
    //STORY
    const linkTo = content.type === "story" && `/story/${content.content.storyId}` || content.type === "workout" && `/workoutday/${content.content.workoutDayId}`
    const storyTitle = content.type === "story" ? content.content.title : "Story title is missing";
    const storyContent = content.type === "story" ? content.content.story : "Story is missing";

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



    const templateForTopStory = <div className="content__feed__type__box__top">
        <p className="content__feed__type" style={activeBackgroundIdStyle}>Story</p>

        <div className="story__box__top">
            <div className="story__box__top__title">
                {storyTitle}
            </div>
            <div className="story__box__top__story">
                {storyContent}...
            </div>
        </div>

        <div className="story__box__bottom">
            <div className="story__box__bottom__coments">
                <div><span>3</span> comments</div>
            </div>
            <div className="story__box__bottom__rate">
                <div><span>5.6</span> rating</div>
            </div>
            <div className="story__box__bottom__date">
                <div>2021.02.22</div>
            </div>
        </div>
    </div>

    const templateForTopWorkout = <div className="content__feed__type__box__top">
        <p className="content__feed__type" style={activeBackgroundIdStyle}>Training day</p>
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

    return (
        <Link to={linkTo} className="content__feed__type__box">

            {content.type === "workout" ? templateForTopWorkout : templateForTopStory}

            <div className="content__feed__type__box__bottom">
                <Link to={`/user/${authorId}/profile`}>
                    {content.author.firstName + " " + content.author.lastName}
                </Link>
                <img src={userProfilePhoto} />
            </div>
        </Link>
    )
}

export default ContentFeedTypeBox
