import "./header.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthNavigation from "../../../auth/components/AuthNavigation";
import { AuthContext } from "../../../context/auth-context";


function Header() {
    const { authData, setAuthData } = useContext(AuthContext);

    // to hide auth modal when clicking brand name in header
    const handleClick = () => {
        setAuthData({
            ...authData,
            showAuthModal: false
        })
    }

    return <div className="header-container">
        <div onClick={handleClick} className="brand-container"><Link to="/">Seko</Link></div>
        <AuthNavigation />
    </div>
}

export default Header;