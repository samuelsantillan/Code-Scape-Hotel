import React, { useState } from "react";
import { Col, Card, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import "./ReservationForm.css";
import PaymentForm from "./PaymentForm";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logoBeige from "../../assets/svg/logoBeige.svg";
import Swal from 'sweetalert2';
import { useLocation } from "react-router-dom";

const ReservationForm = () => {

  const location = useLocation();

  const roomPrice = location.state ? location.state.roomPrice : null;
  const numberOfDays = location.state ? location.state.numberOfDays : null;


  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const [validation, setValidation] = useState({
    firstName: true,
    lastName: true,
    phoneNumber: true,
    email: true,
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expirationDate: "",
    cardName: "",
  });

  const handleContactInfoChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({
      ...contactInfo,
      [name]: value,
    });

    const validationRules = {
      firstName: /^[A-Za-z\s]{3,30}$/,
      lastName: /^[A-Za-z\s]{3,50}$/,
      phoneNumber: /^[0-9]{11,11}$/,
      email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    };

    const isValid = validationRules[name].test(value);
    setValidation({
      ...validation,
      [name]: isValid,
    });
  };

  const handlePaymentInfoChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: value,
    });
  };

  const isFormValid = Object.values(validation).every((isValid) => isValid);

  const sendEmail = async (
    username,
    nameHabitation,
    type,
    formattedStartDate,
    formattedEndDate,
    email
  ) => {
    try {
      const response = await fetch("/enviar-correo-confirmacion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          nameHabitation,
          type,
          formattedStartDate,
          formattedEndDate,
          email,
        }),
      });
    } catch (error) {
      console.error("Error al enviar el correo de confirmación:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      Swal.fire({
        title: "Error",
        text: "Por favor, complete todos los campos correctamente.",
        icon: "error",
        color: "#faf8f4",
        background: "#1d130c",
      });
      return;
    }

    const { firstName, lastName, phoneNumber, email } = contactInfo;
    if (!firstName || !lastName || !phoneNumber || !email) {
      Swal.fire({
        title: "Error",
        text: "Por favor, complete todos los campos obligatorios.",
        icon: "error",
        color: "#faf8f4",
        background: "#1d130c",
      });
      return;
    }

    Swal.fire({
      title: "Resumen de la reserva",
      html: `
      <p><strong>Información de contacto:</strong></p>
      <p>Nombre: ${firstName} ${lastName}</p>
      <p>Teléfono: ${phoneNumber}</p>
      <p>Correo Electrónico: ${email}</p>
      <br>
      `,
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#97704e",
      cancelButtonColor: "#1d130c",
      cancelButtonText: "Volver",
      confirmButtonText: "Reservar",
      color: "#faf8f4",
      background: "#1d130c",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await sendEmail();

          Swal.fire({
            title: "¡Reserva confirmada!",
            text: "Pronto recibirás la información de tu reserva en tu correo",
            icon: "success",
            color: "#faf8f4",
            background: "#1d130c",
            onClose: () => {
              window.location.href = "/";
            },
          });
        } catch (error) {
          Swal.fire({
            title: "Error",
            text: "Hubo un problema al enviar la confirmación por correo electrónico.",
            icon: "error",
            color: "#faf8f4",
            background: "#1d130c",
          });
        }
      }
    });
  };
  return (
    <>
      <nav className="navAlternative d-flex">
        <a href="/">
          <img src={logoBeige} alt="logo" />
        </a>
      </nav>
      <Row className="reservationRow">
        <Col lg="12" xs="12">
          <h1 className="text-center my-4">Reserva</h1>
        </Col>
        <Col lg="8" xs="12">
          <Card className="m-3 p-4 checkoutCard">
            <h4>Información Personal</h4>
            <Form>
              <div>
                <Row>
                  <Col lg="6" xs="12" className="col-12 my-3">
                    <Form.Group controlId="formFirstName">
                      <Form.Label>Nombre <span className="required">* </span></Form.Label>
                      <Form.Control
                        className={`inputCheckout ${!validation.firstName ? "is-invalid" : ""}`}
                        type="text"
                        name="firstName"
                        value={contactInfo.firstName}
                        onChange={handleContactInfoChange}
                        pattern="[A-Za-z\s]+"
                        minLength="3"
                        maxLength="30"
                        title="Por favor, introduzca un nombre válido."
                        required
                      />
                      {!validation.firstName && (
                        <div className="invalid-feedback">
                          Por favor, introduzca un nombre válido.
                        </div>
                      )}
                    </Form.Group>
                  </Col>
                  <Col lg="6" xs="12" className="col-12 my-3">
                    <Form.Group controlId="formLastName">
                      <Form.Label>Apellido <span className="required">* </span></Form.Label>
                      <Form.Control
                        className={`inputCheckout ${validation.lastName ? "" : "is-invalid"}`}
                        type="text"
                        name="lastName"
                        value={contactInfo.lastName}
                        onChange={handleContactInfoChange}
                        pattern="[A-Za-z\s]+"
                        title="Por favor, introduzca un apellido válido."
                        minLength="3"
                        maxLength="40"
                        required
                      />
                      {!validation.lastName && (
                        <div className="invalid-feedback">
                          Por favor, introduzca un apellido válido.
                        </div>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
              </div>
              <div className="mb-3">
                <Row>
                  <Col lg="6" xs="12" className="col-12 my-3">
                    <Form.Group controlId="formMobileNumber">
                      <Form.Label>Número de teléfono <span className="required">* </span></Form.Label>
                      <Form.Control
                        className={`inputCheckout ${validation.phoneNumber ? "" : "is-invalid"}`}
                        type="text"
                        name="phoneNumber"
                        value={contactInfo.phoneNumber}
                        onChange={handleContactInfoChange}
                        pattern="[0-9]{11,11}"
                        minLength="11"
                        maxLength="11"
                        title="Por favor, introduzca un número de teléfono válido (debe comenzar con código de área)."
                        required
                      />
                      {!validation.phoneNumber && (
                        <div className="invalid-feedback">
                          Por favor, introduzca un número válido.
                        </div>
                      )}
                    </Form.Group>
                  </Col>
                  <Col lg="6" xs="12" className="col-12 my-3">
                    <Form.Group controlId="formEmail">
                      <Form.Label>Correo electrónico <span className="required">* </span></Form.Label>
                      <Form.Control
                        className={`inputCheckout ${validation.email ? "" : "is-invalid"}`}
                        type="email"
                        name="email"
                        value={contactInfo.email}
                        onChange={handleContactInfoChange}
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                        minLength="6"
                        maxLength="80"
                        required
                      />
                      {!validation.email && (
                        <div className="invalid-feedback">
                          Por favor, introduzca un correo electrónico válido.
                        </div>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
              </div>
            </Form>
          </Card>
          <Card className=" m-3 p-4 checkoutCard">
            <h4 className="mb-3">Información de pago</h4>
            <PaymentForm
              paymentInfo={paymentInfo}
              handlePaymentInfoChange={handlePaymentInfoChange}
            />
          </Card>
        </Col>
        <Col lg="4" xs="12">
          <Card className=" m-3  p-4 checkoutCard">
            <h4>Resumen de la Reserva</h4>
            <p>El monto total es de: {roomPrice} USD</p>
            <p>Por {numberOfDays} noches</p>
          </Card>
        </Col>
        <div className="d-flex justify-content-center my-3">
          <Button
            variant="secondary"
            className="btnBrown"
            onClick={handleSubmit}
            type="button"
          >
            Completar reserva
          </Button>
        </div>
      </Row>
      <Footer />
    </>
  );
};

export default ReservationForm;