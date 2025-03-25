import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import "./signup.css";

const Signup=()=>{
    const navigate = useNavigate();
    const [error, setError] = useState("");  // To show errors

    const [formData, setFormData] = useState(
        {
            username: "",
            email: "",
            password: "",
            confirmPassword: ""

        }   
    )

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        setError("");  // Clear previous errors

        
          await fetch("http://localhost:5000/auth/signup", {
            method: "POST",
            headers:{
              "Content-Type": "application/json"
            },
            credentials: 'include',

            body: JSON.stringify({
              username: formData.username,
              email: formData.email,
              password: formData.password
          }),


          }).then((res)=>{
            if (res.status === 200) {
              navigate("/dashboard")
            }
          }).catch((err)=>{
            console.log(err);
          })
            
        
    }

    return(
        <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Sign Up</h2>
        <form  onSubmit={handleSubmit} className="signup-form">
          {/* Name */}
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          
          {error && <p className="error-message">{error}</p>}

          {/* Sign Up Button */}
          <button type="submit" className="signup-button" >
            Sign Up
          </button>

          {/* Sign In Link */}
          <p className="signin-link">
            Already have an account? <a href="/">Log In</a>
          </p>
        </form>
      </div>
    </div>

    )
}

export default Signup; 