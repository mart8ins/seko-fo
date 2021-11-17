import React from 'react';
import { isLogged } from "../../../landingSeed";
import "./aboutMe.css";


const AboutMe = ({ language }) => {

    return (
        <div className="cv__aboutMe__container">
            <div>
                <h3>{language === "eng" ? isLogged.aboutMe.personality.eng.title : isLogged.aboutMe.personality.lv.title}</h3>
                <p>{language === "eng" ? isLogged.aboutMe.personality.eng.text : isLogged.aboutMe.personality.lv.text}</p>
            </div>

            <div>
                <h3>{language === "eng" ? isLogged.aboutMe.hobbies.eng.title : isLogged.aboutMe.hobbies.lv.title}</h3>
                <p>{language === "eng" ? isLogged.aboutMe.hobbies.eng.text : isLogged.aboutMe.hobbies.lv.text}</p>
            </div>

            <div>
                <h3>{language === "eng" ? isLogged.aboutMe.goals.eng.title : isLogged.aboutMe.goals.lv.title}</h3>
                <p>{language === "eng" ? isLogged.aboutMe.goals.eng.text : isLogged.aboutMe.goals.lv.text}</p>
            </div>
        </div>
    )
}

export default AboutMe
