import "../css/Access-general.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import logoGoogle from "../assets/icon-google.svg";

const Registro = () => {
    //Visibilidad de la contraseña
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const handleIconChange = () => {
      setPasswordVisibility((prevState) => !prevState);
    };
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [openDialog, setOpenDialog] = useState(false);

    const validateSignup = (e) => {
        e.preventDefault();
        localStorage.setItem('name', name);
        localStorage.setItem('user', username);
        localStorage.setItem('password', password);
        setOpenDialog(true);
    };

  return (
    <div className="access-container">
      <div className="logo-container">
        <img src={Logo} alt="Chirp logo"></img>
      </div>

      <form className="groups-container" onSubmit={validateSignup}>
        <md-outlined-text-field
          label="Nombre y apellido"
          value={name}
          onInput={(e)=>setName(e.target.value)}
          class="input-default label"
          required
        ></md-outlined-text-field>
        
        <md-outlined-text-field
          label="Nombre de usuario"
          value={username}
          onInput={(e)=>setUsername(e.target.value)}
          class="input-default label"
          required
        ></md-outlined-text-field>

        <md-outlined-text-field
          label="Correo"
          type="email"
          value=""
          class="input-default label"
          required
        ></md-outlined-text-field>

        <md-outlined-text-field
          label="Contraseña"
          {...(passwordVisibility === true ? { type: "text" } : { type: "password" })}
          value={password}
          onInput={(e)=>setPassword(e.target.value)}
          class="input-default label"
          required
        >
          <md-icon-button toggle slot="trailing-icon" type='button' onClick={handleIconChange}>
            <md-icon>visibility</md-icon>
            <md-icon slot="selected">visibility_off</md-icon>
          </md-icon-button>
        </md-outlined-text-field>

        <md-filled-button class="btn-container label">
          Registrarse
        </md-filled-button>
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
        <md-filled-button class="btn-container label" id="btn-google" href="https://accounts.google.com/login">
          <img src={logoGoogle} alt="Logo de Google" slot="icon"></img>
          Registrarse con Google
        </md-filled-button>
      </div>

      <div className="groups-container" id="last-group">
        <p className="label-sm login-label px10">¿Ya tienes una cuenta?</p>

        <md-text-button class="btn-container label" onClick={() => navigate("/inicio-sesion")}>
          Iniciar Sesión
        </md-text-button>
      </div>

      <md-dialog {...(openDialog ? {open:true} : {})}
      class='access-gen-dialog'> 
        <form slot="content" id="form-id" method="dialog" class="body access-dialog">
          Cuenta creada exitosamente.
        </form>
        <div slot="actions">
          <md-text-button form="form-id" class="label access-dialog" onClick={(e)=>navigate('/inicio-sesion')}>Iniciar sesión</md-text-button>
        </div>
      </md-dialog>
    </div>
  );
};

export default Registro;
