import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfileWidget from './components/ProfileWidget/ProfileWidget';
import ProgramCard from './components/ProgramCard/ProgramCard';
import ProgressChart from './components/ProgressChart/ProgressChart';
import './Dashboard.css';

const Dashboard = () => {
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate fetching user data from an API
    const fetchUserData = async () => {
      // In a real app, you would fetch from your API
      // For now, we'll simulate a delay and use mock data
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data - in a real app this would come from your backend
      setUserName('William');
      setIsLoading(false);
    };
    
    fetchUserData();
  }, []);
  
  if (isLoading) {
    return (
      <div className="dashboard__loading">
        <div className="spinner"></div>
        <p>Loading your dashboard...</p>
      </div>
    );
  }
  
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <div className="dashboard__header">
          <h1>Welcome back, {userName}</h1>
          <p className="dashboard__date">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        
        <div className="dashboard__content">
          <div className="dashboard__main">
            <section className="dashboard__section">
              <div className="dashboard__section-header">
                <h2>Your Program</h2>
                <Link to="/program" className="dashboard__link">View all</Link>
              </div>
              
              <ProgramCard 
                title="Strength Building Program" 
                progress={30}
                nextWorkout={{
                  day: "Today",
                  name: "Upper Body Strength",
                  exercises: 6,
                  duration: 45
                }}
              />
            </section>
            
            <section className="dashboard__section">
              <div className="dashboard__section-header">
                <h2>Your Progress</h2>
                <div className="dashboard__period-selector">
                  <button className="dashboard__period-button active">Week</button>
                  <button className="dashboard__period-button">Month</button>
                  <button className="dashboard__period-button">Year</button>
                </div>
              </div>
              
              <ProgressChart />
            </section>
            
            <section className="dashboard__section">
              <div className="dashboard__section-header">
                <h2>Upcoming Sessions</h2>
              </div>
              
              <div className="dashboard__sessions">
                <div className="dashboard__session-card">
                  <div className="dashboard__session-date">
                    <span className="day">Wed</span>
                    <span className="number">12</span>
                  </div>
                  <div className="dashboard__session-info">
                    <h3>Check-in Call with Coach</h3>
                    <p>10:00 AM - 10:30 AM</p>
                  </div>
                  <button className="dashboard__session-button">Join</button>
                </div>
                
                <div className="dashboard__session-card">
                  <div className="dashboard__session-date">
                    <span className="day">Fri</span>
                    <span className="number">14</span>
                  </div>
                  <div className="dashboard__session-info">
                    <h3>Form Check Review</h3>
                    <p>6:00 PM - 6:30 PM</p>
                  </div>
                  <button className="dashboard__session-button">Join</button>
                </div>
              </div>
            </section>
          </div>
          
          <div className="dashboard__sidebar">
            <ProfileWidget />
            
            <div className="dashboard__quick-actions">
              <h3>Quick Actions</h3>
              <div className="dashboard__quick-action-buttons">
                <button className="dashboard__quick-action-button">
                  <span className="icon">📊</span>
                  <span>Log Workout</span>
                </button>
                <button className="dashboard__quick-action-button">
                  <span className="icon">📏</span>
                  <span>Update Measurements</span>
                </button>
                <button className="dashboard__quick-action-button">
                  <span className="icon">📸</span>
                  <span>Upload Progress Pic</span>
                </button>
                <button className="dashboard__quick-action-button">
                  <span className="icon">📝</span>
                  <span>Contact Coach</span>
                </button>
              </div>
            </div>
            
            <div className="dashboard__tips">
              <h3>Coaching Tip</h3>
              <div className="dashboard__tip-card">
                <p>"Focus on progressive overload - gradually increasing the weight, frequency, or reps over time."</p>
                <p className="dashboard__tip-author">- Your Coach</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
