import React from "react"
import "../Error404/Error404.css"
import Button from 'react-bootstrap/Button'


function error(){
    return[
        <>
 <div className="error-container">
      <div className="error-content">
        <h1 className="color404">404</h1>
        <h5>Oops! La página que estás buscando no fue encontrada.</h5>
        <Button variant="success">Volver a página de inicio</Button>{' '}
      </div>
    </div>
   
        </>
    ]

}

export default error