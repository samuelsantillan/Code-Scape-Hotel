import { useState } from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';
import './contentSectionStyle.css';

const ContentSection = () => {
    const defaultRoom = 'https://images.trvl-media.com/lodging/2000000/1330000/1322200/1322111/bc56b37f.jpg?impolicy=resizecrop&rw=1200&ra=fit';
    const [activeRoom, setActiveRoom] = useState(defaultRoom);

    const handleRoomHover = (imageUrl) => {
        setActiveRoom(imageUrl);
    };
    
    return (
        <>
            <section className='textSection'>
                <Container>
                    <p className='textWelcome textFocus'>¡Bienvenido a nuestro hotel, donde el pasado y el presente se funden para crear momentos inolvidables!
                        Sumérgete en la magia de alojarte en el corazón de una finca vitivinícola centenaria, cuyos muros han
                        sido testigos de cautivadoras historias desde 1892. ¡Una experiencia única te espera!</p>
                </Container>
            </section>
            <section className='roomSection'>
                <Container>
                    <Row>
                        <Col xs={12} md={6} className='col roomsImgCol d-flex justify-content-center p-0'>
                            <div
                                className='roomImg'
                                style={{
                                    backgroundImage: activeRoom ? `url(${activeRoom})` : `url(${defaultRoom})`,
                                    transition: 'background-image 0.7s ease-in'
                                }}
                            >
                            </div>
                        </Col>
                        <Col xs={12} md={6} className='col roomsInfoCol ps-5'>
                            <p>HOTEL</p>
                            <h3>Nuestras Habitaciones</h3>
                            <ul className='roomList'>
                                <li>
                                    <a href=""
                                        className={`brownText ${activeRoom === 'https://images.trvl-media.com/lodging/2000000/1330000/1322200/1322111/bc56b37f.jpg?impolicy=resizecrop&rw=1200&ra=fit' ? 'active' : ''}`}
                                        onMouseOver={() => handleRoomHover('https://images.trvl-media.com/lodging/2000000/1330000/1322200/1322111/bc56b37f.jpg?impolicy=resizecrop&rw=1200&ra=fit')}
                                        onMouseOut={() => handleRoomHover(null)}>Vistas al jardín</a>
                                    <hr />
                                </li>
                                <li>
                                    <a href=""
                                        className={`brownText ${activeRoom === 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/325316705.jpg?k=86b84499e0bd9f2c0549bc9d7212b0fae2beedff476a17a2df6414f614d9594e&o=' ? 'active' : ''}`}
                                        onMouseOver={() => handleRoomHover('https://cf.bstatic.com/xdata/images/hotel/max1024x768/325316705.jpg?k=86b84499e0bd9f2c0549bc9d7212b0fae2beedff476a17a2df6414f614d9594e&o=')}
                                        onMouseOut={() => handleRoomHover(null)}
                                    >Colonial</a>
                                    <hr />
                                </li>
                                <li>
                                    <a href=""
                                        className={`brownText ${activeRoom === 'https://images.trvl-media.com/lodging/2000000/1330000/1322200/1322111/ccacd26d.jpg?impolicy=resizecrop&rw=1200&ra=fit' ? 'active' : ''}`}
                                        onMouseOver={() => handleRoomHover('https://images.trvl-media.com/lodging/2000000/1330000/1322200/1322111/ccacd26d.jpg?impolicy=resizecrop&rw=1200&ra=fit')}
                                        onMouseOut={() => handleRoomHover(null)}
                                    >Galería</a>
                                </li>
                            </ul>
                            <button className='btn roomBtn'>Ver Habitaciones</button>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='cardsSection'>
                <Container fluid>
                    <Row>
                        <ul className='cardList p-0'>
                            <li className='cardItem'>
                                <div className='cardBackground d-flex'>
                                    <div className='d-flex justify-content-center align-items-center cardContent img imgEvento'>
                                        <h3 className='titleCard'>Eventos</h3>
                                    </div>
                                </div>
                            </li>
                            <li className='cardItem'>
                                <div className='d-flex justify-content-center align-items-center cardContent img imgExperiencia'>
                                    <h3 className='titleCard'>Experiencias</h3>
                                </div>
                            </li>
                            <li className='cardItem'>
                                <div className='d-flex justify-content-center align-items-center cardContent img imgHistoria'>
                                    <h3 className='titleCard'>Historia</h3>
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
                            <div className="restaurantImg">
                                <div
                                    className="image-wrapper"
                                >
                                    <Image
                                        src= "https://images.trvl-media.com/lodging/2000000/1330000/1322200/1322111/c8ba6d52.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                                        alt="Foto Hotel"
                                        fluid
                                        onMouseOver={() => handleRoomHover('https://images.trvl-media.com/lodging/2000000/1330000/1322200/1322111/c8ba6d52.jpg?impolicy=resizecrop&rw=1200&ra=fit')}
                                        onMouseOut={() => handleRoomHover()}
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} lg={6} className='restaurantTextCol textCol col'>
                            <p>RESTAURANTE</p>
                            <h3>Experiencia completa</h3>
                            <p>En CodeScape, deleita tus sentidos con una cocina de primera calidad que celebra los ingredientes locales más frescos.
                                Acompaña tu comida con una selecta copa de vino y vive un deleite culinario en un ambiente inigualable. </p>
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
