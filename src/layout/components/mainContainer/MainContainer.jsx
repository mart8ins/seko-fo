import React, { useContext } from "react";
import SideNavigation from "../sideNavigation/SideNavigation";
import Feed from "../feed/Feed";
import { AuthContext } from "../../../context/auth-context";
import "./mainContainer.css";
// depending on auth status - side navigations shows only for logged users
// not logged users sees only main sites feed

const MainContainer = () => {
    const { authData: { isLoggedIn } } = useContext(AuthContext);

    return (
        <div className="navigation_feed">
            {isLoggedIn && <SideNavigation />}
            <div className={isLoggedIn ? "feed-isLogged" : "feed-notLogged"}>
                <Feed />
            </div>
        </div>
    )
}

export default MainContainer;