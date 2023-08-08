import { Container, Row, Col, Image } from 'react-bootstrap'
import './contactStyle.css'
const Contact = () => {
    return (
        <>
            <section className='introSection'>
                <h1 className='titleContact text-center'>CONTACTO</h1>
            </section>
            <section className='bannerSection'>
                <Container>
                    <Row className='bannerContent'>
                        <Col className='leftCol'>
                            <p className='brownText subtitleBanner'>CONTACTO GENERAL</p>
                            <h3 className='titleBanner'>Reservas e Información</h3>
                        </Col>
                        <Col>
                            <h5 className='brownText' >+54 1038681 422229 / 421753 - CODESPACE</h5>
                            <h5 className='brownText'>codescape@hotel.com</h5>
                            <hr className='lightText' />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='formSection'>
                <Container fluid>
                    <Row>
                        <Col className="bgMarron">
                            <h3 className="d-flex justify-content-center my-4 titleForm">
                                CONTÁCTANOS
                            </h3>

                            <form className="contactForm px-sm-5 d-flex justify-content-center align-items-center">
                                <input type="email" className="form-control px-5" id="email-input" placeholder="Correo Electrónico"
                                    pattern="[a-zA-Z0-9!#$%&'_+-]([\.]?[a-zA-Z0-9!#$%&'_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?"
                                    aria-label="Username" aria-describedby="emailHelp" required />

                                <input type="name" className="form-control px-5" id="name-input" placeholder="Nombre Completo"
                                    pattern="^[A-Za-záéíóúñÁÉÍÓÚÑ\s]+$" aria-label="Username" aria-describedby="nombreHelp"
                                    required />

                                <div id="textArea">
                                    <textarea className="form-control px-5 pt-4 textArea" id="text-area" placeholder="Mensaje"
                                        aria-label="With textarea" cols="100" rows="3" required></textarea>
                                </div>

                                <div id="enviarmensaje">
                                    <button type="submit" className="btn py-4 btnSend" id="btn-send">ENVIAR
                                        MENSAJE</button>
                                </div>

                                <Container fluid className="d-flex justify-content-center my-2 text-center">
                                    <Row className="d-flex justify-content-around">
                                        <Col className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center gap-3">
                                            <div className="form-text">Ruta 68 y Ruta 40, 4400 Cafayate, Argentina</div>
                                        </Col>
                                        <Col
                                            className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center gap-3 my-3">
                                            <div className="form-text">Tel.: +54 1038681 422229 / 421753</div>
                                        </Col>
                                    </Row>
                                </Container>
                            </form>
                        </Col>
                        <Col
                            className="d-none d-md-block p-0 imgContact">
                            <Image src="https://images.almundo.com/201/2000000/1330000/1322200/1322111/7869ceea_z.jpg" alt="Foto hotel" fluid/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Contact