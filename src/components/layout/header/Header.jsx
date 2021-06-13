import "./header.css";
import Avatar from "../../user/avatar/Avatar";
import AuthNavigation from "../../auth/AuthNavigation";


function Header() {
    return <div className="header-container">
        <div className="brand-container">Seko</div>
        {/* <Avatar /> */}
        <AuthNavigation />
    </div>
}

export default Header;