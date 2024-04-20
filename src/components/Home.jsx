import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
          
  const restaurants = useSelector((state)=>state.data.restaurants);
  
  return (
    <Container>
      <Row >

        {restaurants && restaurants.map((restaurants,index)=>(
          <Col md={4} className="mt-3" key={index}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={restaurants.photograph} />
            <Card.Body>
              <Card.Title>{restaurants.name}</Card.Title>
              <Card.Text>
                {restaurants.address}
              </Card.Text>
              <Button as={Link} to={`details/${restaurants.id}`} variant="primary">Submit</Button>
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
