import React from 'react';
import { Link } from "react-router-dom";
import "./createOption.css";

const CreateOption = ({ name, createPath, learnPath, viewPath, background }) => {
    return (
        <div className="reversable__card">

            <div className="create__option__container__front" style={background}>
                <p className="create__option__name__front">{name}</p>
            </div>

            <div className="create__option__container__back" style={background}>
                <p className="create__option__name__back">{name}</p>
                <Link to={createPath}>Create</Link>
                {learnPath && <Link to={learnPath}>Learn</Link>}
                {viewPath && <Link to={viewPath}>View all</Link>}
            </div>

        </div>
    )
}

export default CreateOption
