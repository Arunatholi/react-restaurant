import React, { useState } from "react";
import { Alert, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Adding() {
  const [restaurantsName, setRestaurantsName] = useState("");
  const [restaurantsAddress, setRestaurantsAddress] = useState("");
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  

  function handleRestaurantsname(e) {
    setRestaurantsName(e.target.value);
  }
  function handleRestaurantsaddress(e) {
    setRestaurantsAddress(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      // event.preventDefault();
      event.stopPropagation();
    } else {
      const formData = {
        restaurantsName,
        restaurantsAddress,
      };
      setShow(true);
      toast.success("add restaurants successfully....",{
        theme: "colored"
      })
      console.log(formData);

      try {
        const result = axios.post("", formData);
      } catch (error) {
        console.log(error.message);
      }
    }

    setValidated(true);
  };

  // console.log(restaurantName);
  // console.log(restaurantAddress);
  return (
    <div>
      <Container>
        <Row>
          <Col>
          <ToastContainer position="top-center"/>
            <Form
              className="pt-3 "
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Form.Group className="mb-3">
                <Form.Label>Restaurant Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Restaurant Name"
                  onChange={(e) => handleRestaurantsname(e)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Restaurant Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Restaurant Address"
                  onChange={(e) => handleRestaurantsaddress(e)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Photograph</Form.Label>
                <Form.Control type="file" size="sm" required />
              </Form.Group>

              <button variant="primary" type="submit" >
                Add Restaurant
              </button>
              
            </Form>
            {show && (
              <Alert variant="success">add restaurants successfully....</Alert>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Adding;
