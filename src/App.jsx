import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageNotFound from "./pages/PageNotFound"
import LogInPage from "./pages/LogInPage"
import HomePage from "./pages/HomePage"
import Profile from "./pages/Profile"
import AuthContextProvider from "./context/AuthContextProvider"

function App() {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <Routes>
                    {/* homepage */}
                    <Route path="/" element={<HomePage></HomePage>}></Route>
                    <Route
                        path="/login"
                        element={<LogInPage></LogInPage>}
                    ></Route>
                    <Route
                        path="/Profile"
                        element={<Profile></Profile>}
                    ></Route>

                    <Route
                        path="*"
                        element={<PageNotFound></PageNotFound>}
                    ></Route>
                </Routes>
            </AuthContextProvider>
        </BrowserRouter>
    )
}

export default App
//Dynamic Routing
//Redirecting
//Private & Public Route
