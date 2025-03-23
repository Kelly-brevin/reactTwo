import React from "react";
import PlayerCard from "./PlayerCard"; // Import the PlayerCard component
import playersData from "./playersData"; // Import the players' data
import { Container, Row, Col } from "react-bootstrap";

const PlayersList = () => {
  return (
    <Container>
      <h2 className="text-center mt-4">Football Players</h2>
      <Row>
        {playersData.map((player, index) => (
          <Col key={index} md={4} sm={6} xs={12}>
            <PlayerCard {...player} /> {/* Spread player data as props */}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
