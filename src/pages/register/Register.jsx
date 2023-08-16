import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../register/register.css';

const Register = () => {
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  const toggleSignup = () => {
    setIsSignupVisible(prevState => !prevState);
  };

  const handleLoginSubmit = () => {
    console.log('Inicio de sesión:','Email:', correo, 'Contraseña:', contraseña);

  };

  const handleSignupSubmit = () => {
    console.log('Registro:', 'Nombre:', nombre, 'Email:', correo, 'Contraseña:', contraseña);

  };

  return (
    <div className='main-container'>
      <div className={`cont ${isSignupVisible ? 's--signup' : ''}`}>
        <form className='form sign-in'>
          <h2>Bienvenido</h2>
          <label>
            <span>Email</span>
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </label>
          <label>
            <span>Contraseña</span>
            <input
              type="password"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
          </label>
          <div className='button-register'>
            <button type="button" className='submit' onClick={handleLoginSubmit}>
              Iniciar sesión
            </button>
          </div>
        </form>
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
          <form className={`form sign-up ${isSignupVisible ? 'active' : ''}`}>
            <label>
              <span>Nombre</span>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </label>
            <label>
              <span>Contraseña</span>
              <input
                type="password"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
              />
            </label>
            <div className='button-register'>
              <button type="button" className='submit' onClick={handleSignupSubmit}>
                Registrate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
