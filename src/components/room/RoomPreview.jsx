import React from "react";
import "./RoomPreview.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Room from "./Room";
import roomsData from "./roomsData";

const RoomPreview = (props) => {
  const { IsImageFirst, photos, nameHabitation, description, _id } = props;

  return (
      <Container>
        <Row className="justify-content-between align-items-start  w-100  m-0 py-3">
          <Col xs={12} lg={6} className="">
            <h3>{nameHabitation}</h3>
            <p>{description}</p>
          </Col>
          <Col
            xs={12}
            lg={6}
            className="d-flex justify-content-center mb-4 mb-lg-0"
          >
            <div className="">
              <div className="">
                <Room photos={photos} _id={_id} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
  );
};

export default RoomPreview;
