import React from "react";
import { Card } from "react-bootstrap";

const cardStyle = {
  backgroundColor: "#f8f9fa", // Light gray background
  border: "1px solid #ddd",
  boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)", // Soft shadow
  textAlign: "center",
  borderRadius: "10px",
};

const imageStyle = {
  height: "250px",
  objectFit: "cover",
};

const PlayerCard = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <Card style={cardStyle} className="m-3 p-2">
      <Card.Img variant="top" src={image} alt={name} style={imageStyle} />
      <Card.Body>
        <Card.Title style={{ color: "#007bff", fontWeight: "bold" }}>
          {name}
        </Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team} <br />
          <strong>Nationality:</strong> {nationality} <br />
          <strong>Jersey Number:</strong> {jerseyNumber} <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Default Props
PlayerCard.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  image: "https://via.placeholder.com/250x250.png?text=Player+Image",
};

export default PlayerCard;
