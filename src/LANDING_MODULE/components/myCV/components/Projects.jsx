import React, { useState } from 'react';
import "./projects.css";
import ProjectInfo from "./ProjectInfo";

const Projects = ({ language }) => {
    const lang = language === "eng" ? "eng" : "lv";

    const [pageToShow, setPageToShow] = useState("elementi");

    const choosePage = (e) => {
        setPageToShow(e.target.id)
    }

    const color = {
        color: "greenyellow"
    }


    return (
        <div>

            <div className="other__projects__main__title">
                <h4>{lang === "eng" ? "Other mentionable projects" : "Citi pieminami projekti"}</h4>
            </div>

            <div className="other__projects__project__btns">
                <button style={pageToShow === "elementi" ? color : undefined} onClick={choosePage} id="elementi">{lang === "eng" ? "E-shop" : "E-veikals"}</button>
                <button style={pageToShow === "blogzzz" ? color : undefined} onClick={choosePage} id="blogzzz">{lang === "eng" ? "Bloging site" : "Blogošanas lapa"}</button>
                <button style={pageToShow === "tvShows" ? color : undefined} onClick={choosePage} id="tvShows">{lang === "eng" ? "Tv šovi" : "Tv shows"}</button>
                {/* tvShows */}
            </div>

            <ProjectInfo lang={lang} pageToShow={pageToShow} />

        </div>
    )
}

export default Projects
