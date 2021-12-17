import React from 'react'
import "./aboutProject.css";
import Design from "./aboutProjectTypes/Design";
import UserExp from "./aboutProjectTypes/UserExp";
import ConnectionsExp from "./aboutProjectTypes/ConnectionsExp";
import MessageExp from "./aboutProjectTypes/MessageExp";
import ContentCreation from "./aboutProjectTypes/ContentCreation";
import ContentVisibilityExp from "./aboutProjectTypes/ContentVisibilityExp";

const AboutProject = ({ language }) => {
    const lang = language === "eng" ? "eng" : "lv";

    return (
        <div className="cv__aboutProject__container">
            <Design lang={lang} />
            <UserExp lang={lang} />
            <ConnectionsExp lang={lang} />
            <MessageExp lang={lang} />
            <ContentCreation lang={lang} />
            <ContentVisibilityExp lang={lang} />
        </div>
    )
}

export default AboutProject
