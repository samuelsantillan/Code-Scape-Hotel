import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "../register/register.css";
import logoBeige from "../../assets/svg/logoBeige.svg";
import { registerRequest } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Footer from "../../components/Footer/Footer"
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
    <>
    <nav className="navAlternative d-flex"><a href="/"><img src={logoBeige} alt="logo" /></a></nav>
    <div className="main-container-register">
      <div className={`cont-register ${isSignupVisible ? "s--signup" : ""}`}>
        {RegisterErrors.map((error, i) => (<p key={i} className="text-center" style={{ color: "red", }}>{error}</p>))}
        <form
          className={`form-register sign-up ${isSignupVisible ? "active" : ""}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="h2-register">CREAR CUENTA</h2>
          <label className="label-register">
            <span>Nombre</span>
            <span>*</span>
            <input className="input-register" {...register("username")} type="text" autoFocus />
          </label>

          {errors.username && <p className="text-center" style={{ color: "red", }}>Usuario requerido</p>}
          <label className="label-register">
            <span>Email</span>
            <span>*</span>
            <input className="input-register" type="email" {...register("email")} />
            {errors.email && <p>Mail requerido</p>}
          </label>
          <label className="label-register">
            <span>Contraseña</span>
            <span>*</span>
            <input className="input-register" type="password" {...register("password")} />
          </label>
          <div className="button-register">
            <button type="submit-register" className="submit-register button-register2 ">
              Registrate
            </button>
          </div>
        </form>

        <div className="sub-cont-register">
          <div className="img-register">
            <div className={`img__text "m--in" : "m--up"}`}>
              <h2 className="h2-register img-text"> ¿Ya tenés cuenta?</h2>

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
    <Footer />
    </>
  );
};

export default Register;
