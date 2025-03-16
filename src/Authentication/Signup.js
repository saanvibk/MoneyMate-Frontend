import React, { useState } from "react";
import "./signup.css";

const Signup=()=>{
    const [formData, setFormData] = useState(
        {
            username: "",
            email: "",
            password: "",
            confimPassword: ""

        }   
    )

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return(
        <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Sign Up</h2>
        <form  className="signup-form">
          {/* Name */}
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.usernamename}
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

          {/* Error Message */}
          {/* {error && <p className="error-message">{error}</p>} */}

          {/* Sign Up Button */}
          <button type="submit" className="signup-button">
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