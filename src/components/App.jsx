import Header from "./layout/header/Header";
import Feed from "./layout/feed/Feed";
import SideNavigation from "./layout/sideNavigation/SideNavigation";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css"

function App() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                </div>
                <div className="navigation_feed">
                    <SideNavigation />
                    <Route exact path="/" component={Feed}></Route>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;