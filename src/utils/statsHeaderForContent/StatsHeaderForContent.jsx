import React from 'react';
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
                        return <div key={uuidv4()} className="content__stat">
                            <div className="content__stat__title">{stat.title}</div>
                            <div className="content__stat__result">{stat.stat || stat.default}</div>
                        </div>
                    })}
                </div>
            }

        </div>
    )
}

export default StatsHeaderForContent

