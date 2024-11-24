import "../css/Access-general.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import logoGoogle from "../assets/icon-google.svg";

const Login = () => {
  //Visibilidad de la contraseña
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const handleIconChange = () => {
    setPasswordVisibility((prevState) => !prevState);
  };

  //navegaciones
  const navigate = useNavigate();

  //Validaciones de sesión
  const signedUsername = localStorage.getItem("user");
  const signedPassword= localStorage.getItem("password");

  const [loginError, setLoginError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const validateLogin = (e) => {
    e.preventDefault();
    if (username === signedUsername && password===signedPassword) {
        navigate("/inicio");
    } else{
        setLoginError(true);
    }
    
  };

  return (
    <div className="access-container">
      <div className="logo-container">
        <img src={Logo} alt="Chirp logo"></img>
      </div>

      <form className="groups-container" onSubmit={validateLogin}>
        {loginError &&
        <p className="label error-message">Usuario o contraseña incorrecta, intenta de nuevo.</p>
        }
        
        <md-outlined-text-field
          label="Nombre de usuario"
          value={username}
          onInput={(e) => setUsername(e.target.value)}
          class="input-default label"
          required
        ></md-outlined-text-field>

        <md-outlined-text-field
          label="Contraseña"
          type="password"
          class="input-default label"
          required
          value={password}
          onInput={(e) => setPassword(e.target.value)}
          {...(passwordVisibility === true ? { type: "text" } : { type: "password" })}>
          <md-icon-button
            toggle
            slot="trailing-icon"
            type="button"
            onClick={handleIconChange}>
            <md-icon>visibility</md-icon>
            <md-icon slot="selected">visibility_off</md-icon>
          </md-icon-button>
        </md-outlined-text-field>

        <md-filled-button class="btn-container label">
          Iniciar sesión
        </md-filled-button>
        <Link to="/restaurar-contrasena" className="link-sm password-link">
          ¿Olvidaste tu contraseña?
        </Link>
      </form>

      <div className="separator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="111"
          height="1"
          viewBox="0 0 111 1"
          fill="none"
        >
          <path d="M0 0.5H111" stroke="#D0B3FF" />
        </svg>
        <p className="label-sm">o</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="111"
          height="1"
          viewBox="0 0 111 1"
          fill="none"
        >
          <path d="M0 0.5H111" stroke="#D0B3FF" />
        </svg>
      </div>

      <div className="groups-container">
        <md-filled-button
          href="https://accounts.google.com/login"
          class="btn-container label"
          id="btn-google"
        >
          <img src={logoGoogle} alt="Logo de Google" slot="icon"></img>
          Iniciar sesión con Google
        </md-filled-button>
      </div>

      <div className="groups-container" id="last-group">
        <p className="label-sm login-label px10">¿Aún no tienes una cuenta?</p>
        <md-text-button oonClick={() => navigate("/registro")} class="btn-container btn-LG label">
          Registrarse
        </md-text-button>
      </div>
    </div>
  );
};

export default Login;
