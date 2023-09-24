import { useState } from "react";
import { Col, Card, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import "./ReservationForm.css";
import PaymentForm from "./PaymentForm";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logoBeige from "../../assets/svg/logoBeige.svg";
import Swal from 'sweetalert2'
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
    setContactInfo({
      ...contactInfo,
      [name]: value,
    });
  };

  const handlePaymentInfoChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: value,
    });
  };

  const sendEmail = async (username,
    nameHabitation,
    type,
    formattedStartDate, 
    formattedEndDate,
    email) => {
    try {
      const response = await fetch("/enviar-correo-confirmacion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username,
        nameHabitation,
        type,
        formattedStartDate, 
        formattedEndDate,
        email }),
      });
  
      if (response.ok) {
        console.log("Correo de confirmación enviado con éxito");
      } else {
        console.error("Error al enviar el correo de confirmación");
      }
    } catch (error) {
      console.error("Error al enviar el correo de confirmación:", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, phoneNumber, email } = contactInfo;
    
  
    Swal.fire({
      title: 'Resumen de la reserva',
      html: `
      <p><strong>Información de contacto:</strong></p>
      <p>Nombre: ${firstName} ${lastName}</p>
      <p>Teléfono: ${phoneNumber}</p>
      <p>Correo Electrónico: ${email}</p>
      <br>
      `,
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: '#97704e',
      cancelButtonColor: '#1d130c',
      cancelButtonText: 'Volver',
      confirmButtonText: 'Reservar',
      color: '#faf8f4',
      background: '#1d130c',
    }).then(async(result) => {
      if (result.isConfirmed) {
        try {
          await sendEmail();
      
          Swal.fire({
            title: '¡Reserva confirmada!',
            text: 'Pronto recibirás la información de tu reserva en tu correo',
            icon: 'success',
            color: '#faf8f4',
            background: '#1d130c',
            onClose: () => {
              window.location.href = "/";
            }
          });
        } catch (error) {
          console.error("Error sending confirmation email:", error);
          Swal.fire({
            title: 'Error',
            text: 'Hubo un problema al enviar la confirmación por correo electrónico.',
            icon: 'error',
            color: '#faf8f4',
            background: '#1d130c',
          });
        }
      }
    })
  }
  return (
    <>
    <nav className="navAlternative d-flex">
        <a href="/">
          <img src={logoBeige} alt="logo" />
        </a>
      </nav>
      <Row className=" reservationRow">
        <Col lg="12" xs="12">
          <h1 className="text-center my-4">Reserva</h1>
        </Col>
        <Col lg="8" xs="12">
          <Card className="m-3 p-4">
            <h4>Información Personal</h4>
            <Form>
              <div>
                <Row>
                  <Col lg="6" xs="12" className="col-12 my-3">
                    <Form.Group controlId="formFirstName">
                      <Form.Control
                        type="text"
                        placeholder="Nombre"
                        name="firstName"
                        value={contactInfo.firstName}
                        onChange={handleContactInfoChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg="6" xs="12" className="col-12 my-3">
                    <Form.Group controlId="formLastName">
                      <Form.Control
                        type="text"
                        placeholder="Apellido"
                        name="lastName"
                        value={contactInfo.lastName}
                        onChange={handleContactInfoChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </div>
              <div className="mb-3">
                <Row>
                  <Col lg="6" xs="12" className="col-12 my-3">
                    <Form.Group controlId="formMobileNumber">
                      <Form.Control
                        type="text"
                        placeholder="Número de celular"
                        name="phoneNumber"
                        value={contactInfo.phoneNumber}
                        onChange={handleContactInfoChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg="6" xs="12" className="col-12 my-3">
                    <Form.Group controlId="formEmail">
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={contactInfo.email}
                        onChange={handleContactInfoChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </div>
            </Form>
          </Card>
          <Card className=" m-3 p-4">
            <h4 className="mb-3">Información de pago</h4>
            <PaymentForm
              paymentInfo={paymentInfo}
              handlePaymentInfoChange={handlePaymentInfoChange}
            />
          </Card>
        </Col>
        <Col lg="4" xs="12">
          <Card className=" m-3  p-4">
            <h4>Resumen de la Reserva</h4>
            {/* ... Contenido del resumen de la reserva */}
          </Card>
        </Col>
        <div className="d-flex justify-content-center my-3">
          <Button
            variant="secondary"
            className=""
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