import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../register/register.css';

const Register = () => {
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const toggleSignup = () => {
    setIsSignupVisible(prevState => !prevState);
  };

  return (
    <div className='main-container'>
      <div className={`cont ${isSignupVisible ? 's--signup' : ''}`}>
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
            <button type="button" className='submit'>
              Iniciar sesión
            </button>
          </div>
        </div>
        <div className='sub-cont'>
          <div className='img'>
            <div className={`img__text ${isSignupVisible ? 'm--in' : 'm--up'}`}>
              <h2>{isSignupVisible ? '¿Ya tenés cuenta?' : '¿Sos nuevo?'}</h2>
              {isSignupVisible && <p>Ingresá aquí</p>}
            </div>
            <div className='img__btn' onClick={toggleSignup}>
              <span className={`m--up ${isSignupVisible ? 'inactive' : ''}`}>Registrate</span>
              <span className={`m--in ${isSignupVisible ? '' : 'inactive'}`}>Inicia sesión</span>
            </div>
          </div>
          <div className={`form sign-up ${isSignupVisible ? 'active' : ''}`}>
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
            <div className='button-register'>
              <button type="button" className='submit'>
                Registrate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
