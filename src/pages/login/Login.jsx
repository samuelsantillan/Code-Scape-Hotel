import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import "../login/login.css";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const { signin, user, isAuthenticated, errors: signinErrors } = useAuth();
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
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
    <div className="main-container">
      <div className={`cont ${isSignupVisible ? "s--signup" : ""}`}>
        <form className="form sign-in" onSubmit={handleSubmit(onSubmit)}>
        { signinErrors.map((error,i) => ( <p key={i} className="text-center" style={{color: "red",}}>{error}</p>))}
          <h2>BIENVENIDO</h2>
          <label>
            <span>Email</span>
            <input type="email" {...register("email", { required: true })} />
          </label>
          <label>
            <span>Contraseña</span>
            <input
              type="password"
              {...register("password", { required: true })}
            />
          </label>
          <div className="button-register">
            <button type="submit" className="submit">Iniciar sesión</button>
          </div>
        </form>
        <div className="sub-cont">
          <div className="img">
            <div className={`img__text ${isSignupVisible ? "m--in" : "m--up"}`}>
              <h2>{isSignupVisible ? "¿Ya tenés cuenta?" : "¿Sos nuevo?"}</h2>
              {isSignupVisible && <p></p>}
            </div>
            <div className="img__btn">
              <span className={`m--up ${isSignupVisible ? "inactive" : ""}`}>
                Registrate
              </span>
              <span className={`m--in ${isSignupVisible ? "" : "inactive"}`}>
                Inicia sesión
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="img2">
        {" "}
        <h2>¿No tenes cuenta?</h2>{" "}
        <div className="img__btn">
          <span className={`m--up ${isSignupVisible ? "inactive" : ""}`}>
          <Link to="/register" className="submit">Registrate</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
