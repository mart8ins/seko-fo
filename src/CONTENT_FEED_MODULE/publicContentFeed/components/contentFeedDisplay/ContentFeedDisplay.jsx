import React from 'react';
import "./contentFeedDisplay.css";
import ConnectionsOnline from "./components/connectionsOnline/ConnectionsOnline";
import PublicFeed from './components/publicFeed/PublicFeed';

const ContentFeedDisplay = () => {
    return (
        <div className="content__feed__display__container">
            <PublicFeed />
            <ConnectionsOnline />
        </div>
    )
}

export default ContentFeedDisplay
