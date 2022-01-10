import React from 'react';
import "./cvContent.css";

import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import WorkExp from "./components/WorkExp";
import Coding from "./components/Coding";
import AboutProject from "./components/AboutProject";
import Projects from "./components/Projects";

const CVContent = ({ activeCvData, language }) => {
    return (
        <div className="cv__data__content__container">
            {activeCvData === "aboutProject" && <AboutProject language={language} />}
            {activeCvData === "aboutMe" && <AboutMe language={language} />}
            {activeCvData === "education" && <Education language={language} />}
            {activeCvData === "workExp" && <WorkExp language={language} />}
            {activeCvData === "coding" && <Coding language={language} />}
            {activeCvData === "projects" && <Projects language={language} />}
        </div>
    )
}

export default CVContent
