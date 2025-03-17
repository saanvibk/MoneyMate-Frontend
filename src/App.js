import React from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Login from "./Authentication/Login"
import Signup from "./Authentication/Signup"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import Learn from "./pages/Learn"


function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/learn" element={<Learn/>}/>

            </Routes>
        </Router>
    )
}

export default App