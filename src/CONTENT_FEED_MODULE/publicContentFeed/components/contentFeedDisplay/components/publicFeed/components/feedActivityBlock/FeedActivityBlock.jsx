import React, { useState, useEffect, useContext } from 'react';
import "./feedActivityBlock.css";
import ActivityBlock from "./components/ActivityBlock";
import { getContentFeedActivity } from "../../../../../../../../fetch/contentFeed";
import { AuthContext } from "../../../../../../../../context/auth-context";

const FeedActivityBlock = () => {
    const { authData: { token } } = useContext(AuthContext);

    const [allActivity, setAllActivity] = useState([]);

    useEffect(() => {
        fetchActitvity();
    }, [setAllActivity])

    const fetchActitvity = async () => {
        const res = await getContentFeedActivity(token);
        setAllActivity(res.data.activity.reverse());
    }

    return (
        <div className="activity__block__container">

            <p className="last__activity__title">
                Latest user activity
            </p>

            {allActivity.map((act) => {
                return <ActivityBlock
                    type={act.type}
                    fromUser={act.fromUser}
                    toUser={act.toUser}
                    story={act.story}
                    storyId={act.storyId}
                    data={act.data}
                    date={act.date}
                />
            })}
        </div>
    )
}

export default FeedActivityBlock
