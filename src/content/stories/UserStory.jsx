import React, { useContext, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import "./userStory.css";
import globalVariables from '../../globalVariables';
import StoryCommentsSection from "./StoryCommentsSection";
import StorySection from "./StorySection";

import { getStory } from "../../fetch/users/story";

const StoryContent = () => {
    const { authData: { userId, token } } = useContext(AuthContext);
    const { storyId } = useParams();
    const [story, setStory] = useState();
    const [backGroundImage, setBackGroundImage] = useState();
    const [userProfileImage, setUserProfileImage] = useState();
    const [rating, setRating] = useState(0);

    const [storyIsRated, setStoryIsRated] = useState(false);
    const [userRated, setUserRated] = useState(undefined);
    console.log(story)
    useEffect(() => {
        fetchStory();
    }, [storyId]);

    useEffect(() => {
        if (story && story.rating.length) {
            let r = 0;
            story.rating.forEach((rater) => {
                // keep track of all ratings to get avarage
                r = r + rater.rate;
                // check if user already rated story what he reads
                if (rater.raterId === userId) {
                    setStoryIsRated(true);
                    setUserRated(rater.rate)
                }
            });
            r = r / story.rating.length;
            setRating(r);
        };
    }, [story]);

    // to check if user is alreadu rated this story
    useEffect(() => {

    })

    const fetchStory = async () => {
        const res = await getStory(token, storyId);
        setStory(res.data.story);
        if (res.data.story.image) {
            setBackGroundImage(globalVariables.server + res.data.story.image);
        }
        if (res.data.story.author.photo) {
            setUserProfileImage(globalVariables.server + res.data.story.author.photo)
        }
    }
    return (
        <div className="user__story__main__container">

            {story &&
                <StorySection
                    backGroundImage={backGroundImage}
                    storyId={storyId}
                    title={story.title}
                    rating={rating}
                    ratings={story.rating}
                    story={story.story}
                    date={story.date}
                    authorId={story.author.userId}
                    userId={userId}
                    firstName={story.author.firstName}
                    lastName={story.author.lastName}
                    userProfileImage={userProfileImage}

                    storyIsRated={storyIsRated}
                    userRated={userRated}
                    fetchStory={fetchStory}
                />
            }

            {story && <StoryCommentsSection
                comments_allowed={story.comments_allowed}
                storyId={storyId}
                comments={story.comments}
                updateStory={fetchStory}
                storyAuthorId={story.author.userId}
            />}

        </div>
    )
}

export default StoryContent;
