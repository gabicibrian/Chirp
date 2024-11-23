import '../css/index.css';
import '../css/Access-general.css';
import '../css/Buttons.css';
import '../css/Input.css';
import '../css/Contraseña.css';
import Logo from '../assets/logo.svg';

const Contraseña4 = () =>{
    return (
        <div className='container'>
            <div class="logo-container">
                <img src={Logo} alt="Chirp logo" id="login-logo"></img>
            </div>
            
            <div id="container-contraseña">
                <div className='container-heading'>
                    <h1 className='title'>Cambia tu contraseña</h1>
                </div>
                <md-outlined-text-field label="Nueva contraseña" type="password" class="input-default label px10">
                <md-icon-button toggle slot="trailing-icon">
                    <md-icon>visibility</md-icon>
                    <md-icon slot="selected">visibility_off</md-icon>
                </md-icon-button>
                </md-outlined-text-field>
                <md-outlined-text-field label="Confirmar contraseña" type="password" class="input-default label">
                <md-icon-button toggle slot="trailing-icon">
                    <md-icon>visibility</md-icon>
                    <md-icon slot="selected">visibility_off</md-icon>
                </md-icon-button>
                </md-outlined-text-field>
            </div>
          
            <div className="groups-container-2 px130">
                <md-filled-button class="btn-container btn-LG label px10">Cambiar contraseña</md-filled-button>
                <md-text-button class="btn-container btn-LG label">Cancelar</md-text-button>
            </div>            
        </div>
    );
}

export default Contraseña4