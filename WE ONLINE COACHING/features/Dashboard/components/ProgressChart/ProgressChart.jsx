import React, { useState, useEffect } from 'react';
import './ProgressChart.css';

const ProgressChart = () => {
  // Mock data for chart
  const [chartData, setChartData] = useState([]);
  
  useEffect(() => {
    // In a real app, this would be fetched from an API
    // For now, generate some mock data
    const mockData = [
      { day: 'Mon', workouts: 1, weight: 180 },
      { day: 'Tue', workouts: 0, weight: 179.5 },
      { day: 'Wed', workouts: 1, weight: 179 },
      { day: 'Thu', workouts: 1, weight: 178.5 },
      { day: 'Fri', workouts: 0, weight: 178.5 },
      { day: 'Sat', workouts: 1, weight: 178 },
      { day: 'Sun', workouts: 0, weight: 177.5 },
    ];
    
    setChartData(mockData);
  }, []);
  
  // Find the max value for scaling
  const maxWeight = Math.max(...chartData.map(item => item.weight)) + 1;
  const minWeight = Math.min(...chartData.map(item => item.weight)) - 1;
  const weightRange = maxWeight - minWeight;
  
  return (
    <div className="progress-chart">
      <div className="progress-chart__header">
        <div className="progress-chart__metric">
          <span className="progress-chart__metric-value">177.5 lbs</span>
          <span className="progress-chart__metric-label">Current Weight</span>
          <span className="progress-chart__metric-change progress-chart__metric-change--positive">
            -2.5 lbs this week
          </span>
        </div>
        <div className="progress-chart__metric">
          <span className="progress-chart__metric-value">4</span>
          <span className="progress-chart__metric-label">Workouts</span>
          <span className="progress-chart__metric-change progress-chart__metric-change--positive">
            +1 from last week
          </span>
        </div>
      </div>
      
      <div className="progress-chart__graph">
        <div className="progress-chart__y-axis">
          <span>{maxWeight.toFixed(1)}</span>
          <span>{(minWeight + weightRange/2).toFixed(1)}</span>
          <span>{minWeight.toFixed(1)}</span>
        </div>
        
        <div className="progress-chart__bars">
          {chartData.map((item, index) => {
            // Calculate height percentage based on weight
            const heightPercentage = ((item.weight - minWeight) / weightRange) * 100;
            
            return (
              <div className="progress-chart__bar-container" key={index}>
                <div 
                  className={`progress-chart__bar ${item.workouts > 0 ? 'progress-chart__bar--workout' : ''}`}
                  style={{ height: `${heightPercentage}%` }}
                >
                  <span className="progress-chart__tooltip">
                    {item.weight} lbs
                    {item.workouts > 0 && <br />}
                    {item.workouts > 0 && `${item.workouts} workout`}
                  </span>
                </div>
                <span className="progress-chart__x-label">{item.day}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;
