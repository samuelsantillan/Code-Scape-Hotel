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
      
      <div className={`cont-register   ${isSignupVisible ? "s--signup" : ""}`}>
        { RegisterErrors.map((error,i) => ( <p key={i} className="text-center" style={{color: "red",}}>{error}</p>))}
        <form
          className={`form-register sign-up ${isSignupVisible ? "active" : ""}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2>CREAR CUENTA</h2>
          <label>
            <span>Nombre</span>
            <input {...register("username")} type="text" autoFocus />
          </label>

          { errors.username &&   <p className="text-center" style={{color: "red",}}>username is required</p>}
          <label>
            <span>Email</span>
            <input type="email" {...register("email")} />
            {errors.email && <p>Email Is required</p>}
          </label>
          <label>
            <span>Contraseña</span>
            <input type="password" {...register("password")} />
          </label>
          <div className="button-register">
            <button type="submit-register" className="submit-register ">
              Registrate
            </button>
          </div>
        </form>

        <div className="sub-cont-register">
          <div className="img-register">
            <div className={`img__text "m--in" : "m--up"}`}>
              <h2> ¿Ya tenés cuenta?</h2>
              
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
        <h2>¿Ya tenés cuenta?</h2>
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
