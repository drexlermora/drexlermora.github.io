import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardComponent = ({ title, text, imageSrc, link }) => {
  return (
    <Card 
      style={{
        height: '8rem',
        backgroundColor: 'transparent',  // Make the card transparent
        border: '1px solid rgba(0, 0, 0, 0.1)', // Optional: Slight border to differentiate the card
        boxShadow: 'none', // Optional: Remove the default shadow to keep it minimalistic
      }}
    >
      <Card.Body className="text-center">
        <Card.Title style={{ color: 'white' }}>{title}</Card.Title> {/* White color for the title */}
        <Card.Img variant="top" src={imageSrc} alt="Card image" style={{ maxHeight: '10rem', objectFit: 'contain' }} />
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
