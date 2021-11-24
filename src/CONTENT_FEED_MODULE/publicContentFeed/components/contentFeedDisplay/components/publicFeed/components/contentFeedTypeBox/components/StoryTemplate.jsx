import React from 'react';
import "./storyTemplate.css"

const StoryTemplate = ({ storyTitle, storyContent, activeBackgroundIdStyle, storyId }) => {
    // jāfečo storyId un komentu skaits, rating???

    return (
        <div className="content__feed__type__box__top">
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
    )
}

export default StoryTemplate
