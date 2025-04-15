import React from 'react';
import './ProgramCard.css';

const ProgramCard = ({ title, progress, nextWorkout }) => {
  return (
    <div className="program-card">
      <div className="program-card__header">
        <h3 className="program-card__title">{title}</h3>
        <div className="program-card__progress-container">
          <div className="program-card__progress-bar">
            <div 
              className="program-card__progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="program-card__progress-text">{progress}% Complete</span>
        </div>
      </div>
      
      <div className="program-card__next-workout">
        <div className="program-card__next-workout-header">
          <h4>Next Workout</h4>
          <span className="program-card__next-workout-day">{nextWorkout.day}</span>
        </div>
        
        <div className="program-card__next-workout-details">
          <h3 className="program-card__next-workout-name">{nextWorkout.name}</h3>
          
          <div className="program-card__next-workout-stats">
            <div className="program-card__next-workout-stat">
              <span className="program-card__next-workout-stat-icon">💪</span>
              <span className="program-card__next-workout-stat-value">{nextWorkout.exercises} Exercises</span>
            </div>
            <div className="program-card__next-workout-stat">
              <span className="program-card__next-workout-stat-icon">⏱️</span>
              <span className="program-card__next-workout-stat-value">{nextWorkout.duration} minutes</span>
            </div>
          </div>
        </div>
        
        <div className="program-card__actions">
          <button className="program-card__action-button program-card__action-button--primary">
            Start Workout
          </button>
          <button className="program-card__action-button program-card__action-button--secondary">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
