import React from 'react';
import "./publicContentFeed.css";


import ContentCreationTop from "./components/contentCreationTop/ContentCreationTop";
import ContentFeedDisplay from "./components/contentFeedDisplay/ContentFeedDisplay";


const PublicContentFeed = () => {


    return (
        <div>
            <div className="public__content__feed__container">
                <ContentCreationTop />
                <ContentFeedDisplay />
            </div>
        </div>
    )
}

export default PublicContentFeed
