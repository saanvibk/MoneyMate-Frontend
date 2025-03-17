import React from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Login from "./Authentication/Login"
import Signup from "./Authentication/Signup"
import Dashboard from "./pages/Dashboard"
import Expenses from "./pages/Expenses"


function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/expenses" element={<Expenses/>}></Route>

            </Routes>
        </Router>
    )
}

export default App