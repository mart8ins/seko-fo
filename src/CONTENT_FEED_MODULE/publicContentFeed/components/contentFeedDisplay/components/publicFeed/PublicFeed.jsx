import React, { useState, useEffect, useContext } from 'react';
import "./publicFeed.css";

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
    }, [])

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
    }, [filterType, contentFeed])


    return (
        <div className="public__feed__container">
            <ContentFeedFilter setFilterType={setFilterType} filterType={filterType} />

            <div className="public__feed__content__container">

                <FeedActivityBlock />

                <div className="public__content__for__feed">
                    {filteredContentFeed && filteredContentFeed.length ? filteredContentFeed.map((content) => {
                        return <ContentFeedTypeBox content={content} />
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
