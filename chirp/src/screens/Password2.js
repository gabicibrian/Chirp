import "../css/Access-general.css";
import "../css/Contraseña.css";
import Logo from "../assets/logo.svg";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Password2 = () => {
  const navigate = useNavigate();
  const [codeInput, setCodeInput] = useState(Array(4).fill(""));
  const inputRefs = useRef([]);

  //Lógica para pasar de un input a otro al escribir un caracter
  function handleChange(e, i) {
    const value = e.target.value;
    if (/^[a-zA-Z0-9]?$/.test(value)) {
      const updatedCodeInput = [...codeInput];
      updatedCodeInput[i] = value;
      setCodeInput(updatedCodeInput);

      if (value !== "" && i < codeInput.length - 1) {
        inputRefs.current[i + 1]?.focus();
      }
    }
  }

  function handleKeyDown(e, i) {
    if (e.key === "Backspace" && !codeInput[i] && i > 0) {
      inputRefs.current[i - 1]?.focus();
    }
  }

  return (
    <div className="access-container">
      <div className="logo-container">
        <img src={Logo} alt="Chirp logo"></img>
      </div>

      <div className="container-heading groups-container">
        <h1 className="title">Ingresa el código de verificación</h1>
      </div>

      <form className="password-form"
      onSubmit={() => navigate('/restaurar-contrasena/cambio')}>
        <div className="input-number-group">
          {codeInput.map((data, i) => (
            <md-outlined-text-field
              key={i}
              placeholder="0"
              value={data}
              ref={(el) => (inputRefs.current[i] = el)}
              onInput={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              type="text"
              class="input-number label input-default"
              required
            ></md-outlined-text-field>
          ))}
        </div>

        <div className="groups-container" id="pw-last-group">
          <md-filled-button class="btn-container label">
            Comprobar
          </md-filled-button>

          <md-text-button
            class="btn-container label"
            onClick={() => navigate('/restaurar-contrasena')}
            type="button"
          >
            Reenviar código
          </md-text-button>
        </div>
      </form>
    </div>
  );
};

export default Password2;
