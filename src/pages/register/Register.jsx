import React, { useState } from 'react';

import '../register/register.css';
import Login from  '../login/login.jsx'
const Register = () => {
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  

 

  const handleSignupSubmit = () => {
 
    console.log('Nombre:', nombre);
    console.log('Email:', correo);
    console.log('Contraseña:', contraseña);
  };

  return (
    <div className='main-container'>
      <div className={`cont ${isSignupVisible ? 's--signup' : ''}`}>
      <form className={`form sign-up ${isSignupVisible ? 'active' : ''}`}>
        <h2>CREAR CUENTA</h2>
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
              <button type="button" className='submit ' onClick={handleSignupSubmit}>
                Registrate
              </button>
            </div>
          </form>
        <div className='sub-cont'>
          <div className='img'>
            <div className={`img__text ${isSignupVisible ? 'm--in' : 'm--up'}`}>
              <h2> ¿Ya tenés cuenta?</h2>
              {isSignupVisible && <p></p>}
            </div>
            <div className='img__btn' >
              
              <span className={`m--up ${isSignupVisible ? 'inactive' : ''}`}>Entrar</span>

            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
}

export default Register;
