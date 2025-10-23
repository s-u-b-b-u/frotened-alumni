import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
         <h3>Alumni Student Portal</h3> 
        </div>
        <nav className="nav">
           <div className="actions-grid">
            <button className="action-btn">📝 Update Profile</button>
          </div>
           <div className="actions-grid">
            <button className="action-btn">🔍 Find Alumni</button>
          </div>
           <div className="actions-grid">
            <button className="action-btn">💼 Browse Jobs</button>
          </div>
           <div className="actions-grid">
            <button className="action-btn">🎓 Find Mentor</button>
          </div>
            
            
            
          <button className="notification-btn">
            🔔 <span className="badge">3</span>
          </button>
          <div className="user-profile">
            <div className="avatar">S</div>
            <span>Student</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;