import React from 'react';
import "./createStory.css";

import StoryForm from "./components/StoryForm";
import MyStories from "./components/MyStories";

const CreateStory = () => {
    return (
        <div className="story__main__container">
            <StoryForm />
            <MyStories />
        </div>
    )
}

export default CreateStory
