import React, { useState } from "react";
import { Form, Button, Container, Col, Card } from "react-bootstrap";
import NavbarComponent from "../Navbar/NavbarComponent";
import Footer from "../Footer/Footer";

const ReservationForm = () => {
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expirationDate: "",
    cardName: "",
  });

  const handleContactInfoChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handlePaymentInfoChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Info:", contactInfo);
    console.log("Payment Info:", paymentInfo);
  };

  return (
    <div>
      <NavbarComponent />
      <div className="container mt-5">
        <h2>Información de contacto</h2>
        <Form onSubmit={handleSubmit}>
          <Container className="d-flex">
            <Col xs={6} md={6}>
              <Form.Group controlId="firstName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={contactInfo.firstName}
                  onChange={handleContactInfoChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="lastName">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={contactInfo.lastName}
                  onChange={handleContactInfoChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="phoneNumber">
                <Form.Label>Número de teléfono</Form.Label>
                <Form.Control
                  type="tel"
                  name="phoneNumber"
                  value={contactInfo.phoneNumber}
                  onChange={handleContactInfoChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={contactInfo.email}
                  onChange={handleContactInfoChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col mxs={6} md={6} className="m-4">
              <Card>
                <h1>Aquí va el precio total</h1>
                <h3>7 noches 700USD</h3>
                
              </Card>
            </Col>
          </Container>

          <h2 className="mt-5">Información de Pago</h2>
          <Form.Group controlId="cardNumber">
            <Form.Label>Número de tarjeta</Form.Label>
            <Form.Control
              type="text"
              name="cardNumber"
              value={paymentInfo.cardNumber}
              onChange={handlePaymentInfoChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="expirationDate">
            <Form.Label>Fecha de expiración</Form.Label>
            <Form.Control
              type="text"
              name="expirationDate"
              value={paymentInfo.expirationDate}
              onChange={handlePaymentInfoChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="cardName">
            <Form.Label>Nombre en la tarjeta</Form.Label>
            <Form.Control
              type="text"
              name="cardName"
              value={paymentInfo.cardName}
              onChange={handlePaymentInfoChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="m-3">
            Enviar
          </Button>
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default ReservationForm;
