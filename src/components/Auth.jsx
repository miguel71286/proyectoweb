import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Auth.css";
import axios from "axios";
import video from "../images/logo1.mp4";
import swal from "sweetalert";

export default function Auth(props) {
  const { gestionarAcceso } = props; 
  const [tieneAcceso, setTieneAcceso] = useState(false); 
  const [estadoForm, setEstadoForm] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const [usernameRegistro, setUsernameRegistro] = useState("");
  const [emailRegistro, setEmailRegistro] = useState("");
  const [passwordRegistro, setPasswordRegistro] = useState("");
  const [registroError, setRegistroError] = useState(false);

  const cambiarForm = () => {
    setEstadoForm(!estadoForm);
    setEmail("");
    setPassword("");
    setUsernameRegistro("");
    setEmailRegistro("");
    setPasswordRegistro("");
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm(); 

  const gestorDeCambioDeModo = () => {
    if (!tieneAcceso) {
      setValue("Nombre", undefined);
    }
    setTieneAcceso(!tieneAcceso);
  };

  const registro = async (e) => {
    e.preventDefault();
    setRegistroError(false);
    if (
      usernameRegistro === "" ||
      emailRegistro === "" ||
      passwordRegistro === ""
    ) {
      setRegistroError(true);
      return;
    }
    await axios
      .post(process.env.REACT_APP_BACKEND_URL + "/api/usuarios/alta", {
        nombre: usernameRegistro, 
        email: emailRegistro, 
        password: passwordRegistro, 
      })
      .then((response) => {
        swal({
          title: "The Label Corner",
          text: "Usuario dado de alta con éxito",
          icon: "success",
          button: "Aceptar",
        });
        console.log("Usuario creado"); 
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const inicioSesion = async (e) => {
    e.preventDefault();
    setLoginError(false);
    if (email === "" || password === "") {
      setLoginError(true);
      return;
    }
    await axios
      .post(process.env.REACT_APP_BACKEND_URL + "/api/usuarios/login", {
        email: email, 
        password: password, 
      })
      .then((response) => {
        swal({
          title: "The Label Corner",
          text: "Inicio de sesión exitoso",
          icon: "success",
          button: "Aceptar",
        });
        console.log("Usuario loggeado"); 
      })
      .catch((error) => {
        console.log(error);
      });
  }; 


  return (
    <header>
    {/* <div class="overlay"></div> */}

    <video
      playsInline="playsInline"
      autoplay="autoplay"
      muted="muted"
      loop="loop"
    >
      <source src={video} type="video/mp4" />
    </video>

    <div class="container h-100">
    <div className="auth-component">
      {estadoForm ? (
        <div className="login-form">
          <form action="" onSubmit={inicioSesion}>
            <h2 className="text-center">Inicio Sesion</h2>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email Usuario"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control mt-3"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group d-flex justify-content-between">
              <input
                type="submit"
                className="btn btn-outline-success btn-block mt-4"
                value="Iniciar Sesion"
              />

              <button
                id="btn-cambia"
                type="button"
                className="btn btn-outline-secondary btn-block mt-4"
                onClick={cambiarForm}
              >
                Cambiar
              </button>
            </div>
            {loginError ? (
              <div
                className="alert alert-danger mt-4 col-auto mx-auto"
                role="alert"
              >
                TIENES QUE RELLENAR TODOS LOS CAMPOS
              </div>
            ) : null}
          </form>
        </div>
      ) : (
        <div className="login-form">
          <form action="" onSubmit={registro}>
            <h2 className="text-center">Registro</h2>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre Usuario"
                value={usernameRegistro}
                onChange={(e) => setUsernameRegistro(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control mt-3"
                placeholder="Email Usuario"
                value={emailRegistro}
                onChange={(e) => setEmailRegistro(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control mt-3"
                placeholder="Password"
                value={passwordRegistro}
                onChange={(e) => setPasswordRegistro(e.target.value)}
              />
            </div>
            <div  className="form-group d-flex justify-content-between">
              <input
              
                type="submit"
                className="btn btn-outline-success btn-block mt-4"
                value="Registrarse"
              />
              <button
                id="btn-cambia"
                type="button"
                className="btn btn-secondary btn-block mt-4"
                onClick={cambiarForm}
              >
                Cambiar
              </button>
            </div>
            {registroError ? (
              <div
                className="alert alert-danger mt-4 col-auto mx-auto"
                role="alert"
              >
                TIENES QUE RELLENAR TODOS LOS CAMPOS
              </div>
            ) : null}
          </form>
        </div>
      )}
    </div>
    </div>
  
    
    </header>
  );
}
