import React from 'react';
import { Card, Button } from 'react-bootstrap'; 

const CardComponent = ({ title, text, imageSrc, link }) => {
  return (
    <Card style={{ height: '21rem' }}>
      <Card.Body>
        <Card.Title>{title} <Card.Img variant="top" src={imageSrc} alt="Card image" /></Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
