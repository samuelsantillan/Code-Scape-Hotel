import React, { useState } from "react";
import { Form, Button, Container, Col, Card, Row } from "react-bootstrap";
import NavbarComponent from "../Navbar/NavbarComponent";
import Footer from "../Footer/Footer";
import "./ReservationForm.css";

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
      <section className="heroSection-payInformation">
        <div className="title-payInformation fadeInText">
          <h1 className="titleGallery-payInformation">Información de pago</h1>
          <div className="line-payInformation" />
        </div>
      </section>
      <div class="container">
        <Row class="row-sm-flex payInformation">
          <Col md={6} col-sm-12>
            <Form xs={12} md={6} col-sm-6 onSubmit={handleSubmit}>
              <Form.Group controlId="cardNumber">
                <Form.Label>Número de tarjeta</Form.Label>
                <Form.Control
                  className="payInformation"
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
                  className="payInformation"
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
                  className="payInformation"
                  type="text"
                  name="cardName"
                  value={paymentInfo.cardName}
                  onChange={handlePaymentInfoChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="text-center">
                Enviar
              </Button>
            </Form>
          </Col>
          <div className="payInfo">
          <Col md={6} col-sm-12 col-sm-6 className="d-flex align-items-center justify-content-center text-center">
            <div className="">
              <Card.Body>
                <h3>Aquí va el precio total</h3>
                <p className="lead">7 noches por 700 USD</p>
              </Card.Body>
            </div>
          </Col>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default ReservationForm;
