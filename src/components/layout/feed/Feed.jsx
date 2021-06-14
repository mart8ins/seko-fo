import "./feed.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../../landing/Landing";
import Content from "../../content/Content";
import Friends from "../../friends/Friends";
import Messages from "../../messages/Messages";
import News from "../../news/News";
import Relax from "../../relax/Relax";
import Settings from "../../settings/Settings";
import Profile from "../../user/profile/Profile";

function Feed() {

    return <Switch>
        <Route exact path="/">
            <LandingPage />
        </Route>
        <Route path="/friends">
            <Friends />
        </Route>
        <Route path="/messages">
            <Messages />
        </Route>
        <Route path="/content">
            <Content />
        </Route>
        <Route path="/news">
            <News />
        </Route>
        <Route path="/relax">
            <Relax />
        </Route>
        <Route path="/profile">
            <Profile />
        </Route>
        <Route path="/settings">
            <Settings />
        </Route>
    </Switch>
}

export default Feed;