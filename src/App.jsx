import Header from "./layout/components/header/Header";
import MainContainer from "./layout/components/mainContainer/MainContainer";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthContextProvider from "./context/auth-context";

function App() {
    return (
        <div className="app">
            <AuthContextProvider>
                <BrowserRouter>
                    <Header />
                    <MainContainer />
                </BrowserRouter>
            </AuthContextProvider>
        </div>
    )
}
export default App;