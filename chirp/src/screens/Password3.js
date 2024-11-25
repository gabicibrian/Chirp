import "../css/Access-general.css";
import "../css/Contraseña.css";
import Logo from "../assets/logo.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Password3 = () => {
  const navigate = useNavigate();
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [passwordVisibility2, setPasswordVisibility2] = useState(false);

    const handleIconChange = () => {
        setPasswordVisibility(prevState => !prevState);
    };

    const handleIconChange2 = () => {
        setPasswordVisibility2(prevState => !prevState);
    };
    
    const [openDialog, setOpenDialog] = useState(false);
    const [newPW, setNewPW] = useState('');
    const [confirmNewPW, setConfirmNewPW] = useState('');
    const [error, setError] = useState(false);

  const changePassword = (e) => {
    e.preventDefault();
    if (confirmNewPW === newPW) {
      setOpenDialog(true);
    } else{
      setError(true);
    }
      
  };
  const submitForm = (e) => {
    changePassword (e)
  }

  return (
    <div className="access-container">
      <div class="logo-container">
        <img src={Logo} alt="Chirp logo"></img>
      </div>

      <div className="container-heading groups-container">
        <h1 className="title">Cambia tu contraseña</h1>
      </div>

      <form className="password-form" onSubmit={changePassword}> 
        <div className="groups-container">
        {error &&
        <p className="label error-message">Las contraseñas no coinciden, intenta de nuevo.</p>
        }
        <md-outlined-text-field
            required
            label="Nueva contraseña"
            {...(passwordVisibility === true ? { type: 'text' } : { type: 'password' })}
            class="input-number label input-default"
            value={newPW}
            onInput={(e)=>{setNewPW(e.target.value)}}
            >
            <md-icon-button onClick={handleIconChange}
            toggle slot="trailing-icon" type="button">
                <md-icon >visibility</md-icon>
                <md-icon slot="selected">visibility_off</md-icon>
            </md-icon-button>
            </md-outlined-text-field>

          <md-outlined-text-field
            required
            label="Confirmar contraseña"
            {...(passwordVisibility2 === true ? {type:'text'}: {type:'password'})}
            class="input-number label input-default"
            value={confirmNewPW}
            onInput={(e)=>{setConfirmNewPW(e.target.value)}}
          >
            <md-icon-button toggle slot="trailing-icon" type="button"
            onClick={handleIconChange2}>
              <md-icon>visibility</md-icon>
              <md-icon slot="selected">visibility_off</md-icon>
            </md-icon-button>
          </md-outlined-text-field>
        </div>

        <div className="groups-container" id="pw-last-group">
          <md-filled-button class="btn-container label" onClick={submitForm}>
            Cambiar contraseña
          </md-filled-button>
          <md-text-button class="btn-container label" type="button"
          onClick={()=> navigate('/restaurar-contrasena/codigo')}>
            Cancelar
          </md-text-button>
        </div>
      </form>

      <md-dialog {...(openDialog ? {open:true} : {})}
      class='access-gen-dialog'> 
        <form slot="content" id="form-id" method="dialog" class="body access-dialog confirm-pass-dialog">
          Se cambió la contraseña exitosamente.
        </form>
        <div slot="actions">
          <md-text-button form="form-id" class="label access-dialog" onClick={(e)=>navigate('/inicio-sesion')}>Iniciar sesión</md-text-button>
        </div>
      </md-dialog>

      
    </div>
  );
};

export default Password3;
