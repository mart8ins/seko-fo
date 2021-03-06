import React, { useState, useEffect, useContext } from 'react';
import "./publicFeed.css";
import { v4 as uuidv4 } from 'uuid';

import { getContentFeed } from "../../../../../../fetch/contentFeed";
import { AuthContext } from "../../../../../../context/auth-context";

import ContentFeedFilter from './components/contentFeedFilter/ContentFeedFilter';
import ContentFeedTypeBox from "./components/contentFeedTypeBox/ContentFeedTypeBox";
import FeedActivityBlock from "./components/feedActivityBlock/FeedActivityBlock";



const PublicFeed = () => {
    const { authData: { token } } = useContext(AuthContext);
    const [contentFeed, setContentFeed] = useState([]);

    const [filterType, setFilterType] = useState("all");
    const [filteredContentFeed, setFilteredContentFeed] = useState([]);

    useEffect(() => {
        fetchContentFeed(token);
    }, [token])

    const fetchContentFeed = async (token) => {
        const res = await getContentFeed(token);
        setContentFeed(res.data.content.reverse());
    }

    // filter what content type to show
    useEffect(() => {
        if (filterType !== "all") {
            const newArr = contentFeed.filter((element) => {
                return element.type === filterType;
            });
            setFilteredContentFeed(newArr)
        } else {
            setFilteredContentFeed(contentFeed)
        }
    }, [filterType, contentFeed]);


    return (
        <div className="public__feed__container">
            <ContentFeedFilter setFilterType={setFilterType} filterType={filterType} />
            <div className="public__feed__content__container">



                <div className="activity__block__container">
                    <p className="last__activity__title">Latest user activity</p>
                    <FeedActivityBlock />
                </div>

                <div className="public__content__for__feed">
                    {filteredContentFeed && filteredContentFeed.length ? filteredContentFeed.map((content) => {
                        return <ContentFeedTypeBox key={uuidv4()} content={content} />
                    }) :
                        <div className="public__content__for__feed__no__data">
                            No content to show, try later...
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default PublicFeed
