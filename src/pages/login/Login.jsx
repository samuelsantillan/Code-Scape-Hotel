import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext"
import logoBeige from "../../assets/svg/logoBeige.svg";
import "../register/register.css";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
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
    signin(value);
  };
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <>
    <nav className="navAlternative d-flex"><a href="/"><img src={logoBeige} alt="logo" /></a></nav>
    <div className="main-container-register">
      <div className={`cont-register ${isSignupVisible ? "s--signup" : ""}`}>
        <form className="form-register sign-in" onSubmit={handleSubmit(onSubmit)}>
          {signinErrors.map((error, i) => (
            <p key={i} className="text-center" style={{ color: "red" }}>
              {error}
            </p>
          ))}
          <h2 className="h2-register">BIENVENIDO</h2>
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
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres",
                },
              })}
            />
            {errors.password && (
              <p className="text-center" style={{ color: "red" }}>
                {errors.password.message}
              </p>
            )}
          </label>
          <div className="button-register">
            <button type="submit-register" className="submit-register button-register2">
              Iniciar sesión
            </button>
          </div>
        </form>
        <div className="sub-cont-register">
          <div className="img-register">
            <div className={`img__text ${isSignupVisible ? "m--in" : "m--up"}`}>
              <h2 className="h2-register img-text">{isSignupVisible ? "¿Ya tenés cuenta?" : "¿Sos nuevo?"}</h2>
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
        <h2 className="h2-register img-text">¿No tenes cuenta?</h2>{" "}
        <div className="img__btn">
          <a href="/register"> <span className={`m--up ${isSignupVisible ? "inactive" : ""}`}>
            Registrate
          </span></a>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Login;
