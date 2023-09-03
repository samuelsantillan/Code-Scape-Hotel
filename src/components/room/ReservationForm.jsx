import React, { useState } from "react";
import { Col, Card, Row } from "react-bootstrap";
import NavbarComponent from "../Navbar/NavbarComponent";
import Footer from "../Footer/Footer";
import "./ReservationForm.css";
import PaymentForm from "./PaymentForm";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ReservationForm = () => {
  return (
    <Row className="my-5">
      <Col lg="12" xs="12">
        <h1 className="text-center my-5">Reserva</h1>
      </Col>
      <Col lg="8" xs="12">
        <div className="mx-5">
          <Button variant="secondary" className="">
            Inicie sesión para reservar más rápido
          </Button>
        </div>
        <Card className="mx-5 my-3 p-4">
          <h4>Información Personal</h4>
          <Form>
            <div>
              <Row>
                <Col lg="6" xs="12" className="col-12">
                  <Form.Group controlId="formFirstName">
                    <Form.Control type="text" placeholder="Nombre" />
                  </Form.Group>
                </Col>
                <Col lg="6" xs="12" className="col-12">
                  <Form.Group controlId="formLastName">
                    <Form.Control type="text" placeholder="Apellido" />
                  </Form.Group>
                </Col>
              </Row>
            </div>
            <div className="mb-3">
              <Row>
                <Col lg="6" xs="12" className="col-12">
                  <Form.Group controlId="formMobileNumber">
                    <Form.Control type="text" placeholder="Número de celular" />
                  </Form.Group>
                </Col>
                <Col lg="6" xs="12" className="col-12">
                  <Form.Group controlId="formEmail">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                </Col>
              </Row>
            </div>

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Card>
        <Card className="mx-5 my-3 p-4">
          <PaymentForm />
        </Card>
      </Col>
      <Col lg="4" xs="12">
        <Card className="m-5 p-4">
          <h4>Resumen de la Reserva</h4>
          <div className="d-flex justify-content-between">
            <p>Fecha de llegada</p>
            <p>Fecha de salida</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Adultos: </p>
            <p>Niños: </p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Habitación</p>
            <p>Precio</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <p>Total: </p>
          </div>
        </Card>
        
      </Col>
      <div className="mx-5">
          <Button variant="secondary" className="">
            Completar Booking
          </Button>
        </div>
    </Row>
  );
};

export default ReservationForm;
