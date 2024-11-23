import '../css/index.css';
import '../css/Access-general.css';
import '../css/Buttons.css';
import '../css/Input.css';
import '../css/Contraseña.css';
import Logo from '../assets/logo.svg';

const Contraseña1 = () =>{
    return (
        <div className='container'>
            <div className="logo-container">
                <img src={Logo} alt="Chirp logo" id="login-logo"></img>
            </div>
            
            <div id="container-contraseña">
                <div className='container-heading'>
                    <h1 className='title'>¿Olvidaste tu contraseña?</h1>
                    <p className='body'>Ingresa tu correo para enviarte un código de verificación</p>
                </div>
                <md-outlined-text-field label="Ingresa tu correo" value="" class='input-default label px10'>
                </md-outlined-text-field>
            </div>
          
            <div className="groups-container-2 px130">
                <md-filled-button class="btn-container btn-LG label px10">Siguiente</md-filled-button>
                <md-text-button class="btn-container btn-LG label">Cancelar</md-text-button>
            </div>            
        </div>
    );
}

export default Contraseña1