import './css/Loading.css';
import logo from './assets/logo.svg';
import animation from './assets/splash-animation.mp4';

const Loading = () => {
    return(
        <div id='loading-container'>
            <video className='loading-animation' autoPlay width="100%">
                <source src={animation} type='video/mp4'></source>
                Video not supported
            </video>

            <img src={logo} alt='Logo de Chirp'></img>
        </div>
    )
}

export default Loading;