import React from "react";
import "./css/profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src="./pics/avatar" alt="Profile" className="profile-pic" />
        <div className="user-info">
          <h2 className="profile-name">Name: Ruchi</h2>
          <h2 className="profile-email">Email: example.@gmail.com</h2>
          <h2 className="age">Age: 19</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
