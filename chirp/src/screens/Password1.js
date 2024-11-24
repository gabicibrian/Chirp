import '../css/Access-general.css';
import '../css/Contraseña.css';
import Logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

const Password1 = () =>{
    const navigate = useNavigate();
    return (
        <div className='access-container'>
            <div className="logo-container">
                <img src={Logo} alt="Chirp logo"></img>
            </div>
            
            <div className='container-heading groups-container'>
                <h1 className='title'>¿Olvidaste tu contraseña?</h1>
                <p className='body'>Ingresa tu correo para enviarte un código de verificación.</p>
            </div>

            <form className='password-form' onSubmit={()=> navigate('/restaurar-contrasena/codigo')}>
            <div className='groups-container'>
                <md-outlined-text-field label="Ingresa tu correo" value="" class='input-default label' type="email" required>
                </md-outlined-text-field>
            </div>
          
            <div className="groups-container" id='pw-last-group'>
                <md-filled-button class="btn-container label">Siguiente</md-filled-button>
                
                <md-text-button class="btn-container label" type='button' onClick={() => navigate('/inicio-sesion')}>Cancelar</md-text-button>
            </div>  
            </form>          
        </div>
    );
}

export default Password1