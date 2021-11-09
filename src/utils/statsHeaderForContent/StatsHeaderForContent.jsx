import React from 'react';
import { Link } from "react-router-dom";
import "./statsHeaderForContent.css";
import { v4 as uuidv4 } from 'uuid';


const StatsHeaderForContent = ({ title, contentStats }) => {
    return (
        <div className="stats__header__container">
            <div className="stats__header__left__side">
                <p>{title}</p>
            </div>
            {contentStats &&
                <div className="stats__header__right__side">
                    {contentStats.map((stat) => {
                        let url = stat.wID ? `/about/workout/${stat.wID}` : `/story/${stat.storyId}`;
                        return <div key={uuidv4()} className="content__stat">
                            <div className="content__stat__title">{stat.title}</div>
                            {stat.asLink && stat.stat ?
                                <Link to={url} className="content__stat__result">{stat.stat || stat.default}</Link>
                                :
                                <div className="content__stat__result">{stat.stat || stat.default}</div>
                            }
                        </div>
                    })}
                </div>
            }

        </div>
    )
}

export default StatsHeaderForContent

