import '../css/index.css';
import '../css/Access-general.css';
import '../css/Buttons.css';
import '../css/Input.css';
import Logo from '../assets/logo.svg';

const Registro = () =>{
    return (
        <div className='container'>
            <div className="logo-container">
                <img src={Logo} alt="Chirp logo" id="login-logo"></img>
            </div>
            
            <div className="groups-container">
                <md-outlined-text-field label="Nombre de usuario" value="" class='input-default label px10'>
                </md-outlined-text-field>
                <md-outlined-text-field label="Correo" type="email" value="" class='input-default label px10'>
                </md-outlined-text-field>
                <md-outlined-text-field label="Contraseña" type="password" class="input-default label">
                <md-icon-button toggle slot="trailing-icon">
                    <md-icon>visibility</md-icon>
                    <md-icon slot="selected">visibility_off</md-icon>
                </md-icon-button>
                </md-outlined-text-field>
            </div>
          
            <div className="groups-container-2 px130">
                <md-filled-button class="btn-container btn-LG label px10">Iniciar sesión</md-filled-button>
            </div>

            <div className="groups-container-2">
                <p className="label-sm login-label px10">¿Ya tienes una cuenta?</p>
                <md-text-button class="btn-container btn-LG label">Registrarse</md-text-button>
            </div>
            
        </div>
    );
}

export default Registro