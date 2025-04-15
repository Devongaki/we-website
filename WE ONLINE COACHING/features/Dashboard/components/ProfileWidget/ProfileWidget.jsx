import { useState, useEffect } from 'react';
import './ProfileWidget.css';

const ProfileWidget = () => {
  const [userData, setUserData] = useState({
    name: '',
    plan: '',
    nextPayment: '',
    profileImage: ''
  });

  useEffect(() => {
    // In a real app, you would fetch this data from your API
    // For now, using mock data
    setUserData({
      name: 'William Ongaki',
      plan: 'Strength Building - 12 Month Plan',
      nextPayment: '2024-05-15',
      profileImage: 'https://randomuser.me/api/portraits/men/32.jpg'
    });
  }, []);

  // Format the next payment date
  const formattedPaymentDate = userData.nextPayment 
    ? new Date(userData.nextPayment).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      })
    : '';

  return (
    <div className="profile-widget">
      <div className="profile-widget__header">
        <div className="profile-widget__avatar">
          {userData.profileImage ? (
            <img src={userData.profileImage} alt={userData.name} />
          ) : (
            <div className="profile-widget__avatar-placeholder">
              {userData.name.charAt(0)}
            </div>
          )}
        </div>
        <div className="profile-widget__info">
          <h3>{userData.name}</h3>
          <p className="profile-widget__plan">{userData.plan}</p>
        </div>
      </div>
      
      <div className="profile-widget__stats">
        <div className="profile-widget__stat-item">
          <span className="profile-widget__stat-label">Next Payment</span>
          <span className="profile-widget__stat-value">{formattedPaymentDate}</span>
        </div>
        <div className="profile-widget__stat-item">
          <span className="profile-widget__stat-label">Coach</span>
          <span className="profile-widget__stat-value">Charlotte Reed</span>
        </div>
      </div>
      
      <div className="profile-widget__actions">
        <button className="profile-widget__action-button">
          Account Settings
        </button>
      </div>
    </div>
  );
};

export default ProfileWidget;
