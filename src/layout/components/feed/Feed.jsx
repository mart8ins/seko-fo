import "./feed.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../../../landing/components/Landing";

import Create from "../../../create/components/Create";
import Friends from "../../../connections/components/Connections";
import Messages from "../../../messages/components/Messages";
import Settings from "../../../settings/components/Settings";
import UserProfile from "../../../profile/components/userProfile/UserProfile";

function Feed() {

    return <Switch>
        <Route exact path="/">
            <LandingPage />
        </Route>
        <Route path="/create">
            <Create />
        </Route>
        <Route path="/messages">
            <Messages />
        </Route>
        <Route path="/connections">
            <Friends />
        </Route>
        <Route path="/settings">
            <Settings />
        </Route>
        <Route path="/user/:userId/profile">
            <UserProfile />
        </Route>
    </Switch>
}

export default Feed;