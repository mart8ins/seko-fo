import Header from "./layout/header/Header";
import MainContainer from "./layout/mainContainer/MainContainer";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthContextProvider from "./context/auth-context";
import ConnectionsContextProvider from "./context/connections-context";
import MessageContextProvider from "./context/message-context";
import StoryContextProvider from "./context/story-context";
import WorkoutContextProvieder from "./context/workout-context";

function App() {
    return (
        <div className="app">
            <AuthContextProvider>
                <ConnectionsContextProvider>
                    <MessageContextProvider>
                        <StoryContextProvider>
                            <WorkoutContextProvieder>
                                <BrowserRouter>
                                    <Header />
                                    <MainContainer />
                                </BrowserRouter>
                            </WorkoutContextProvieder>
                        </StoryContextProvider>
                    </MessageContextProvider>
                </ConnectionsContextProvider>
            </AuthContextProvider>
        </div>
    )
}
export default App;