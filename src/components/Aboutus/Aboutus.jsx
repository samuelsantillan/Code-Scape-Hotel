import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import "./Aboutus.css"

const AboutUsPage = () => {
  return (
    <Container>
      <h1>Sobre Nosotros</h1>
      <div className="info-box">
      <p>
      En CodeScapeHotel, somos un equipo apasionado y entregado a la creación de experiencias inolvidables en el corazón de Cafayate. Nuestro compromiso con la excelencia en la hospitalidad nos impulsa a superar sus expectativas en cada momento de su estancia.
Desde el momento en que cruza nuestras puertas, será recibido por un equipo cálido y dedicado, listo para atender cada una de sus necesidades con una sonrisa genuina. Cada miembro de nuestro equipo lleva en su corazón el amor por la región y la hospitalidad, lo que se refleja en cada detalle de su visita.
      </p>
      </div>
      <Row >
        <Col sm={6} md={4} lg={3}>
        <Card>
            <Card.Img variant="top" src="/img/MartinFernandez.jpg" />
            <Card.Footer className="card-footer">
              <div>
                <p>Fernández Martín</p> 
                <div className="social-icons">
                  <a href="https://www.instagram">
                    <FaInstagram />
                  </a>
                  <a href="https://www.facebook">
                    <FaFacebook />
                  </a>
                  <a href="https://wa.me/">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>

        <Col sm={6} md={4} lg={3}>
        <Card>
            <Card.Img variant="top" src="" />
            <Card.Footer className="card-footer">
              <div>
                <p>Nombre de la persona </p> 
                <div className="social-icons">
                  <a href="https://www.instagram">
                    <FaInstagram />
                  </a>
                  <a href="https://www.facebook">
                    <FaFacebook />
                  </a>
                  <a href="https://wa.me/">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </Card.Footer>
          </Card>
          
        </Col>
        <Col sm={6} md={4} lg={3}>
        <Card>
            <Card.Img variant="top" src="" />
            <Card.Footer className="card-footer">
              <div>
                <p>Nombre de la persona </p> 
                <div className="social-icons">
                  <a href="https://www.instagram">
                    <FaInstagram />
                  </a>
                  <a href="https://www.facebook">
                    <FaFacebook />
                  </a>
                  <a href="https://wa.me/">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </Card.Footer>
          </Card>
          
        </Col>
        <Col sm={6} md={4} lg={3}>
        <Card>
            <Card.Img variant="top" src="" />
            <Card.Footer className="card-footer">
              <div>
                <p>Nombre de la persona </p> 
                <div className="social-icons">
                  <a href="https://www.instagram">
                    <FaInstagram />
                  </a>
                  <a href="https://www.facebook">
                    <FaFacebook />
                  </a>
                  <a href="https://wa.me/">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </Card.Footer>
          </Card>
          
        </Col>
        </Row>
        <Row className="d-flex justify-content-center">
        <Col sm={6} md={4} lg={3}>
        <Card>
            <Card.Img variant="top" src="" />
            <Card.Footer className="card-footer">
              <div>
                <p>Nombre de la persona </p> 
                <div className="social-icons">
                  <a href="https://www.instagram">
                    <FaInstagram />
                  </a>
                  <a href="https://www.facebook">
                    <FaFacebook />
                  </a>
                  <a href="https://wa.me/">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col sm={6} md={4} lg={3}>
        <Card>
            <Card.Img variant="top" src="" />
            <Card.Footer className="card-footer">
              <div>
                <p>Nombre de la persona </p> 
                <div className="social-icons">
                  <a href="https://www.instagram">
                    <FaInstagram />
                  </a>
                  <a href="https://www.facebook">
                    <FaFacebook />
                  </a>
                  <a href="https://wa.me/">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </Card.Footer>
          </Card>
          
        </Col>
        <Col sm={6} md={4} lg={3}>
        <Card>
            <Card.Img variant="top" src="" />
            <Card.Footer className="card-footer">
              <div>
                <p>Nombre de la persona </p> 
                <div className="social-icons">
                  <a href="https://www.instagram">
                    <FaInstagram />
                  </a>
                  <a href="https://www.facebook">
                    <FaFacebook />
                  </a>
                  <a href="https://wa.me/">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </Card.Footer>
          </Card>
          
        </Col>

        </Row>
      
    </Container>
  );
};

export default AboutUsPage;