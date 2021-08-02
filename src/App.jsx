import Header from "./layout/components/header/Header";
import MainContainer from "./layout/components/mainContainer/MainContainer";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthContextProvider from "./context/auth-context";
import ConnectionsContextProvider from "./context/connections-context";

function App() {
    return (
        <div className="app">
            <AuthContextProvider>
                <ConnectionsContextProvider>
                    <BrowserRouter>
                        <Header />
                        <MainContainer />
                    </BrowserRouter>
                </ConnectionsContextProvider>
            </AuthContextProvider>
        </div>
    )
}
export default App;