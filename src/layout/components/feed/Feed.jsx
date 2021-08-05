import "./feed.css";
import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../../../landing/components/Landing";

import Create from "../../../create/components/Create";
import Connections from "../../../connections/components/Connections";
import Messages from "../../../messages/components/Messages";
import Settings from "../../../settings/components/Settings";
import UserProfile from "../../../profile/components/userProfile/UserProfile";

import { AuthContext } from "../../../context/auth-context";
import RouteGuard from "../../../utils/RouteGuard";

function Feed() {

    const { authData: { isLoggedIn } } = useContext(AuthContext);

    return <Switch>
        <Route exact path="/"><LandingPage /></Route>

        <RouteGuard path="/create" component={Create} auth={isLoggedIn} />
        <RouteGuard path="/messages" component={Messages} auth={isLoggedIn} />
        <RouteGuard path="/connections" component={Connections} auth={isLoggedIn} />
        <RouteGuard path="/settings" component={Settings} auth={isLoggedIn} />
        <RouteGuard path="/user/:userId/profile" component={UserProfile} auth={isLoggedIn} />

    </Switch>
}

export default Feed;