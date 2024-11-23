import '../css/index.css';
import '../css/Access-general.css';
import '../css/Access.css'
import '../css/Buttons.css';
import '../css/Input.css';
import Logo from '../assets/logo.svg';

const Access = () =>{
    return (
        <div className='container-access'>
            <div className="logo-access">
                <img src={Logo} alt="Chirp logo"></img>
            </div>
            
            <div className="groups-container-2">
                <md-filled-button class="btn-container btn-LG label px10">Iniciar sesión</md-filled-button>
                <md-text-button class="btn-container btn-LG label">Registrarse</md-text-button>
            </div>
        </div>
    );
}

export default Access
