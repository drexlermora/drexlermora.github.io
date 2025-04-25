import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const CardComponent = ({ title, imageSrc }) => {
  // State to store the mouse position for tilt effect
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  // Function to handle mouse movement for the tilt effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const card = e.currentTarget;
    const { offsetWidth: width, offsetHeight: height } = card;

    // Calculate the tilt angles based on mouse position
    const rotateX = (clientY - height / 2) / (height / 2) * 10; // Range: -10 to 10
    const rotateY = (clientX - width / 2) / (width / 2) * -10; // Range: -10 to 10

    setTilt({ rotateX, rotateY });
  };

  // Function to reset tilt effect when mouse leaves the card
  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
  className="d-flex justify-content-center mb-3"
  style={{
    width: '100%',
  }}
>
  <Card
    className="skill-card text-center"
    style={{
      width: '9rem',
      height: '6rem',
      backgroundColor: 'transparent',
      border: '1px solid #3b82f6',
      boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)',
      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border 0.3s ease-in-out',
      cursor: 'pointer',
      transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
    }}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
  >
    <Card.Body style={{ padding: '0.5rem' }}>
      <Card.Img
        variant="top"
        src={imageSrc}
        alt="Card image"
        style={{
          maxHeight: '4rem',
          objectFit: 'contain',
          marginBottom: '0.3rem',
          transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
        }}
        className="hover-scale"
      />
      <Card.Title
        style={{
          color: 'white',
          fontSize: '0.75rem',
          transition: 'color 0.3s ease-in-out',
        }}
      >
        {title}
      </Card.Title>
    </Card.Body>
  </Card>
</div>

  );
};

export default CardComponent;
