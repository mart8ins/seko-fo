import Header from "./layout/header/Header";
import Feed from "./layout/feed/Feed";
import SideNavigation from "./layout/sideNavigation/SideNavigation";
import { BrowserRouter } from "react-router-dom";
import "./App.css"

// depending on auth status - side navigations shows only for logged users
// not logged users sees only main sites feed
// TODO - need to implement context for this
let isLogged = false;

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <div>
                    <Header />
                </div>
                <div className="navigation_feed">
                    {isLogged && <SideNavigation />}

                    <div className={isLogged ? "feed-isLogged" : "feed-notLogged"}>
                        <Feed />
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;