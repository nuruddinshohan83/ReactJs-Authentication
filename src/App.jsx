import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageNotFound from "./pages/PageNotFound"
import LogInPage from "./pages/LogInPage"
import HomePage from "./pages/HomePage"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* homepage */}
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/login" element={<LogInPage></LogInPage>}></Route>
                <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
//Dynamic Routing
//Redirecting
//Private & Public Route
