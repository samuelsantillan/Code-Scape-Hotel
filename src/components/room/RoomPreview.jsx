import React from "react";
import "./RoomPreview.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Room from "./Room";
import roomsData from "./roomsData";



const RoomPreview = (props) => {
  const { IsImageFirst } = props;

  return (
    <div className="restaurantSection my-5 py-5" >
      <Container>
        <Row>
          {IsImageFirst ? (
            <>
              <Col
                xs={12}
                lg={6}
                className="d-flex justify-content-center"
              >
                <div className="restaurantImg">
                  <div className="image-wrapper">
                  <Room roomData={roomsData} className="fluid" />
                
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={6} className="restaurantTextCol textCol col">
                <h3>{props.name}</h3>
                <p>{props.description} </p>
              </Col>
            </>
          ) : (
            <>
              <Col xs={12} lg={6} className="restaurantTextCol textCol col">
                <h3>{props.name}</h3>
                <p>{props.description} </p>
              </Col>
              <Col
                xs={12}
                lg={6}
                className="restaurantImages imgCol col p-0 d-flex justify-content-center"
              >
                <div className="restaurantImg">
                  <div className="image-wrapper">
                    <Image
                      src={props.image}
                      alt="Foto Hotel"
                      fluid
                      // onMouseOver={() =>
                      //   handleRoomHover(
                      //     "https://images.trvl-media.com/lodging/2000000/1330000/1322200/1322111/c8ba6d52.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                      //   )
                      // }
                      // onMouseOut={() => handleRoomHover()}
                    />
                  </div>
                </div>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default RoomPreview;