import React from 'react';
import "./cvProfile.css";
import { isLogged } from "../../landingSeed";


const CVProfile = ({ language, activeCvData, setActiveCvData }) => {

    const handleButtonClick = (e) => {
        setActiveCvData(e.target.id)
    }


    return (
        <div className="cv__profile__container">

            <div className="cv__profile__me">
                <div className="cv__profile__me__photo">
                    <img src="/images/cv_profile.jpg" alt="Martins Meisters" />
                </div>
                <div className="cv__profile__me__data">
                    <p>
                        {language === "eng" ? isLogged.profile.eng.name : isLogged.profile.lv.name}
                    </p>
                    <p>
                        {language === "eng" ? isLogged.profile.eng.email : isLogged.profile.lv.email}
                    </p>
                    <p>
                        {language === "eng" ? isLogged.profile.eng.phone : isLogged.profile.lv.phone}
                    </p>
                    <p>
                        {language === "eng" ? `${isLogged.profile.eng.country}, ${isLogged.profile.eng.city}` : `${isLogged.profile.lv.country}, ${isLogged.profile.lv.city}`}
                    </p>
                </div>
            </div>

            <div className="cv__profile__content__navigation">
                <button
                    id="aboutProject"
                    onClick={handleButtonClick}
                    className={`cv__profile__button ${activeCvData === "aboutProject" && "cv__profile__active__btn"}`}>{language === "eng" ? isLogged.navigation.eng.aboutProject : isLogged.navigation.lv.parProjektu}</button>

                <button
                    id="aboutMe"
                    onClick={handleButtonClick}
                    className={`cv__profile__button ${activeCvData === "aboutMe" && "cv__profile__active__btn"}`}>{language === "eng" ? isLogged.navigation.eng.aboutMe : isLogged.navigation.lv.parMani}</button>

                <button
                    id="education"
                    onClick={handleButtonClick}
                    className={`cv__profile__button ${activeCvData === "education" && "cv__profile__active__btn"}`}>{language === "eng" ? isLogged.navigation.eng.education : isLogged.navigation.lv.izglitiba}</button>

                <button
                    id="workExp"
                    onClick={handleButtonClick}
                    className={`cv__profile__button ${activeCvData === "workExp" && "cv__profile__active__btn"}`}>{language === "eng" ? isLogged.navigation.eng.workExp : isLogged.navigation.lv.darbaPieredze}</button>

                <button
                    id="coding"
                    onClick={handleButtonClick}
                    className={`cv__profile__button ${activeCvData === "coding" && "cv__profile__active__btn"}`}>{language === "eng" ? isLogged.navigation.eng.coding : isLogged.navigation.lv.programmesana}</button>
            </div>

        </div>
    )
}

export default CVProfile