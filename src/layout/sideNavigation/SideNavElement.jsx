import React from "react";
import { NavLink } from "react-router-dom";



function SideNavElement({ icon }) {
    return (
        <React.Fragment>
            <NavLink
                className="icon-element"
                to={`/${icon.type}`}
                title={icon.type}>
                {icon.icon}
            </NavLink>
        </React.Fragment>
    )
}

export default SideNavElement;
