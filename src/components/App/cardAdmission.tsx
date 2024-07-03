import React from 'react';
import './cards.css'

interface CardProps {
  name: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ name, imageUrl }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <img src={imageUrl} alt={name} className="card-image" />
      </div>
    </div>
  );
}

export default Card;
