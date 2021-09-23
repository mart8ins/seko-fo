import "./feed.css";
import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../../../landing/components/Landing";

import Content from "../../../content/Content";
import Create from "../../../create/Create";
import Connections from "../../../connections/components/Connections";
import Messages from "../../../messages/components/Messages";
import Settings from "../../../settings/components/Settings";
import UserProfile from "../../../profile/components/userProfile/UserProfile";
import CreateStory from "../../../create/components/options/story/CreateStory";
import Workout from "../../../create/components/options/Workout";
import Exchange from "../../../create/components/options/Exchange";
import Story from "../../../content/story/Story";

import { AuthContext } from "../../../context/auth-context";
import RouteGuard from "../../../utils/RouteGuard";

function Feed() {

    const { authData: { isLoggedIn } } = useContext(AuthContext);

    return <Switch>
        <RouteGuard path="/create/story" component={CreateStory} auth={isLoggedIn} />
        <RouteGuard path="/create/workout" component={Workout} auth={isLoggedIn} />
        <RouteGuard path="/create/exchange" component={Exchange} auth={isLoggedIn} />

        <RouteGuard path="/story/:storyId" component={Story} auth={isLoggedIn} />


        <RouteGuard path="/content" component={Content} auth={isLoggedIn} />
        <RouteGuard path="/create" component={Create} auth={isLoggedIn} />
        <RouteGuard path="/messages" component={Messages} auth={isLoggedIn} />
        <RouteGuard path="/connections" component={Connections} auth={isLoggedIn} />
        <RouteGuard path="/settings" component={Settings} auth={isLoggedIn} />
        <RouteGuard path="/user/:userId/profile" component={UserProfile} auth={isLoggedIn} />

        <Route exact path="/"><LandingPage /></Route>

    </Switch>
}

export default Feed;