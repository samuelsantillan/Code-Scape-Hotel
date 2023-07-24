import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const AboutUsPage = () => {
  return (
    <Container>
      <h1>Sobre nosotros</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae lacus odio.
        Phasellus a blandit lectus.
      </p>
      <Row>
        <Col sm={6} md={4} lg={3}>
          <Card>
            <Card.Img variant="top" src="imagen1.jpg" />
            <Card.Footer>
            <a href="https://www.instagram.com">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com">
                <FaFacebook />
              </a>
              <a href="https://wa.me/">
                <FaWhatsapp/>
              </a>
            </Card.Footer>
          </Card>
          
        </Col>

        <Col sm={6} md={4} lg={3}>
          <Card>
            <Card.Img variant="top" src="imagen1.jpg" />
            <Card.Footer>
            <a href="https://www.instagram.com">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com">
                <FaFacebook />
              </a>
              <a href="https://wa.me/">
                <FaWhatsapp/>
              </a>
            </Card.Footer>
          </Card>
          
        </Col>
        <Col sm={6} md={4} lg={3}>
          <Card>
            <Card.Img variant="top" src="imagen1.jpg" />
            <Card.Footer>
            <a href="https://www.instagram.com">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com">
                <FaFacebook />
              </a>
              <a href="https://wa.me/">
                <FaWhatsapp/>
              </a>
            </Card.Footer>
          </Card>
          
        </Col>
        <Col sm={6} md={4} lg={3}>
          <Card>
            <Card.Img variant="top" src="imagen1.jpg" />
            <Card.Footer>
            <a href="https://www.instagram.com">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com">
                <FaFacebook />
              </a>
              <a href="https://wa.me/">
                <FaWhatsapp/>
              </a>
            </Card.Footer>
          </Card>
          
        </Col>
        <Col sm={6} md={4} lg={3}>
          <Card>
            <Card.Img variant="top" src="imagen1.jpg" />
            <Card.Footer>
            <a href="https://www.instagram.com">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com">
                <FaFacebook />
              </a>
              <a href="https://wa.me/">
                <FaWhatsapp/>
              </a>
            </Card.Footer>
          </Card>
          
        </Col>
        <Col sm={6} md={4} lg={3}>
          <Card>
            <Card.Img variant="top" src="imagen1.jpg" />
            <Card.Footer>
            <a href="https://www.instagram.com">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com">
                <FaFacebook />
              </a>
              <a href="https://wa.me/">
                <FaWhatsapp/>
              </a>
            </Card.Footer>
          </Card>
          
        </Col>
        <Col sm={6} md={4} lg={3}>
          <Card>
            <Card.Img variant="top" src="imagen1.jpg" />
            <Card.Footer>
            <a href="https://www.instagram.com">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com">
                <FaFacebook />
              </a>
              <a href="https://wa.me/">
                <FaWhatsapp/>
              </a>
            </Card.Footer>
          </Card>
          
        </Col>

        
      </Row>
    </Container>
  );
};

export default AboutUsPage;