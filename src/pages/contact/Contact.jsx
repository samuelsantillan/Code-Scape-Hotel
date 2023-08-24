import { Container, Row, Col, Image } from "react-bootstrap";
import { useState } from "react";
import Swal from 'sweetalert2'
import FadeIn from "../../animations/FadeIn";
import ScrollToTopButton from "../../components/scrollToTop/ScrollToTopButton";
import { motion } from 'framer-motion';
import "./contactStyle.css";
const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log("Mensaje enviado y guardado en la base de datos");
                Swal.fire({
                    title: "Enviado Correctamente!",
                    text: "Te responderemos pronto!",
                    icon: "success",
                    color: '#faf8f4',
                    background: '#1d130c'
                }

                );
                setFormData({
                    email: "",
                    name: "",
                    message: "",
                });
            } else {
                Swal.fire("Hubo un error!", "Por favor intentar nuevamente", "error");
                console.error("Error al enviar el formulario");
            }
            setFormData({
                email: "",
                name: "",
                message: "",
            });
        } catch (e) {
            console.error("Error al enviar el formulario");
        }
    };

    return (
        <>
            <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            >
                <section className="introSection contact">
                    <div className="title fadeInText">
                        <h1 className="titleContact text-center">CONTACTO</h1>
                        <div className="line" />
                    </div>
                </section>
                <section className="bannerSection">
                    <Container>
                        <FadeIn>
                            <Row className="bannerContent">
                                <Col className="titleCol">
                                    <p className="brownText subtitleBanner">CONTACTO GENERAL</p>
                                    <h3 className="titleBanner">Reservas e Información</h3>
                                </Col>
                                <Col className="pt-5">
                                    <h5 className="brownText">+54 1038681 422229 | 421753</h5>
                                    <h5 className="brownText">hotel@codescape.com</h5>
                                    <hr className="lightLine" />
                                </Col>
                            </Row>
                        </FadeIn>
                        <FadeIn>
                            <Row className="bannerContent experiencias">
                                <Col className="pt-5">
                                    <h5 className="brownText">eventos@codescape.com</h5>
                                    <h5 className="brownText">experiencias@codescape.com</h5>
                                    <hr className="lightLine" />
                                </Col>
                                <Col className="titleCol">
                                    <p className="brownText subtitleBanner">EXPERIENCIAS & EVENTOS</p>
                                    <h3 className="titleBanner">Servicios de Reserva y Detalles</h3>
                                </Col>
                            </Row>
                        </FadeIn>
                    </Container>
                </section>
                <section className="formSection">
                    <Container fluid>
                        <Row className="formContactRow">
                            <Col md={6} className="d-none d-md-block p-0 imgContact">
                                <Image
                                    src="https://i.ibb.co/Yy1dLxy/comunes1.jpg"
                                    alt="Foto hotel"
                                    fluid
                                />
                            </Col>
                            <Col md={6}>
                                <FadeIn >
                                    <h3 className="d-flex justify-content-center my-4 titleForm">
                                        ESCRÍBENOS
                                    </h3>
                                    <form
                                        onSubmit={handleSubmit}
                                        className="contactForm px-sm-5 d-flex justify-content-center align-items-center"
                                    >
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control px-5"
                                            id="email-input"
                                            placeholder="Correo Electrónico"
                                            pattern="^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$"
                                            aria-label="email"
                                            aria-describedby="emailHelp"
                                            value={formData.email}
                                            onChange={handleChange}
                                            minLength={7}
                                            maxLength={40}
                                            required
                                        />


                                        <input
                                            type="name"
                                            name="name"
                                            className="form-control px-5"
                                            id="name-input"
                                            placeholder="Nombre Completo"
                                            pattern="^[A-Za-záéíóúñÁÉÍÓÚÑ\s]+$"
                                            aria-label="name"
                                            aria-describedby="nombreHelp"
                                            onChange={handleChange}
                                            value={formData.name}
                                            minLength={5}
                                            maxLength={30}
                                            required
                                        />

                                        <div>
                                            <textarea
                                                name="message"
                                                className="form-control px-5 pt-4 textArea"
                                                id="text-area"
                                                placeholder="Mensaje"
                                                aria-label="With textarea"
                                                cols="100"
                                                rows="3"
                                                onChange={handleChange}
                                                value={formData.message}
                                                minLength={10}
                                                maxLength={800}
                                                required
                                            ></textarea>
                                        </div>

                                        <div>
                                            <button
                                                type="submit"
                                                className="btn py-4 btnSend"
                                                id="btn-send"
                                            >
                                                ENVIAR MENSAJE
                                            </button>
                                        </div>

                                        <Container
                                            fluid
                                            className="d-flex justify-content-center my-2 text-center"
                                        >
                                            <Row className="d-flex justify-content-around">
                                                <Col className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center gap-3">
                                                    <div className="form-text">
                                                        Ruta 68 y Ruta 40, 4400 Cafayate, Argentina
                                                    </div>
                                                </Col>
                                                <Col className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center gap-3 my-3">
                                                    <div className="form-text">
                                                        Tel.: +54 1038681 422229 / 421753
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </form>
                                </FadeIn>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <ScrollToTopButton />
            </motion.div>
        </>
    );
};

export default Contact;
