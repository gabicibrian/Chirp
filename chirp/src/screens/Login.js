import '../css/Login.css';
import Logo from '../assets/logo.svg';
import Input from '../components/Input';

const Login = () =>{
    return (
        <div className='login-container'>
            <img src={Logo}></img>
            <md-outlined-text-field label="Nombre de usuario" value="" className='login-input'>
            </md-outlined-text-field>
            <md-outlined-text-field label="Contraseña" value="" className='login-input' type="password">
            </md-outlined-text-field>
            <md-filled-button>Iniciar sesión</md-filled-button>
        </div>
    );
}

export default Login