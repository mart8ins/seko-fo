import "./header.css";
import Avatar from "../../user/avatar/Avatar";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthNavigation from "../../navigation/AuthNavigation";


function Header() {
    // state for showing modal for auth, its given for AuthNavigation component
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(false);
    }

    return <div className="header-container">
        <div onClick={handleClick} className="brand-container"><Link to="/">Seko</Link></div>
        <AuthNavigation showModal={showModal} setShowModal={setShowModal} />
    </div>
}

export default Header;