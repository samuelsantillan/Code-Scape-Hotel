import { useState, useRef } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../../../animations/FadeIn';
import './contentSectionStyle.css';

const ContentSection = () => {
    const defaultRoom = 'https://images.trvl-media.com/lodging/2000000/1330000/1322200/1322111/bc56b37f.jpg?impolicy=resizecrop&rw=1200&ra=fit';
    const [activeRoom, setActiveRoom] = useState(defaultRoom);
    const imageRef = useRef(null);

    const handleRoomHover = (imageUrl) => {
        setActiveRoom(imageUrl);
    };

    const handleMouseOver = () => {
        imageRef.current.src = 'https://images.trvl-media.com/lodging/2000000/1330000/1322200/1322111/7324dd91.jpg';
    };

    const handleMouseOut = () => {
        imageRef.current.src = 'https://images.trvl-media.com/lodging/2000000/1330000/1322200/1322111/c8ba6d52.jpg?impolicy=resizecrop&rw=1200&ra=fit';
    };
    return (
        <>
            <section className='welcomeSection'>
                <FadeIn>
                    <Container className='pt-5 textContainer'>
                        <p className='brownText ps-4 subtitleWelcome'>Vinos & Vistas</p>
                        <h2 className='titleWelcome'>La esencia vitivinícola en los Valles Calchaquíes</h2>
                        <p className='textWelcome'>
                            Sumérgete en la magia de alojarte en el corazón de una finca vitivinícola centenaria, cuyos muros han
                            sido testigos de cautivadoras historias desde 1892. ¡Una experiencia única te espera!</p>
                        <hr className='lineWelcome' />
                    </Container>
                </FadeIn>
            </section>
            <FadeIn>
                <section className='roomSection'>
                    <Container>
                        <Row>
                            <Col xs={12} md={6} className='col roomsImgCol d-flex justify-content-center p-0'>
                                <AnimatePresence mode='wait'>
                                    <motion.div
                                        key={activeRoom}
                                        className='roomImg'
                                        style={{
                                            backgroundImage: `url(${activeRoom || defaultRoom})`
                                        }}
                                        initial={{ opacity: 0.6 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1.3 }}
                                    />
                                </AnimatePresence>
                            </Col>
                            <Col xs={12} md={6} className='col roomsInfoCol ps-5'>
                                <p className='brownText ps-4 beforeTitle textSecondary'>HOTEL</p>
                                <h3 className='brownDarkText ps-4 fs-1'>Nuestras Habitaciones</h3>
                                <ul className='roomList'>
                                    <li>
                                        <p
                                            className={`textSecondary brownText ${activeRoom === 'https://images.trvl-media.com/lodging/2000000/1330000/1322200/1322111/bc56b37f.jpg?impolicy=resizecrop&rw=1200&ra=fit' ? 'active' : ''}`}
                                            onMouseOver={() => handleRoomHover('https://images.trvl-media.com/lodging/2000000/1330000/1322200/1322111/bc56b37f.jpg?impolicy=resizecrop&rw=1200&ra=fit')}
                                            onMouseOut={() => handleRoomHover(null)}>Vistas al jardín</p>
                                        <hr className='separatorRooms' />
                                    </li>
                                    <li>
                                        <p
                                            className={`textSecondary brownText ${activeRoom === 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/325316705.jpg?k=86b84499e0bd9f2c0549bc9d7212b0fae2beedff476a17a2df6414f614d9594e&o=' ? 'active' : ''}`}
                                            onMouseOver={() => handleRoomHover('https://cf.bstatic.com/xdata/images/hotel/max1024x768/325316705.jpg?k=86b84499e0bd9f2c0549bc9d7212b0fae2beedff476a17a2df6414f614d9594e&o=')}
                                            onMouseOut={() => handleRoomHover(null)}
                                        >Colonial</p>
                                        <hr className='separatorRooms' />
                                    </li>
                                    <li>
                                        <p
                                            className={`textSecondary brownText ${activeRoom === 'https://images.trvl-media.com/lodging/2000000/1330000/1322200/1322111/ccacd26d.jpg?impolicy=resizecrop&rw=1200&ra=fit' ? 'active' : ''}`}
                                            onMouseOver={() => handleRoomHover('https://images.trvl-media.com/lodging/2000000/1330000/1322200/1322111/ccacd26d.jpg?impolicy=resizecrop&rw=1200&ra=fit')}
                                            onMouseOut={() => handleRoomHover(null)}
                                        >Galería</p>
                                    </li>
                                </ul>
                                <button className='btn roomBtn'>Ver Habitaciones</button>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </FadeIn>
            <section className='cardsSection'>
                <Container fluid>
                    <Row className='cardsRow'>
                        <ul className='cardList p-0'>
                            <li className='cardItem'>
                                <div className='cardBackground d-flex'>
                                    <div className='d-flex justify-content-center align-items-center cardContent img imgEvento'>
                                        <h3 className='titleCard'>Eventos</h3>
                                        <div className="cardContentInfo">
                                            <h3 className="cardContentTitle">VIVÍ EVENTOS ÚNICOS</h3>
                                            <div className="cardContentText pe-4">
                                                <ul>
                                                    <li><p className='textSecondary'>Casamientos</p></li>
                                                    <li><p className='textSecondary'>Cumpleaños</p></li>
                                                    <li><p className='textSecondary'>Conferencias</p></li>
                                                    <li><p className='textSecondary'>Workshops</p></li>
                                                    <li><p className='textSecondary'>Días de campo</p></li>
                                                </ul>
                                                <p className='infoText'>Para más información: eventos@codescape.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='cardItem'>
                                <div className='d-flex justify-content-center align-items-center cardContent img imgExperiencia'>
                                    <h3 className='titleCard'>Experiencias</h3>
                                    <div className="cardContentInfo">
                                        <h3 className="cardContentTitle">
                                            DESCUBRE EXPERIENCIAS INIGUALABLES</h3>
                                        <div className="cardContentText pe-4">
                                            <ul>
                                                <li><p className='textSecondary'>Cabalgatas</p></li>
                                                <li><p className='textSecondary'>Masajes</p></li>
                                                <li><p className='textSecondary'>Degustaciones</p></li>
                                                <li><p className='textSecondary'>Visitas a la bodega</p></li>
                                            </ul>
                                            <p className='infoText'>Para más información: experiencias@codescape.com</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='cardItem'>
                                <div className='d-flex justify-content-center align-items-center cardContent img imgHistoria'>
                                    <h3 className='titleCard'>Historia</h3>
                                    <div className="cardContentInfo">
                                        <h3 className="cardContentTitle">UN PASADO VIVO</h3>
                                        <div className="cardContentText pe-4">
                                            <p className='textSecondary'>Tu Estancia en el Corazón de 1892 entre Viñedos y Valles. Conocé más sobre esta antigua finca. </p>
                                            <p className='infoText'>Para más información: eventos@codescape.com</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </Row>
                </Container>
            </section>
            <section className='restaurantSection'>
                <Container>
                    <Row>
                        <Col xs={12} lg={6} className='restaurantImages imgCol col p-0 d-flex justify-content-center'>
                            <FadeIn delay={1}>
                                <div className="restaurantCol">
                                    <div
                                        className="image-wrapper"
                                    >
                                        <Image
                                            ref={imageRef}
                                            src='https://images.trvl-media.com/lodging/2000000/1330000/1322200/1322111/c8ba6d52.jpg?impolicy=resizecrop&rw=1200&ra=fit'
                                            alt="Foto Hotel"
                                            className='restaurantImg'
                                            fluid
                                            onMouseOver={handleMouseOver}
                                            onMouseOut={handleMouseOut}
                                        />
                                    </div>
                                </div>
                            </FadeIn>
                        </Col>
                        <Col xs={12} lg={6} className='restaurantTextCol textCol col ps-4'>
                            <FadeIn>
                                <p className='brownText beforeTitle'>RESTAURANTE</p>
                                <h3 className='restaurantTitle fs-1'>Experiencia completa</h3>
                                <p className='restaurantText'>En CodeScape, deleita tus sentidos con una cocina de primera calidad que celebra los ingredientes locales más frescos.
                                    Acompaña tu comida con una selecta copa de vino y vive un deleite culinario en un ambiente inigualable. </p>
                            </FadeIn>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='finalImgSection'>
                <div className="parallax"></div>
            </section>
        </>
    );
};

export default ContentSection;