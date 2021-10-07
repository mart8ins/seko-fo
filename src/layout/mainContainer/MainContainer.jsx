import React, { useContext } from "react";
import SideNavigation from "../sideNavigation/SideNavigation";
import Feed from "../feed/Feed";
import { AuthContext } from "../../context/auth-context";
import { MessageContext } from "../../context/message-context";
import MessageModal from "../../utils/modals/messageModal/MessageModal";
import "./mainContainer.css";


// depending on auth status - side navigations shows only for logged users
// not logged users sees only main sites feed

const MainContainer = () => {
    const { authData: { isLoggedIn } } = useContext(AuthContext);
    const { messageData } = useContext(MessageContext);


    return (<div>
        {
            messageData.show ?
                <MessageModal
                    userId={messageData.userId}
                    firstName={messageData.firstName}
                    lastName={messageData.lastName}
                />
                :
                null
        }

        <div className="navigation_feed">
            {isLoggedIn && <SideNavigation />}
            <div className={isLoggedIn ? "feed-isLogged" : "feed-notLogged"}>
                <Feed />
            </div>
        </div>
    </div>
    )
}

export default MainContainer;