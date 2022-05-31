import "./feed.css";
import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../../LANDING_MODULE/LandingPage";

import PublicContentFeed from "../../CONTENT_FEED_MODULE/publicContentFeed/PublicContentFeed";
import Create from "../../CREATE_MODULE/Create";
import Connections from "../../connections/Connections";
import Messages from "../../messages/Messages";
import Settings from "../../settings/Settings";
import UserProfile from "../../profile/UserProfile/UserProfile";
import MyProfile from "../../profile/MyProfile/MyProfile";
import CreateStory from "../../STORY_MODULE/create_story/CreateStory";
import CreateWorkout from "../../WORKOUT_MODULE/create_workout/CreateWorkout";
import StoryContent from "../../STORY_MODULE/show_story/components/storyContent/StoryContent";
import WorkoutDay from "../../WORKOUT_MODULE/show_workout/components/workoutDay/WorkoutDay";
import WorkoutById from "../../WORKOUT_MODULE/show_workout/components/workoutData/WorkoutById";
import LearnWorkouts from "../../WORKOUT_MODULE/learn_workout/LearnWorkouts";

import { AuthContext } from "../../context/auth-context";
import RouteGuard from "../../utils/RouteGuard";

function Feed() {
    const {
        authData: { isLoggedIn },
    } = useContext(AuthContext);

    return (
        <Switch>
            <RouteGuard path="/create/story" component={CreateStory} auth={isLoggedIn} />
            <RouteGuard path="/create/workout" component={CreateWorkout} auth={isLoggedIn} />

            <RouteGuard path="/story/:storyId" component={StoryContent} auth={isLoggedIn} />
            <RouteGuard path="/workoutday/:workoutDayId" component={WorkoutDay} auth={isLoggedIn} />
            <RouteGuard path="/about/workout/:wID" component={WorkoutById} auth={isLoggedIn} />
            <RouteGuard path="/about/workouts" component={LearnWorkouts} auth={isLoggedIn} />

            <RouteGuard path="/contentFeed" component={PublicContentFeed} auth={isLoggedIn} />
            <RouteGuard path="/create" component={Create} auth={isLoggedIn} />
            <RouteGuard path="/messages" component={Messages} auth={isLoggedIn} />
            <RouteGuard path="/connections" component={Connections} auth={isLoggedIn} />
            <RouteGuard path="/settings" component={Settings} auth={isLoggedIn} />

            <RouteGuard path="/user/:userId/profile" component={UserProfile} auth={isLoggedIn} />
            <RouteGuard path={`/userContentFeed`} component={MyProfile} auth={isLoggedIn} />

            <Route exact path="/">
                <LandingPage />
            </Route>
        </Switch>
    );
}

export default Feed;
