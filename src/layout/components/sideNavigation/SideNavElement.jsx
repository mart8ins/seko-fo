import { NavLink } from "react-router-dom";


function SideNavElement({ icon }) {
    return <NavLink className="icon-element" to={`/${icon.type}`} title={icon.type}>{icon.icon}</NavLink>
}

export default SideNavElement;
