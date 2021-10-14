import React, { useContext, useEffect, useState } from 'react';

// COMPONENTS
import UserContentFeed from "../../CONTENT_FEED_MODULE/userContentFeed/UserContentFeed";
// CONTEXT
import { AuthContext } from '../../context/auth-context';
// FETCH 
import { fetchUser } from '../../fetch/connections';


const MyProfile = () => {
    const { authData } = useContext(AuthContext);
    const [loggedUser, setLoggedUser] = useState(undefined);

    useEffect(() => {
        getUser();
    }, [authData])

    const getUser = async () => {
        const res = await fetchUser(authData.token, authData.userId);
        setLoggedUser(res.data.user);
    }

    return (
        <div>
            <UserContentFeed user={loggedUser} />
        </div>
    )
}

export default MyProfile
