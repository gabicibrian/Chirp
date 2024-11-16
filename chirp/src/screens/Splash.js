import '../css/Splash.css';
import logo from '../assets/logo.svg';
import animation from '../assets/splash-animation.mp4'; //reemplazar por json file o vector
import { motion} from "framer-motion";
//import liquid from '../assets/liquid.svg';

const Splash = () => {
    return(
        
      <motion.div exit={{opacity:0}}>
            <div className='loading-container'>
                
                <video className='loading-animation' autoPlay={true} muted={true} width="100%">
                    <source src={animation} type='video/mp4'></source>
                    Video not supported
                </video>


                <img src={logo} alt='Logo de Chirp' className='loading-logo'></img>
            </div>
        </motion.div>
    )
}

export default Splash;

