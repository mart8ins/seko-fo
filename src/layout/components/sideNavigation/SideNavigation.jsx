import "./sideNavigation.css";
import SideNavElement from "./SideNavElement";
import allIcons from "./icons/icons";
import { v4 as uuidv4 } from 'uuid';

const renderNavIcons = (icon) => {
    return <SideNavElement key={uuidv4()} icon={icon} />
}

function SideNavigation() {
    return <div className="sidebar">
        {allIcons.map(renderNavIcons)}
    </div >
}

export default SideNavigation;