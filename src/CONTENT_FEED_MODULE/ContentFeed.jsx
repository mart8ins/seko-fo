import React, { useState, useEffect, useContext } from 'react';
import { getContentFeed } from "../fetch/contentFeed";
import { AuthContext } from "../context/auth-context";

const ContentFeed = () => {
    const { authData: { token } } = useContext(AuthContext);
    const [contentFeed, setContentFeed] = useState([]);

    useEffect(() => {
        fetchContentFeed(token);
    }, [])

    const fetchContentFeed = async (token) => {
        const res = await getContentFeed(token);
        setContentFeed(res.data.content);
    }

    console.log(contentFeed)

    return (
        <div>
            ContentFeed.jsx
        </div>
    )
}

export default ContentFeed
