import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import "./userProfile.css";
// COMPONENTS
import AboutUser from "./components/about/AboutUser";
// FETCH 
import { fetchUser } from "../../../fetch/users/connections";
// CONTEXT
import { AuthContext } from "../../../context/auth-context";



function UserProfile() {
    // explored users id
    let { userId } = useParams();
    // logged users data 
    const { authData } = useContext(AuthContext);
    // explored user data
    const [exploredUser, setExploredUser] = useState({});

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        const res = await fetchUser(authData.token, userId);
        setExploredUser(res.data.user)
    }

    return <div>
        <AboutUser user={exploredUser} getUser={getUser} />

        <div className="user__profile__content">
            <div>Blogs</div>
            <div>Progress</div>
            <div>Laika josla</div>
        </div>


    </div>

}

export default UserProfile;