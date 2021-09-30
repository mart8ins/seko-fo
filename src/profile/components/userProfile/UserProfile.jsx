import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import "./userProfile.css";
// COMPONENTS
import AboutUser from "./components/AboutUser/AboutUser";
import UserContentFeed from "../UserContentFeed/UserContentFeed";
// FETCH 
import { fetchUser } from "../../../fetch/users/connections";
// CONTEXT
import { AuthContext } from "../../../context/auth-context";



function UserProfile() {
    // explored users id
    let { userId } = useParams();

    const { authData } = useContext(AuthContext);

    const [exploredUser, setExploredUser] = useState(undefined);

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        const res = await fetchUser(authData.token, userId);
        setExploredUser(res.data.user);
    }

    return <div>
        {exploredUser && <AboutUser user={exploredUser} getUser={getUser} />}
        <UserContentFeed user={exploredUser} />
    </div>

}

export default UserProfile;