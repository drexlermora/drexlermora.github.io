import React from 'react';
import { Card } from 'react-bootstrap';

const CardComponent = ({ title, imageSrc }) => {
  return (
    <Card
      className="skill-card text-center"
      style={{
        width: '9rem', // Adjust width
        height: '6rem', // Adjust height
        backgroundColor: 'transparent',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: 'none',
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.border = '1px solid #3b82f6';
        e.currentTarget.style.boxShadow = '0 0 15px rgba(59, 130, 246, 0.6)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <Card.Body>
        <Card.Img
          variant="top"
          src={imageSrc}
          alt="Card image"
          style={{
            maxHeight: '4rem', // Reduce image size
            objectFit: 'contain',
            marginBottom: '0.3rem',
            transition: 'transform 0.3s ease-in-out',
          }}
          className="hover-scale"
        />
        <Card.Title style={{ color: 'white', fontSize: '0.75rem' }}>{title}</Card.Title> {/* Adjust font size */}
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
