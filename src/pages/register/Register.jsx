import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../register/register.css'

document.querySelector('.img__btn').addEventListener('click', function() {
  document.querySelector('.cont').classList.toggle('s--signup');
});

const Register = () => {
  return (
    
  
  <div className='main-container'>
  <div className='cont'>
  <div className='form sign-in'>
    <h2>Bienvenido</h2>
    <label>
      <span>Email</span>
      <input type="email" />
    </label>
    <label>
      <span>Contraseña</span>
      <input type="password" />
    </label>
 <div className='button-register'>
    <button type="button" className='submit'>Registrate</button>
    </div>
  </div>
  <div className='sub-cont'>
    <div className='img'>
      <div className='img__text m--up'>
        <h2>¿sos nuevo?</h2>
        
      </div>
      <div className='img__text m--in'>
        <h2>¿Ya tenes cuenta?</h2>
        <p>Ingresá aqui</p>
      </div>
      <div className='img__btn'>
        <span className='m--up'>Registrate</span>
        <span className='m--in'>Inicia sesion</span>
      </div>
    </div>
    <div className='form sign-up'>
      
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
      <button type="button" className='submit'>Registrate</button>
   
    </div>
  </div>
</div>
</div>
  )
}

export default Register