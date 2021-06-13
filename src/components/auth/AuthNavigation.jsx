import { NavLink } from "react-router-dom";
import "./authNavigation.css";


function AuthNavigation() {
    return <div className="auth-container">
        <div className="not-logged-in">
            <NavLink activeStyle={{ color: "rgb(204, 245, 110)" }} to="/login">Login</NavLink>
            <NavLink activeStyle={{ color: "rgb(204, 245, 110)" }} to="/register">Register</NavLink>
        </div>
        <div className="logged-in">
            <NavLink activeStyle={{ color: "rgb(204, 245, 110)" }} to="/profile">Profile</NavLink>
            <NavLink activeStyle={{ color: "rgb(204, 245, 110)" }} to="/settings">Settings</NavLink>
            <NavLink exact activeStyle={{ color: "rgb(204, 245, 110)" }} to="/">Logout</NavLink>
        </div>

    </div>
}

export default AuthNavigation;