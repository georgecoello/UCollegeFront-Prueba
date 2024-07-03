import React from 'react';
import './ImageCard.css';

interface ImageCardProps {
  imageUrl: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl }) => {
  return (
    <div className="image-card">
      <img src={imageUrl} className="image-card-image" />
    </div>
  );
}

export default ImageCard;
