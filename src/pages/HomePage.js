import React from 'react';
import StatCard from '../components/StatCard';
import './HomePage.css';

const HomePage = () => {
  // Sample data
  const quickStats = [
    { title: 'Upcoming Events', value: '5', icon: '📅', color: '#1976d2' },
    { title: 'New Alumni', value: '23', icon: '👥', color: '#2e7d32' },
    { title: 'Job Postings', value: '12', icon: '💼', color: '#ed6c02' },
    { title: 'Mentors Available', value: '8', icon: '🎓', color: '#9c27b0' }
  ];

  const upcomingEvents = [
    { id: 1, title: 'Annual Alumni Meet', date: 'Jan 15, 2024', type: 'Networking' },
    { id: 2, title: 'Career Guidance Workshop', date: 'Jan 20, 2024', type: 'Workshop' },
    { id: 3, title: 'Tech Talk: AI in Industry', date: 'Jan 25, 2024', type: 'Seminar' }
  ];

  return (
    <div className="home-page">
      <div className="container">
        {/* Welcome Section */}
        <section className="welcome-section">
          <h1>Welcome back, Student! 👋</h1>
          <p>Here's what's happening in your alumni network today.</p>
        </section>

        {/* Quick Stats */}
        <section className="stats-section">
          <h2>Quick Overview</h2>
          <div className="stats-grid">
            {quickStats.map((stat, index) => (
              <StatCard
                key={index}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                color={stat.color}
              />
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="events-section">
          <div className="section-header">
            <h2>Upcoming Events</h2>
            <button className="view-all-btn">View All</button>
          </div>
          <div className="events-list">
            {upcomingEvents.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-info">
                  <h3>{event.title}</h3>
                  <p className="event-date">{event.date}</p>
                  <span className="event-type">{event.type}</span>
                </div>
                <button className="register-btn">Register</button>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="actions-section">
          <h2>Quick Actions</h2>
         
        </section>
      </div>
    </div>
  );
};

export default HomePage;