import '../css/index.css';
import '../css/Access-general.css';
import '../css/Buttons.css';
import '../css/Input.css';
import '../css/Contraseña.css';
import Logo from '../assets/logo.svg';

const Contraseña2 = () =>{
    return (
        <div className='container'>
            <div className="logo-container">
                <img src={Logo} alt="Chirp logo" id="login-logo"></img>
            </div>
            
            <div id="container-contraseña">
                <div className='container-heading'>
                    <h1 className='title'>Confirma tu correo</h1>
                </div>
                <md-outlined-text-field label="correo@gmail.com" type="email" class="input-default label">
                <md-icon-button toggle slot="trailing-icon">
                    <md-icon>edit</md-icon>
                    <md-icon slot="selected">check</md-icon>
                </md-icon-button>
                </md-outlined-text-field>
            </div>
          
            <div class="groups-container-2 px130">
                <md-filled-button class="btn-container btn-LG label px10">Enviar código</md-filled-button>
                <md-text-button class="btn-container btn-LG label">Cancelar</md-text-button>
            </div>            
        </div>
    );
}

export default Contraseña2