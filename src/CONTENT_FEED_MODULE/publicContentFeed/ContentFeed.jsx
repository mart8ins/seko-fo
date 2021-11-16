import React, { useState, useEffect, useContext } from 'react';
import { getContentFeed } from "../../fetch/contentFeed";
import { AuthContext } from "../../context/auth-context";

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
            <div>
                {contentFeed.map((content) => {
                    return <div>
                        <h1>{content.type}</h1>
                        <p>{content.content.title}</p>

                    </div>
                })}
            </div>
        </div>
    )
}

export default ContentFeed
