import '../css/index.css';
import '../css/Access-general.css';
import '../css/Buttons.css';
import '../css/Input.css';
import '../css/Contraseña.css';
import Logo from '../assets/logo.svg';

const Contraseña3 = () =>{
    return (
        <div className='container'>
            <div className="logo-container">
                <img src={Logo} alt="Chirp logo" id="login-logo"></img>
            </div>
            
            <div id="container-contraseña">
                <div className='container-heading'>
                    <h1 className='title'>Ingresa el código de verificación</h1>
                </div>
                <div>
                    <md-outlined-text-field label="1" type="number" value="" class='input-number label px10 input'>
                    </md-outlined-text-field>
                    <md-outlined-text-field label="" type="number" value="" class='input-number label px10 input'>
                    </md-outlined-text-field>
                    <md-outlined-text-field label="" type="number" value="" class='input-number label px10 input'>
                    </md-outlined-text-field>
                    <md-outlined-text-field label="" type="number" value="" class='input-number label px10 input'>
                    </md-outlined-text-field>
                    <md-outlined-text-field label="" type="number" value="" class='input-number label px10 input'>
                    </md-outlined-text-field>
                    <md-outlined-text-field label="" type="number" value="" class='input-number label px10 input'>
                    </md-outlined-text-field>
                </div>
            </div>
          
            <div className="groups-container-2 px130">
                <md-filled-button class="btn-container btn-LG label px10">Comprobar</md-filled-button>
                <md-text-button class="btn-container btn-LG label">Reenviar código</md-text-button>
            </div>            
        </div>
    );
}

export default Contraseña3