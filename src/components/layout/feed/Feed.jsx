import "./feed.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../../landing/Landing";

import Create from "../../create/Create";
import Friends from "../../connections/Connections";
import Messages from "../../messages/Messages";
import Settings from "../../settings/Settings";

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
        <Route path="/friends">
            <Friends />
        </Route>
        <Route path="/settings">
            <Settings />
        </Route>
    </Switch>
}

export default Feed;