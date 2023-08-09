import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../register/register.css'



const Register = () => {
  return (
  <div className='container'>
   <div class="container2">
  <div class="form-login">
    <h2>Bienvenido de nuevo</h2>
    <label>
      <span>Email</span>
      <input type="email" />
    </label>
    <label>

      <span>Password</span>
      <input type="password" />
    </label>
    <p class="recovery-password">Recuperar contraseña </p>
    <button type="button" class="submit">Iniciar sesion</button>

  </div>
  <div class="container3">
    <div class="img">
      <div class="img-register">
        <h2>¿No tenes cuenta?</h2>
        <p>Registrate</p>
      </div>
      <div class="img-login">
        <h2>¿Ya tenes una cuenta?</h2>
        <p>Ingresá</p>
      </div>
      <div class="img-btn">
        <span class="register">registrate </span>
        <span class="login">Ingresá</span>
      </div>
    </div>
    <div class="form-register">
      <h2>Registrate aqui</h2>
      <label>
        <span>Nombre</span>
        <input type="text" />
      </label>
      <label>
        <span>Email</span>
        <input type="email" />
      </label>
      <label>
        <span>Contraseña</span>
        <input type="password" />
      </label>
      <button type="button" class="submit">Sign Up</button>
   
    </div>
  </div>
</div>



  </div>
  )
}

export default Register