import React from 'react';
import './card.css';

const Card = ({ 
  children, 
  onClick,
  className = '',
  hoverable = true,
  ...props 
}) => {
  const cardClasses = [
    'card',
    hoverable ? '' : 'card--no-hover',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={cardClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;