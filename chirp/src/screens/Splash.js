import '../css/Splash.css';
import logo from '../assets/logo.svg';
import animation from '../assets/splash-animation.json';
import { motion, AnimatePresence} from "framer-motion";
import Lottie from 'react-lottie';

const Splash = ({state}) => {
    
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };

    return(
        <div className='loading-container'>           
            <Lottie
                options={defaultOptions}
                height={450}
                width={390}
            />
            <img src={logo} alt='Logo de Chirp' className='loading-logo'></img>
        </div>
    )
}

export default Splash;

