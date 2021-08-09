import Header from "./layout/components/header/Header";
import MainContainer from "./layout/components/mainContainer/MainContainer";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthContextProvider from "./context/auth-context";
import ConnectionsContextProvider from "./context/connections-context";
import MessageContextProvider from "./context/message-context";

function App() {
    return (
        <div className="app">
            <AuthContextProvider>
                <ConnectionsContextProvider>
                    <MessageContextProvider>
                        <BrowserRouter>
                            <Header />
                            <MainContainer />
                        </BrowserRouter>
                    </MessageContextProvider>
                </ConnectionsContextProvider>
            </AuthContextProvider>
        </div>
    )
}
export default App;