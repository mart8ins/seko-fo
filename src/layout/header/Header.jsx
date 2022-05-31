import "./header.css";
import AuthNavigation from "../../auth/AuthNavigation";

function Header() {
    return (
        <div className="header-container">
            <AuthNavigation />
        </div>
    );
}

export default Header;
