import React from "react";
import ProfilePhotoPicker from "./profile_settings/ProfilePhotoPicker";
import UserData from "./profile_settings/UserData";
import AboutMe from "./profile_settings/AboutMe";
import "./settings.css";


function Settings() {
    return <div className="settings__container">
        <div className="change__user__settings__container">
            <ProfilePhotoPicker />
            <UserData />
        </div>
        <div className="about__me__container">
            <AboutMe />
        </div>
    </div>

}

export default Settings;