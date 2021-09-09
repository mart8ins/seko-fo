import React from "react";
import Photo from "./profile_settings/Photo";
import UserData from "./profile_settings/UserData";
import "./settings.css";


function Settings() {
    return <div className="settings__container">
        <div className="change__user__settings__container">
            <Photo />
            <UserData />
        </div>
        <div className="settings__bio">
            Bio srttings
        </div>
    </div>

}

export default Settings;