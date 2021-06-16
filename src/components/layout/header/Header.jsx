import "./header.css";
import Avatar from "../../user/avatar/Avatar";
import { Link } from "react-router-dom";
import AuthNavigation from "../../navigation/AuthNavigation";


function Header() {
    return <div className="header-container">
        <div className="brand-container"><Link to="/">Seko</Link></div>
        <AuthNavigation />
    </div>
}

export default Header;