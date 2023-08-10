import React from "react";
import RoomPreview from "./room/RoomPreview";

const RoomPagePreview = () => {
  return (
    <>
      <RoomPreview
        IsImageFirst={true}
        image="src\assets\Habitación estándar.jpg"
        name="Habitación estándar"
        description="Nuestra cómoda Habitación Estándar ofrece todo lo que necesitas
              para una estancia relajante. Con una decoración moderna y todas
              las comodidades esenciales, te sentirás como en casa. Disfruta de
              una cama acogedora, un espacio funcional de trabajo y un baño bien
              equipado."
      />
      <RoomPreview
        IsImageFirst={false}
        image="src\assets\suite1.jpg"
        name="Suite Ejecutiva"
        description="Sumérgete en el lujo y la elegancia de nuestra Suite Ejecutiva. Amplia y sofisticada, esta suite es perfecta para viajeros de negocios o aquellos que buscan un toque extra de comodidad. Disfruta de una zona de estar separada, una cama king-size indulgente y vistas impresionantes. Además, contarás con servicios exclusivos y acceso a nuestro lounge ejecutivo."
      />
      <RoomPreview
        IsImageFirst={true}
        image="src\assets\familiar1.jpg"
        name="Habitación Familiar"
        description="Nuestra espaciosa Habitación Familiar es ideal para toda la familia. Con espacio suficiente para todos, esta habitación ofrece comodidades pensadas para niños y adultos por igual. Relájate en las cómodas camas, disfruta de entretenimiento en la televisión de pantalla plana y aprovecha al máximo tus vacaciones juntos."
      />
      <RoomPreview
        IsImageFirst={false}
        image="src\assets\presidencial1.jpg"
        name="Suite Presidencial"
        description="Experimenta la grandeza en nuestra Suite Presidencial de lujo. Esta exclusiva suite es un santuario de elegancia y comodidad. Con áreas separadas para el descanso y el entretenimiento, una bañera de hidromasaje privada y servicios de primera clase, tu estancia en la Suite Presidencial será una experiencia inolvidable que superará todas tus expectativas."
      />
    </>
  );
};

export default RoomPagePreview;
