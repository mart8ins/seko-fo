import "./feed.css";
import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../../landing/LandingPage";

import ContentFeed from "../../CONTENT_FEED_MODULE/ContentFeed";
import Create from "../../CREATE_MODULE/Create";
import Connections from "../../connections/Connections";
import Messages from "../../messages/Messages";
import Settings from "../../settings/Settings";
import UserProfile from "../../profile/UserProfile/UserProfile";
import MyProfile from "../../profile/MyProfile/MyProfile";
import CreateStory from "../../STORY_MODULE/create_story/CreateStory";
import CreateWorkout from "../../WORKOUT_MODULE/create_workout/CreateWorkout";
import Story from "../../STORY_MODULE/show_story/components/UserStory"

import { AuthContext } from "../../context/auth-context";
import RouteGuard from "../../utils/RouteGuard";

function Feed() {

    const { authData: { isLoggedIn, userId } } = useContext(AuthContext);

    return <Switch>
        <RouteGuard path="/create/story" component={CreateStory} auth={isLoggedIn} />
        <RouteGuard path="/create/workout" component={CreateWorkout} auth={isLoggedIn} />

        <RouteGuard path="/story/:storyId" component={Story} auth={isLoggedIn} />


        <RouteGuard path="/contentFeed" component={ContentFeed} auth={isLoggedIn} />
        <RouteGuard path="/create" component={Create} auth={isLoggedIn} />
        <RouteGuard path="/messages" component={Messages} auth={isLoggedIn} />
        <RouteGuard path="/connections" component={Connections} auth={isLoggedIn} />
        <RouteGuard path="/settings" component={Settings} auth={isLoggedIn} />

        <RouteGuard path="/user/:userId/profile" component={UserProfile} auth={isLoggedIn} />
        <RouteGuard path={`/userContentFeed`} component={MyProfile} auth={isLoggedIn} />

        <Route exact path="/"><LandingPage /></Route>

    </Switch>
}

export default Feed;