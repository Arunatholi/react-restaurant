import React, { useEffect, useState } from "react";
import { Container, Col, Row, Card, Button, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Details() {
  // const [restaurants, setRestaurant] = useState([]);
  const { id } = useParams();

  const restaurants = useSelector((state)=>state.data.restaurants)

  const currentRes = restaurants.find((restaurants) => restaurants.id == id);
  console.log(currentRes);

  return (
    <Container>
        {currentRes && <Row>
        <Col>
          <Card className="mt-3" md={8}>
            <Card.Img
              variant="top"
              src={currentRes.photograph} />
            
            <Card.Body>
              <Card.Title>{currentRes.name}</Card.Title>
              <Card.Text>
                {currentRes.address}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mt-3">
            <ListGroup variant="flush">
              <ListGroup.Item>email</ListGroup.Item>
              <ListGroup.Item>my team</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>}
      
    </Container>
  );
}

export default Details;
