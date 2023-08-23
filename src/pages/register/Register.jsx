import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "../register/register.css";
import Login from "../login/login.jsx";
import { registerRequest } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// TODO  -> nombre es el usuario (Cambiarlo)

const Register = () => {
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const { signup, user, isAuthenticated, errors: RegisterErrors } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  console.log(user);

  useEffect(() => {
    if (isAuthenticated) navigate("/register");
  }, [isAuthenticated]);

  console.log();

  const onSubmit = async (value) => {
    console.log(value);
    await signup(value);
  };

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
};

export default Register;
