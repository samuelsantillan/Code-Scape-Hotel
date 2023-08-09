import React from "react";
import "./RoomPreview.css"

const RoomPreview = () => {
  <div className="restaurantSection">
    <Container>
      <Row>
        <Col
          xs={12}
          lg={6}
          className="restaurantImages imgCol col p-0 d-flex justify-content-center"
        >
          <div className="restaurantImg">
            <div className="image-wrapper">
              <Image
                src="https://images.trvl-media.com/lodging/2000000/1330000/1322200/1322111/c8ba6d52.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                alt="Foto Hotel"
                fluid
                onMouseOver={() =>
                  handleRoomHover(
                    "https://images.trvl-media.com/lodging/2000000/1330000/1322200/1322111/c8ba6d52.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                  )
                }
                onMouseOut={() => handleRoomHover()}
              />
            </div>
          </div>
        </Col>
        <Col xs={12} lg={6} className="restaurantTextCol textCol col">
          <p>RESTAURANTE</p>
          <h3>Experiencia completa</h3>
          <p>
            En CodeScape, deleita tus sentidos con una cocina de primera calidad
            que celebra los ingredientes locales más frescos. Acompaña tu comida
            con una selecta copa de vino y vive un deleite culinario en un
            ambiente inigualable.{" "}
          </p>
        </Col>
      </Row>
    </Container>
  </div>;
};


export default RoomPreview;