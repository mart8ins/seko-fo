import "./avatar.css"
import avatar from "./avatar.png";
import { Link } from "react-router-dom";

function Avatar() {
    return <div className="avatar-container">
        <Link to="/profile/martins"><img className="avatar" src={avatar} alt="user avatar" /></Link>
    </div>
}

export default Avatar;