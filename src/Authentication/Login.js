import {useState} from "react";
import{useNavigate} from "react-router-dom"
import "./Login.css"

const Login=()=>
{
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

return(
    <div className="login-container">
         <div className="login-box">
            <h2 className="login-title">Login to MoneyMate</h2>
            <form  className="login-form">
            <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            </div>
            <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            </div>
            <button type="submit" className="login-button"> Login</button>
            </form>
            <p className="signup-text">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
    )
}

export default Login;