import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLinkedin , FaGithub, FaWhatsapp } from 'react-icons/fa';
import "./Aboutus.css"
import ScrollToTopButton from '../scrollToTop/ScrollToTopButton';

const AboutUsPage = () => {
  return (
    <Container className='containerAboutUs'>
      <h1 className='titleAbout'>Sobre Nosotros</h1>
      <div className="info-box">
      <p>
      En CodeScapeHotel, somos un equipo apasionado y entregado a la creación de experiencias inolvidables en el corazón de Cafayate. Nuestro compromiso con la excelencia en la hospitalidad nos impulsa a superar sus expectativas en cada momento de su estancia.
      Desde el momento en que cruza nuestras puertas, será recibido por un equipo cálido y dedicado, listo para atender cada una de sus necesidades con una sonrisa genuina. Cada miembro de nuestro equipo lleva en su corazón el amor por la región y la hospitalidad, lo que se refleja en cada detalle de su visita.
      </p>
      </div>
      <Row className='aboutRow'>
        <Col sm={6} md={4} lg={3}>
        <Card className='cardAbout'><div className='imgclass'>
            <Card.Img variant="top" src="/img/MartinFernandez.jpg"/></div>
            <Card.Footer className="card-footer">
              <div>
                <p>Fernández Martín</p> 
                <div className="social-icons">
                  <a href="https://www.linkedin.com">
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com">
                    <FaGithub />
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
          <div className='imgclass'>
            <Card.Img variant="top" src="/img/Victoria.jpg" /></div>
            <Card.Footer className="card-footer">
              <div>
                <p>Victoria Cavanna</p> 
                <div className="social-icons">
                  <a href="https://www.linkedin.com">
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com">
                    <FaGithub />
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
        <div className='imgclass'>
            <Card.Img variant="top" src="/img/Samuel.jpg"/></div>
            <Card.Footer className="card-footer">
              
              <div>
                <p>Samuel Santillan</p> 
                <div className="social-icons">
                  <a href="https://www.linkedin.com">
                    <FaLinkedin/>
                  </a>
                  <a href="https://github.com">
                    <FaGithub />
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
        <div className='imgclass'>
            <Card.Img variant="top" src="/img/Alvaro.png"/></div>
            <Card.Footer className="card-footer">
              <div>
                <p>Alvaro Safe</p> 
                <div className="social-icons">
                  <a href="https://www.linkedin.com">
                    <FaLinkedin/>
                  </a>
                  <a href="https://github.com">
                    <FaGithub />
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
                <p>Lucas </p> 
                <div className="social-icons">
                  <a href="https://www.linkedin.com">
                    <FaLinkedin/>
                  </a>
                  <a href="https://github.com">
                    <FaGithub />
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
                  <a href="https://www.linkedin.com">
                    <FaLinkedin/>
                  </a>
                  <a href="https://github.com">
                    <FaGithub />
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
                  <a href="https://www.linkedin.com">
                    <FaLinkedin/>
                  </a>
                  <a href="https://github.com">
                    <FaGithub />
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
      <ScrollToTopButton/>
    </Container>

  );
};

export default AboutUsPage;