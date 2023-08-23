import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext"

import "../register/register.css";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const { signin, user, isAuthenticated, errors: signinErrors } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (value) => {
    console.log(value);
    signin(value);
  };
  
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  },[isAuthenticated]);

  return (
    <div className="main-container-register">
      <div className={`cont-register ${isSignupVisible ? "s--signup" : ""}`}>
        <form className="form-register sign-in" onSubmit={handleSubmit(onSubmit)}>
        { signinErrors.map((error,i) => ( <p key={i} className="text-center" style={{color: "red",}}>{error}</p>))}
          <h2 className="h2-register">BIENVENIDO</h2>
          <label className="label-register" >
            <span>Email</span>
            <input  className="input-register" type="email" {...register("email", { required: true })} />
          </label>
          <label className="label-register">
            <span>Contraseña</span>
            <input className="input-register"
              type="password"
              {...register("password", { required: true })}
            />
          </label >
          <div className="button-register">
            <button type="submit-register" className="submit-register button-register2">Iniciar sesión</button>
          </div>
        </form>
        <div className="sub-cont-register">
          <div className="img-register">
            <div className={`img__text ${isSignupVisible ? "m--in" : "m--up"}`}>
              <h2 className="h2-register">{isSignupVisible ? "¿Ya tenés cuenta?" : "¿Sos nuevo?"}</h2>
              {isSignupVisible && <p></p>}
            </div>
            <div className="img__btn">
            <a href="/register"> <span className={`m--up ${isSignupVisible ? "inactive" : ""}`}>
                registrate
              </span></a>
              <span className={`m--in ${isSignupVisible ? "" : "inactive"}`}>
                Inicia sesión
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="img2-register">
        {" "}
        <h2 className="h2-register">¿No tenes cuenta?</h2>{" "}
        <div className="img__btn">
        <a href="/register"> <span className={`m--up ${isSignupVisible ? "inactive" : ""}`}>
                Registrate
              </span></a>
        </div>
      </div>
    </div>
  );

    // return (
    //   <h1>hola</h1>
    // )
};

export default Login;
