import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "../register/register.css";
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
      {RegisterErrors.map((error, i) => (
        <p key={i} className="text-center" style={{ color: "red" }}>
          {error}
        </p>
      ))}
      <form
        className={`form-register sign-up ${isSignupVisible ? "active" : ""}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="h2-register">CREAR CUENTA</h2>
        <label className="label-register">
          <span>Nombre</span>
          <input
            className="input-register"
            {...register("username", { required: "El nombre es obligatorio" })}
            type="text"
            autoFocus
          />
          {errors.username && (
            <p className="text-center" style={{ color: "red" }}>
              {errors.username.message}
            </p>
          )}
        </label>
  
        <label className="label-register">
            <span>Email</span>
            <input
              className="input-register"
              type="email"
              {...register("email", {
                required: "El email es obligatorio",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido",
                },
              })}
            />
            {errors.email && (
              <p className="text-center" style={{ color: "red" }}>
                {errors.email.message}
              </p>
            )}
          </label>
        <label className="label-register">
          <span>Contraseña</span>
          <input
            className="input-register"
            type="password"
            {...register("password", {
              required: "La contraseña es obligatoria",
            })}
          />
          {errors.password && (
            <p className="text-center" style={{ color: "red" }}>
              {errors.password.message}
            </p>
          )}
        </label>
        <div className="button-register">
          <button
            type="submit-register"
            className="submit-register button-register2 "
          >
            Registrate
          </button>
        </div>
      </form>

      <div className="sub-cont-register">
        <div className="img-register">
          <div className={`img__text "m--in" : "m--up"}`}>
            <h2 className="h2-register"> ¿Ya tenés cuenta?</h2>
            
            {isSignupVisible && <p></p>}
          </div>
          <div className="img__btn">
            
          <a href="/login"> <span className={`m--up ${isSignupVisible ? "inactive" : ""}`}>
              Entrar
            </span></a>
          </div>
        </div>
      </div>
    </div>
    <div className="img2-register ">
      {" "}
      <h2 className="h2-register">¿Ya tenés cuenta?</h2>
      <div className="img__btn">
      <a href="/login"> <span className={`m--up ${isSignupVisible ? "inactive" : ""}`}>
              Entrar
            </span></a>
        
      </div>
      
    </div>
    
  </div>
  );
};

export default Register;
