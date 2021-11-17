import React from 'react'
import { isLogged } from '../../../landingSeed';
import "./aboutProject.css";

const AboutProject = ({ language }) => {
    const lang = language === "eng" ? "eng" : "lv";

    return (
        <div className="cv__aboutProject__container">
            {
                isLogged.aboutProject.map((item) => {
                    return <div>
                        <h3>{item.type}</h3>
                        <p>{item[lang]}</p>
                    </div>
                })
            }
        </div>
    )
}

export default AboutProject
