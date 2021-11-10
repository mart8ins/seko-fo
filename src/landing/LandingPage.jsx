import React, { useContext, useState } from "react";
import { AuthContext } from "../context/auth-context";
import LandingNotAuth from "./components/landingNotAuth/LandingNotAuth";
import LandingAuth from "./components/landingAuth/LandingAuth";
import "./landingPage.css";



function LandingPage() {
    const { authData } = useContext(AuthContext);

    const [language, setLanguage] = useState("eng");

    const toogleLanguage = () => {
        language === "lv" ? setLanguage("eng") : setLanguage("lv");
    }

    return <div className="landing__main__container">

        <div className="landing__language__btns__container">
            <button onClick={toogleLanguage} className={`landing__language__btn ${language === "eng" && "language__btn__active"}`}>ENG</button>
            <button onClick={toogleLanguage} className={`landing__language__btn ${language === "lv" && "language__btn__active"}`}>LV</button>
        </div>

        {authData.userId ? <LandingAuth language={language} /> : <LandingNotAuth language={language} />}

    </div>

}

export default LandingPage;