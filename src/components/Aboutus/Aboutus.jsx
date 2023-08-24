import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import "./Aboutus.css"
import ScrollToTopButton from '../scrollToTop/ScrollToTopButton';
import { motion } from 'framer-motion';
const AboutUsPage = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <section className="introSection nosotros">
        <div className="title fadeInText">
          <h1 className="titleContact text-center ">SOBRE NOSOTROS</h1>
          <div className="line" />
        </div>
      </section>
      <Container className='containerAboutUs fadeInText' fluid>
        <div className='d-flex align-items-center justify-content-center'>
          <h3 className='pe-3'>En</h3>
          <h2 className='titleSectionAbout'>CodeScape</h2>
        </div>
        <div className="info-box">
          <p>
            Somos un equipo apasionado y entregado a la creación de experiencias inolvidables en el corazón de Cafayate. Nuestro compromiso con la excelencia en la hospitalidad nos impulsa a superar sus expectativas en cada momento de su estancia.
            Desde el momento en que cruza nuestras puertas, será recibido por un equipo cálido y dedicado, listo para atender cada una de sus necesidades con una sonrisa genuina. Cada miembro de nuestro equipo demuestra su dedicación en cada momento.
          </p>
        </div>
        <Row className='aboutRow'>
          <Col sm={4} md={4} lg={4}>
            <Card className='cardAbout'><div className='imgclass'>
              <Card.Img variant="top" src="/img/MartinFernandez.jpg" /></div>
              <Card.Footer className="card-footer">
                <div>
                  <p>Martín Fernández</p>
                  <div className="social-icons">
                    <a href="https://www.linkedin.com">
                      <FaLinkedin />
                    </a>
                    <a href="https://github.com/LicFernandez">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm={4} md={4} lg={4}>
            <Card className='cardAbout'><div className='imgclass'>
              <Card.Img variant="top" src="/img/Victoria.jpg" /></div>
              <Card.Footer className="card-footer">
                <div>
                  <p>Victoria Cavanna</p>
                  <div className="social-icons">
                    <a href="https://www.linkedin.com">
                      <FaLinkedin />
                    </a>
                    <a href="https://github.com/victoriacavanna">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          
          <Col sm={4} md={4} lg={4}>
            <Card>
              <div className='imgclass'>
                <Card.Img variant="top" src="/img/Samuel.jpg" /></div>
              <Card.Footer className="card-footer">

                <div>
                  <p>Samuel Santillan</p>
                  <div className="social-icons">
                    <a href="https://www.linkedin.com">
                      <FaLinkedin />
                    </a>
                    <a href="https://github.com/samuelsantillan">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </Card.Footer>
            </Card>

          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col sm={4} md={4} lg={4}>
            <Card>
              <div className='imgclass'>
                <Card.Img variant="top" src="/img/Lucas.jpeg" /></div>
              <Card.Footer className="card-footer">
                <div>
                  <p>Lucas Juarez</p>
                  <div className="social-icons">
                    <a href="https://www.linkedin.com">
                      <FaLinkedin />
                    </a>
                    <a href="https://github.com/luki1qq">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm={4} md={4} lg={4}>
            <Card>
              <div className='imgclass'>
                <Card.Img variant="top" src="/img/Alvaro.png" /></div>
              <Card.Footer className="card-footer">
                <div>
                  <p>Alvaro Safe</p>
                  <div className="social-icons">
                    <a href="https://www.linkedin.com">
                      <FaLinkedin />
                    </a>
                    <a href="https://github.com/azafe">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <ScrollToTopButton />
      </Container>
    </motion.div>
  );
};

export default AboutUsPage;