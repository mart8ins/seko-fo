import React from 'react';
import { Link } from "react-router-dom";
import "./createOption.css";

const CreateOption = ({ name, path, background }) => {
    return (
        <Link className="link__to__create__option" to={path}>
            <div className="create__option__container"
                style={background}>
                <p className="create__option__name">{name}</p>
            </div>
        </Link>
    )
}

export default CreateOption
