import React, { useState } from 'react'
import "./landingAuth.css";

import CVProfile from '../myCV/CVProfile';
import CVContent from "../myCV/CVContent";

const LandingAuth = ({ language }) => {
    const [activeCvData, setActiveCvData] = useState("aboutProject")

    return (
        <div className="landing__is__auth__container">
            <CVProfile language={language} activeCvData={activeCvData} setActiveCvData={setActiveCvData} />
            <CVContent language={language} activeCvData={activeCvData} />
        </div>
    )
}

export default LandingAuth
