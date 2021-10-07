import Header from "./layout/header/Header";
import MainContainer from "./layout/mainContainer/MainContainer";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthContextProvider from "./context/auth-context";
import ConnectionsContextProvider from "./context/connections-context";
import MessageContextProvider from "./context/message-context";
import StoryContextProvider from "./context/story-context";

function App() {
    return (
        <div className="app">
            <AuthContextProvider>
                <ConnectionsContextProvider>
                    <MessageContextProvider>
                        <StoryContextProvider>
                            <BrowserRouter>
                                <Header />
                                <MainContainer />
                            </BrowserRouter>
                        </StoryContextProvider>
                    </MessageContextProvider>
                </ConnectionsContextProvider>
            </AuthContextProvider>
        </div>
    )
}
export default App;