import React, { useState, useContext } from 'react';
import "./landingNotAuth.css";
import { AuthContext } from '../../../context/auth-context';
import { notLogged } from "../../landingSeed";


const LandingNotAuth = ({ language }) => {
    const { authData, setAuthData } = useContext(AuthContext);


    // to close auth modal when clicking outside the signup/login form
    const openAuthModal = () => {
        setAuthData({
            ...authData,
            showAuthModal: true
        })
    }

    return (
        <div className="landing__not__auth__container">

            <div className="landing__not__auth__intro__container">

                <div className="landing__not__auth__intro__about__project">
                    <h1>{language === "eng" ? notLogged.title.eng : notLogged.title.lv}</h1>
                    <p>
                        {language === "eng" ? notLogged.description.eng : notLogged.description.lv}
                    </p>

                    <div className="landing__not__auth__redirect">
                        <button onClick={openAuthModal}>{language === "eng" ? notLogged.btn.eng : notLogged.btn.lv}</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default LandingNotAuth
