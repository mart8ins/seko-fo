import React from 'react';
import { Link } from "react-router-dom";
import "./activityBlock.css";

const ActivityBlock = ({ type, fromUser, toUser, story, data, date }) => {
    // console.log(type, fromUser, toUser, story, data, date)

    const background1 = {
        backgroundColor: "rgb(100, 95, 95)"
    }
    const background2 = {
        backgroundColor: "rgb(131, 124, 124)"
    }

    return (
        <div className="activity__block" style={type === "comment" ? background1 : background2}>

            <div className="activity__block__top">
                <div className="user__who__left">{fromUser} recently <span className="activity__type__title">{type === "comment" ? "commented" : "rated"}</span>...</div>
                <Link to="" className="users__story">{story}</Link>
                <div className="user__who__recieved">Story by {toUser}</div>
            </div>


            {
                type === "comment" &&
                <div className="activity__block__middle">
                    <div className="left__comment">{data.comment}...</div>
                </div>
            }

            {
                type === "rate" &&
                <div className="activity__block__middle rate__type">
                    <div className="given__rate">
                        {data.givenRate}
                    </div>
                    <div className="story__avarage__container">
                        <div>Story avarage</div>
                        <div>{data.storiesAvarageRate}</div>
                    </div>
                </div>
            }


            <div className="activity__block__bottom">
                <div className="activity__date">{date}</div>
            </div>

        </div >
    )
}

export default ActivityBlock
