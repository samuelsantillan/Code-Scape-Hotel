import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../register/register.css'



const Register = () => {
  return (
  <div className='contenedor'>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Dirección de correo electronico</Form.Label>
      <Form.Control type="email" placeholder="Ingrese su correo " />
      <Form.Text className="text-muted">
        No vamos a compartir su correo con nadie mas.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Contraseña</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Confirme su contraseña</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
  
    </Form.Group>
    <Button variant="danger" type="submit">
      Crear cuenta
    </Button>
  </Form>
  </div>
  )
}

export default Register