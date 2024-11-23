import '../css/Loading.css';
import logo from '../assets/logo.svg';
import animation from '../assets/splash_animation.json'; //reemplazar por json file o vector
//import liquid from '../assets/liquid.svg';

const Loading = () => {
    return(
        <div className='loading-container'>
            
            <video className='loading-animation' autoPlay={true} muted={true} width="100%">
                <source src={animation} type='video/mp4'></source>
                Video not supported
            </video>


            <img src={logo} alt='Logo de Chirp' className='loading-logo'></img>
        </div>
    )
}

export default Loading;

