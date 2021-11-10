import React, { useState } from 'react';
import "./landingNotAuth.css";
import { notLogged } from "../../landingSeed";


const LandingNotAuth = ({ language }) => {
    return (
        <div className="landing__not__auth__container">

            <div className="landing__not__auth__intro__container">

                <div className="landing__not__auth__intro__about__project">
                    <h1>{language === "eng" ? notLogged.title.eng : notLogged.title.lv}</h1>
                    <p>
                        {language === "eng" ? notLogged.description.eng : notLogged.description.lv}
                    </p>

                </div>

            </div>

        </div>
    )
}

export default LandingNotAuth
