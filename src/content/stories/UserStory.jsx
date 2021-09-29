import React, { useContext, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import "./userStory.css";
import globalVariables from '../../globalVariables';
import CommentsSection from "./CommentsSection";
import StorySection from "./StorySection";

import { getStory } from "../../fetch/users/story";

const StoryContent = () => {
    const { authData: { userId, token } } = useContext(AuthContext);
    const { storyId } = useParams();
    const [story, setStory] = useState();
    const [backGroundImage, setBackGroundImage] = useState();
    const [userProfileImage, setUserProfileImage] = useState();
    const [rating, setRating] = useState(0);

    useEffect(() => {
        fetchStory();
    }, [storyId]);

    useEffect(() => {
        if (story && story.rating.length) {
            let r = 0;
            story.rating.forEach((rater) => {
                r = r + rater.rate;
            });
            r = r / story.rating.length;
            setRating(r);
        };
    }, [story]);

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
                    title={story.title}
                    rating={rating}
                    ratings={story.ratings}
                    story={story.story}
                    date={story.date}
                    authorId={story.author.userId}
                    userId={userId}
                    firstName={story.author.firstName}
                    lastName={story.author.lastName}
                    userProfileImage={userProfileImage}
                />
            }

            {story && <CommentsSection comments_allowed={story.comments_allowed} />}

        </div>
    )
}

export default StoryContent;
