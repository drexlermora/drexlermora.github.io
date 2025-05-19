import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const CardComponent = ({ title, imageSrc }) => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const { width, height, left, top } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = ((y - height / 2) / height) * 10;
    const rotateY = ((x - width / 2) / width) * -10;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      className="d-flex justify-content-center mb-3"
      style={{ width: '100%' }}
    >
      <Card
        style={{
          width: '8.5rem',
          height: '6.5rem',
          backgroundColor: '#1e1e1e',
          border: '1px solid #2d2d2d',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          cursor: 'pointer',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Card.Body
          style={{
            padding: '0.6rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Card.Img
            src={imageSrc}
            alt={title}
            style={{
              maxHeight: '3.2rem',
              objectFit: 'contain',
              marginBottom: '0.4rem',
              filter: 'grayscale(10%)',
            }}
          />
          <Card.Title
            style={{
              fontSize: '0.75rem',
              fontWeight: 500,
              color: '#e0e0e0',
              margin: 0,
              textAlign: 'center',
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
