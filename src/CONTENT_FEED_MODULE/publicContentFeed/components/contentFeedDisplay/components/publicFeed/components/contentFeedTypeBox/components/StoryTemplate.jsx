import React, { useEffect, useState, useContext } from 'react';
import "./storyTemplate.css";
import { getStory } from "../../../../../../../../../fetch/story";
import { AuthContext } from '../../../../../../../../../context/auth-context';

const StoryTemplate = ({ storyTitle, storyContent, storyId }) => {
    const { authData: { token } } = useContext(AuthContext);
    const [story, setStory] = useState();
    const [rating, setRating] = useState(undefined);
    const [date, setDate] = useState(undefined);

    useEffect(() => {
        let avarageRating = undefined;

        let rateSum = 0;
        if (story && story.rating.length) {
            story.rating.forEach((rate) => {
                rateSum += rate.rate;
            });
            avarageRating = rateSum / story.rating.length;
        }
        setRating(avarageRating);

        if (story && story.date) {
            const d = story.date;
            let dateForText = new Date(new Date(d)).toDateString();
            setDate(dateForText);
        }
    }, [story])

    const fetchStory = async () => {
        const res = await getStory(token, storyId);
        setStory(res.data.story);
    }


    useEffect(() => {
        fetchStory();
    }, [storyId]);

    const typeBackgroundColor = {
        backgroundColor: "rgb(28, 133, 151)"
    };

    return (
        <div className="content__feed__type__box__top">
            <p className="content__feed__type" style={typeBackgroundColor}>Story</p>

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
                    <div><span>{story && story.comments.length}</span> comments</div>
                </div>
                <div className="story__box__bottom__rate">
                    {!rating ? <div><span className="not__rated">Not rated</span></div>
                        :
                        <div><span>{rating}</span>avarage rating</div>
                    }
                </div>
                <div className="story__box__bottom__date">
                    <div>{story && date}</div>
                </div>
            </div>
        </div>
    )
}

export default StoryTemplate
