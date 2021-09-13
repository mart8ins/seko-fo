import React from "react";
import ProfilePhotoPicker from "./profile_settings/ProfilePhotoPicker";
import UserData from "./profile_settings/UserData";
import "./settings.css";


function Settings() {
    return <div className="settings__container">
        <div className="change__user__settings__container">
            <ProfilePhotoPicker />
            <UserData />
        </div>
        <div className="settings__bio">
            Bio srttings
        </div>
    </div>

}

export default Settings;