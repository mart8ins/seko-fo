import "./sideNavigation.css";
import SideNavElement from "./SideNavElement";
import allIcons from "./icons/icons";

const renderNavIcons = (icon, i) => {
    return <SideNavElement key={i} icon={icon} />
}

function SideNavigation() {
    return <div className="sidebar">
        {allIcons.map(renderNavIcons)}
    </div >
}

export default SideNavigation;